include .env

default: up

# Set default compose file
COMPOSE_FILE := $(COMPOSE_FILE)

# Set default compose command
COMPOSE_COMMAND := docker compose -f $(COMPOSE_FILE)

## help	:	Print commands help.
.PHONY: help
ifneq (,$(wildcard docker.mk))
help : docker.mk
	@sed -n 's/^##//p' $<
else
help : Makefile
	@sed -n 's/^##//p' $<
endif

## prepare-dev-env-files: Prepare env files for dev environment
.PHONY: prepare-dev-env-files
prepare-dev-env-files:
	commands/dev/prepare-env-files.sh

## prepare-dev-env-files-for-testing: Prepare env files additionally for testing environment
.PHONY: prepare-env-files-for-testing
prepare-env-files-for-testing:
	commands/dev/prepare-env-files-for-testing.sh

## prepare-test-env: Prepare environment for testing
.PHONY: prepare-test-env
prepare-test-env:
	commands/dev/prepare-test-env.sh

## up	:	Start up containers.
.PHONY: up
up:
	@echo "Starting up containers ..."
	$(COMPOSE_COMMAND) pull
	$(COMPOSE_COMMAND) up -d --no-deps --build --remove-orphans $(filter-out $@,$(MAKECMDGOALS))

# restart	:	Restart a single, or all containers.
.PHONY: restart
restart:
	@echo "Restarting container(s) ..."
	$(COMPOSE_COMMAND) restart $(filter-out $@,$(MAKECMDGOALS))

## down	:	Stop containers.
.PHONY: down
down: stop

## start	:	Start containers without updating.
.PHONY: start
start:
	@echo "Starting containers for $(PROJECT_NAME) from where you left off..."
	@$(COMPOSE_COMMAND) start

## stop	:	Stop containers.
.PHONY: stop
stop:
	@echo "Stopping containers for $(PROJECT_NAME)..."
	@$(COMPOSE_COMMAND) stop

## prune	:	Remove containers and their volumes.
##		You can optionally pass an argument with the service name to prune single container
##		prune database	: Prune `database` container and remove its volumes.
##		prune database solr	: Prune `database` and `solr` containers and remove their volumes.
.PHONY: prune
prune:
	@echo "Removing containers for $(PROJECT_NAME)..."
	@$(COMPOSE_COMMAND) down -v $(filter-out $@,$(MAKECMDGOALS))

## ps	:	List running containers.
.PHONY: ps
ps:
	@docker ps --filter name="$(PROJECT_NAME)*"

## shell	:	Access container via shell.
##		You can optionally pass an argument with a service name to open a shell on the specified container.
.PHONY: shell
shell:
	docker exec -ti -e COLUMNS=$(shell tput cols) -e LINES=$(shell tput lines) $(shell docker ps --filter name="$(PROJECT_NAME)_$(or $(filter-out $@,$(MAKECMDGOALS)), directus)" --format "{{ .ID }}") sh

## shell-root	:	Access container via shell with root permissions.
##		You can optionally pass an argument with a service name to open a shell on the specified container.
.PHONY: shell-root
shell-root:
	docker exec -ti -u 0 -e COLUMNS=$(shell tput cols) -e LINES=$(shell tput lines) $(shell docker ps --filter name="$(PROJECT_NAME)_$(or $(filter-out $@,$(MAKECMDGOALS)), directus)" --format "{{ .ID }}") sh

## logs	:	View containers logs.
##		You can optinally pass an argument with the service name to limit logs
##		logs php	: View `php` container logs.
##		logs nginx php	: View `nginx` and `php` containers logs.
.PHONY: logs
logs:
	@$(COMPOSE_COMMAND) logs -f $(filter-out $@,$(MAKECMDGOALS))

## pull	:	Pull re from prod
.PHONY: re-pull
re-pull:
	@./commands/production/re-pull.sh

## pull	:	Pull hg from prod
.PHONY: hg-pull
hg-pull:
	@./commands/production/hg-pull.sh

## db-import	:	Import latest database dump from ./dumps folder.
.PHONY: db-import
db-import: db-empty
	$(eval DUMP=$(shell ls -t ./dumps/production | head -1))
	@echo Importing dump $(DUMP)
	@$(COMPOSE_COMMAND) exec -T database cat /dumps/production/$(DUMP) | $(COMPOSE_COMMAND) exec -T database pg_restore --no-acl --no-owner -d $(LOCAL_DB_CONNECTION_STRING)

## db-dump	:	Dump the database in a dated gzip file within ./dumps folder.
.PHONY: db-dump
db-dump:
	@echo Exporting database ...
	@docker exec -i $(shell docker ps --filter name="$(PROJECT_NAME)_database" --format "{{ .ID }}") pg_dump $(LOCAL_DB_CONNECTION_STRING) | gzip > "./dumps/local/`date +%Y-%m-%d_%H-%M-%S`-$(PROJECT_NAME).sql.gz"

## db-empty	: 	Drop and recreate database.
.PHONY: db-empty
db-empty:
	@echo Drop the public schema and recreate it ...
	@$(COMPOSE_COMMAND) exec -T database psql $(LOCAL_DB_CONNECTION_STRING) -c "DROP SCHEMA public CASCADE; CREATE SCHEMA public;"

## grant-all	:	Grant all privileges on a database to a user.
.PHONY: grant-all
grant-all:
	@$(COMPOSE_COMMAND) exec -T database psql $(DB_CONNECTION_STRING) -c "GRANT ALL PRIVILEGES ON DATABASE $(DB_DATABASE) TO $(DB_USER)"
	@echo All privileges granted on database $(DB_DATABASE) to user $(DB_USER)

## exec	:	Execute command inside a service.
##		You can pass an argument with the service name and the command you want to execute
##		exec database "ls -ls" : Executes `ls -ls` in `database` service.
.PHONY: exec
exec:
	@$(COMPOSE_COMMAND) exec -T $(word 1,$(filter-out $@,$(MAKECMDGOALS))) bash -c "$(wordlist 2,$(words $(filter-out $@,$(MAKECMDGOALS))),$(filter-out $@,$(MAKECMDGOALS)))" 2>/dev/null


# https://stackoverflow.com/a/6273809/1826109
%:
	@:
