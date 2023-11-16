#! /bin/bash

# Source .env variables production
source .env

ssh-add "$HOME"/.ssh/id_rsa

SSH_CMD="ssh -o StrictHostKeyChecking=no -p $REMOTE_PORT $REMOTE_USER@$REMOTE_HOST"

echo ""
echo "###################################################"
echo "# Handling database dump from production to local"
echo "###############################################"
echo ""

echo "(0) Create a dump folder, if it does not exist ..."
mkdir -p ./dumps/production
echo "(1) Creating a temporary dump on production side and download it ..."
$SSH_CMD "dokku postgres:export backend" | cat > "./dumps/production/$(date +%Y-%m-%d_%H-%M-%S)-$PROJECT_NAME.sql"
echo "(2) Reading the latest production dump from local file system ..."
DUMP=$(make -s exec database "ls -t ./dumps/production | head -1")
echo "(3) Emptying local database ..."
make -s exec database "psql $LOCAL_DB_CONNECTION_STRING -c 'DROP SCHEMA public CASCADE; CREATE SCHEMA public;'"
echo "(4) Importing dump $DUMP ..."
make -s exec database "pg_restore --no-acl --no-owner -d $LOCAL_DB_CONNECTION_STRING /dumps/production/$DUMP"
echo "(5) Export types ..."
pnpm --filter @realexperts/backend directus models snapshot ../frontend/src/lib/types.ts
echo "(6) Run lint:fix ..."
pnpm lint:fix

echo ""
echo "##########################################"
echo "# Syncing files from production to local"
echo "######################################"
echo ""

rsync -avz --delete -e "ssh -p $REMOTE_PORT" "$REMOTE_USER"@"$REMOTE_HOST":~/backend_uploads/ ./packages/backend/uploads
