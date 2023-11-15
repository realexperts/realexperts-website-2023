export interface BlockCta {
    alignment: 'center' | 'left' | 'right' | null;
    ctas: BlockCtaCta[] | null;
    date_created: string | null;
    date_updated: string | null;
    id: number;
    user_created: DirectusUser | DirectusUser['id'] | null;
    user_updated: DirectusUser | DirectusUser['id'] | null;
}
export interface BlockCtaCta {
    block_cta_id: BlockCta | BlockCta['id'] | null;
    collection: string | null;
    id: number;
    item: ElementCtaExternal | ElementCtaExternal['id'] | ElementCtaInternal | ElementCtaInternal['id'] | null;
    sort: number | null;
}
export interface BlockHero {
    ctas: BlockHeroCta[] | null;
    date_created: string | null;
    date_updated: string | null;
    id: number;
    image: DirectusFile | DirectusFile['id'] | null;
    image_styles: ('rounded_tl' | 'rounded_tr' | 'rounded_bl' | 'rounded_br')[] | null;
    status: 'published' | 'draft' | 'archived' | null;
    subtitle: string | null;
    title: string | null;
    user_created: DirectusUser | DirectusUser['id'] | null;
    user_updated: DirectusUser | DirectusUser['id'] | null;
}
export interface BlockHeroCta {
    block_hero_id: BlockHero | BlockHero['id'] | null;
    collection: string | null;
    id: number;
    item: ElementCtaExternal | ElementCtaExternal['id'] | ElementCtaInternal | ElementCtaInternal['id'] | null;
}
export interface BlockLogoSlider {
    date_created: string | null;
    date_updated: string | null;
    id: number;
    slides: LogoSliderSlide[] | null;
    user_created: DirectusUser | DirectusUser['id'] | null;
    user_updated: DirectusUser | DirectusUser['id'] | null;
}
export interface BlockText {
    alignment: 'left' | 'center' | 'right' | null;
    color_headline: 're_blue' | 'turquoise' | 'white' | null;
    color_text: 're_blue' | 'turquoise' | 'white' | null;
    date_created: string | null;
    date_updated: string | null;
    design: 'style_1' | 'style_2' | 'style_3' | 'style_4' | 'style_5' | null;
    id: number;
    max_width: 'max-w-none' | 'max-w-xs' | 'max-w-sm' | 'max-w-md' | 'max-w-lg' | 'max-w-xl' | 'max-w-2xl' | null;
    max_width_container: 'max-w-none' | 'max-w-xs' | 'max-w-sm' | 'max-w-md' | 'max-w-lg' | 'max-w-xl' | 'max-w-2xl' | null;
    status: 'published' | 'draft' | 'archived' | null;
    text: string | null;
    user_created: DirectusUser | DirectusUser['id'] | null;
    user_updated: DirectusUser | DirectusUser['id'] | null;
}
export interface DirectusActivity {
    action: string;
    collection: string;
    comment: string | null;
    id: number;
    ip: string | null;
    item: string;
    origin: string | null;
    revisions: DirectusRevision[] | null;
    timestamp: string;
    user: DirectusUser | string | null;
    user_agent: string | null;
}
export interface DirectusCollection {
    accountability: string | null;
    archive_app_filter: boolean;
    archive_field: string | null;
    archive_value: string | null;
    collapse: string;
    collection: string;
    color: string | null;
    display_template: string | null;
    group: DirectusCollection | DirectusCollection['collection'] | null;
    hidden: boolean;
    icon: string | null;
    item_duplication_fields: any | null;
    note: string | null;
    preview_url: string | null;
    singleton: boolean;
    sort: number | null;
    sort_field: string | null;
    translations: any | null;
    unarchive_value: string | null;
    versioning: boolean;
}
export interface DirectusDashboard {
    color: string | null;
    date_created: string | null;
    icon: string;
    id: string;
    name: string;
    note: string | null;
    panels: DirectusPanel[] | null;
    user_created: DirectusUser | DirectusUser['id'] | null;
}
export interface DirectusExtension {
    enabled: boolean;
    name: string;
}
export interface DirectusField {
    collection: DirectusCollection | string;
    conditions: any | null;
    display: string | null;
    display_options: any | null;
    field: string;
    group: DirectusField | string | null;
    hidden: boolean;
    id: number;
    interface: string | null;
    note: string | null;
    options: any | null;
    readonly: boolean;
    required: boolean | null;
    sort: number | null;
    special: string[] | null;
    translations: any | null;
    validation: any | null;
    validation_message: string | null;
    width: string | null;
}
export interface DirectusFile {
    charset: string | null;
    description: string | null;
    duration: number | null;
    embed: string | null;
    filename_disk: string | null;
    filename_download: string;
    filesize: number | null;
    folder: DirectusFolder | DirectusFolder['id'] | null;
    height: number | null;
    id: string;
    location: string | null;
    metadata: any | null;
    modified_by: DirectusUser | DirectusUser['id'] | null;
    modified_on: string;
    pages_translations_meta_image: PagesTranslation[] | null;
    storage: string;
    tags: any | null;
    title: string | null;
    type: string | null;
    uploaded_by: DirectusUser | DirectusUser['id'] | null;
    uploaded_on: string;
    width: number | null;
}
export interface DirectusFlow {
    accountability: string | null;
    color: string | null;
    date_created: string | null;
    description: string | null;
    icon: string | null;
    id: string;
    name: string;
    operation: DirectusOperation | string | null;
    operations: DirectusOperation[] | null;
    options: any | null;
    status: string;
    trigger: string | null;
    user_created: DirectusUser | DirectusUser['id'] | null;
}
export interface DirectusFolder {
    id: string;
    name: string;
    parent: DirectusFolder | DirectusFolder['id'] | null;
}
export interface DirectusMigration {
    name: string;
    timestamp: string | null;
    version: string;
}
export interface DirectusNotification {
    collection: string | null;
    id: number;
    item: string | null;
    message: string | null;
    recipient: DirectusUser | DirectusUser['id'];
    sender: DirectusUser | DirectusUser['id'] | null;
    status: string | null;
    subject: string;
    timestamp: string | null;
}
export interface DirectusOperation {
    date_created: string | null;
    flow: DirectusFlow | DirectusFlow['id'];
    id: string;
    key: string;
    name: string | null;
    options: any | null;
    position_x: number;
    position_y: number;
    reject: DirectusOperation | DirectusOperation['id'] | null;
    resolve: DirectusOperation | DirectusOperation['id'] | null;
    type: string;
    user_created: DirectusUser | DirectusUser['id'] | null;
}
export interface DirectusPanel {
    color: string | null;
    dashboard: DirectusDashboard | DirectusDashboard['id'];
    date_created: string | null;
    height: number;
    icon: string | null;
    id: string;
    name: string | null;
    note: string | null;
    options: any | null;
    position_x: number;
    position_y: number;
    show_header: boolean;
    type: string;
    user_created: DirectusUser | DirectusUser['id'] | null;
    width: number;
}
export interface DirectusPermission {
    action: string;
    collection: string;
    fields: string[] | null;
    id: number;
    permissions: any | null;
    presets: any | null;
    role: DirectusRole | DirectusRole['id'] | null;
    validation: any | null;
}
export interface DirectusPreset {
    bookmark: string | null;
    collection: string | null;
    color: string | null;
    filter: any | null;
    icon: string | null;
    id: number;
    layout: string | null;
    layout_options: any | null;
    layout_query: any | null;
    refresh_interval: number | null;
    role: DirectusRole | DirectusRole['id'] | null;
    search: string | null;
    user: DirectusUser | DirectusUser['id'] | null;
}
export interface DirectusRelation {
    id: number;
    junction_field: string | null;
    many_collection: string;
    many_field: string;
    one_allowed_collections: string[] | null;
    one_collection: string | null;
    one_collection_field: string | null;
    one_deselect_action: string;
    one_field: string | null;
    sort_field: string | null;
}
export interface DirectusRevision {
    activity: DirectusActivity | DirectusActivity['id'];
    collection: string;
    data: any | null;
    delta: any | null;
    id: number;
    item: string;
    parent: DirectusRevision | DirectusRevision['id'] | null;
    version: DirectusVersion | DirectusVersion['id'] | null;
}
export interface DirectusRole {
    admin_access: boolean;
    app_access: boolean;
    description: string | null;
    enforce_tfa: boolean;
    icon: string;
    id: string;
    ip_access: string[] | null;
    name: string;
    users: DirectusUser[] | null;
}
export interface DirectusSession {
    expires: string;
    ip: string | null;
    origin: string | null;
    share: DirectusShare | DirectusShare['id'] | null;
    token: string;
    user: DirectusUser | DirectusUser['id'] | null;
    user_agent: string | null;
}
export interface DirectusSetting {
    auth_login_attempts: number | null;
    auth_password_policy: string | null;
    basemaps: any | null;
    custom_aspect_ratios: any | null;
    custom_css: string | null;
    default_appearance: string;
    default_language: string;
    default_theme_dark: string | null;
    default_theme_light: string | null;
    id: number;
    mapbox_key: string | null;
    module_bar: any | null;
    project_color: string;
    project_descriptor: string | null;
    project_logo: DirectusFile | DirectusFile['id'] | null;
    project_name: string;
    project_url: string | null;
    public_background: DirectusFile | DirectusFile['id'] | null;
    public_favicon: DirectusFile | DirectusFile['id'] | null;
    public_foreground: DirectusFile | DirectusFile['id'] | null;
    public_note: string | null;
    storage_asset_presets: any | null;
    storage_asset_transform: string | null;
    storage_default_folder: DirectusFolder | DirectusFolder['id'] | null;
    theme_dark_overrides: any | null;
    theme_light_overrides: any | null;
}
export interface DirectusShare {
    collection: DirectusCollection | DirectusCollection['collection'];
    date_created: string | null;
    date_end: string | null;
    date_start: string | null;
    id: string;
    item: string;
    max_uses: number | null;
    name: string | null;
    password: string | null;
    role: DirectusRole | DirectusRole['id'] | null;
    times_used: number | null;
    user_created: DirectusUser | DirectusUser['id'] | null;
}
export interface DirectusTranslation {
    id: string;
    key: string;
    language: string;
    value: string;
}
export interface DirectusUser {
    appearance: string | null;
    auth_data: any | null;
    avatar: DirectusFile | string | null;
    description: string | null;
    email: string | null;
    email_notifications: boolean | null;
    external_identifier: string | null;
    first_name: string | null;
    id: string;
    language: string | null;
    last_access: string | null;
    last_name: string | null;
    last_page: string | null;
    location: string | null;
    password: string | null;
    provider: string;
    role: DirectusRole | DirectusRole['id'] | null;
    status: string;
    tags: any | null;
    tfa_secret: string | null;
    theme_dark: string | null;
    theme_dark_overrides: any | null;
    theme_light: string | null;
    theme_light_overrides: any | null;
    title: string | null;
    token: string | null;
}
export interface DirectusVersion {
    collection: DirectusCollection | DirectusCollection['collection'];
    date_created: string | null;
    date_updated: string | null;
    hash: string | null;
    id: string;
    item: string;
    key: string;
    name: string | null;
    user_created: DirectusUser | DirectusUser['id'] | null;
    user_updated: DirectusUser | DirectusUser['id'] | null;
}
export interface DirectusWebhook {
    actions: string[];
    collections: string[];
    data: boolean;
    headers: any | null;
    id: number;
    method: string;
    name: string;
    status: string;
    url: string;
}
export interface ElementCtaExternal {
    date_created: string | null;
    date_updated: string | null;
    id: number;
    title: string | null;
    url: string | null;
    user_created: DirectusUser | DirectusUser['id'] | null;
    user_updated: DirectusUser | DirectusUser['id'] | null;
}
export interface ElementCtaInternal {
    anchor: Section | Section['id'] | null;
    date_created: string | null;
    date_updated: string | null;
    id: number;
    linked_page: PagesTranslation | PagesTranslation['id'] | null;
    title: string | null;
    user_created: DirectusUser | DirectusUser['id'] | null;
    user_updated: DirectusUser | DirectusUser['id'] | null;
}
export interface Language {
    code: string;
    direction: 'ltr' | 'rtl' | null;
    name: string | null;
}
export interface LogoSliderSlide {
    date_created: string | null;
    date_updated: string | null;
    id: number;
    image: DirectusFile | DirectusFile['id'] | null;
    parent_logo_slider: BlockLogoSlider | BlockLogoSlider['id'] | null;
    sort: number | null;
    title: string | null;
    user_created: DirectusUser | DirectusUser['id'] | null;
    user_updated: DirectusUser | DirectusUser['id'] | null;
}
export interface MainMenu {
    date_created: string | null;
    date_updated: string | null;
    id: number;
    translations: MainMenuTranslation[] | null;
    user_created: DirectusUser | DirectusUser['id'] | null;
    user_updated: DirectusUser | DirectusUser['id'] | null;
}
export interface MainMenuNode {
    anchor: Section | Section['id'] | null;
    date_created: string | null;
    date_updated: string | null;
    id: number;
    linked_page: PagesTranslation | PagesTranslation['id'] | null;
    parent_menu: MainMenuTranslation | MainMenuTranslation['id'] | null;
    sort: number | null;
    title: string | null;
    type: 'intern' | 'extern' | null;
    url: string | null;
    user_created: DirectusUser | DirectusUser['id'] | null;
    user_updated: DirectusUser | DirectusUser['id'] | null;
}
export interface MainMenuTranslation {
    id: number;
    languages_code: Language | Language['code'] | null;
    main_menu_id: MainMenu | MainMenu['id'] | null;
    nodes: MainMenuNode[] | null;
    title: string | null;
}
export interface Page {
    date_created: string | null;
    date_updated: string | null;
    id: number;
    translations: PagesTranslation[] | null;
    user_created: DirectusUser | DirectusUser['id'] | null;
    user_updated: DirectusUser | DirectusUser['id'] | null;
}
export interface PagesTranslation {
    id: number;
    languages_id: Language | Language['code'] | null;
    meta_description: string | null;
    meta_image: DirectusFile | DirectusFile['id'] | null;
    meta_title: string | null;
    pages_id: Page | Page['id'] | null;
    sections: PagesTranslationsSection[] | null;
    show_title: boolean | null;
    status: 'published' | 'draft' | null;
    title: string | null;
    url: string | null;
}
export interface PagesTranslationsSection {
    id: number;
    pages_translations_id: PagesTranslation | PagesTranslation['id'] | null;
    sections_id: Section | Section['id'] | null;
    sort: number | null;
}
export interface Section {
    blocks: SectionsBlock[] | null;
    color: string | null;
    date_created: string | null;
    date_updated: string | null;
    id: number;
    section_styles: 'full_width'[] | null;
    slug: string | null;
    status: 'published' | 'draft' | 'archived' | null;
    user_created: DirectusUser | DirectusUser['id'] | null;
    user_updated: DirectusUser | DirectusUser['id'] | null;
}
export interface SectionsBlock {
    collection: string | null;
    id: number;
    item: BlockText | BlockText['id'] | BlockHero | BlockHero['id'] | BlockCta | BlockCta['id'] | BlockLogoSlider | BlockLogoSlider['id'] | null;
    sections_id: Section | Section['id'] | null;
    sort: number | null;
}
export interface Setting {
    favicon: DirectusFile | DirectusFile['id'] | null;
    id: number;
    meta_description: string | null;
    meta_image: DirectusFile | DirectusFile['id'] | null;
    meta_title: string | null;
    project_name: string | null;
    robots_index: boolean | null;
}
export type Collections = {
    block_cta: BlockCta[];
    block_cta_ctas: BlockCtaCta[];
    block_hero: BlockHero[];
    block_hero_ctas: BlockHeroCta[];
    block_logo_slider: BlockLogoSlider[];
    block_text: BlockText[];
    directus_activity: DirectusActivity[];
    directus_collections: DirectusCollection[];
    directus_dashboards: DirectusDashboard[];
    directus_extensions: DirectusExtension[];
    directus_fields: DirectusField[];
    directus_files: DirectusFile[];
    directus_flows: DirectusFlow[];
    directus_folders: DirectusFolder[];
    directus_migrations: DirectusMigration[];
    directus_notifications: DirectusNotification[];
    directus_operations: DirectusOperation[];
    directus_panels: DirectusPanel[];
    directus_permissions: DirectusPermission[];
    directus_presets: DirectusPreset[];
    directus_relations: DirectusRelation[];
    directus_revisions: DirectusRevision[];
    directus_roles: DirectusRole[];
    directus_sessions: DirectusSession[];
    directus_settings: DirectusSetting;
    directus_shares: DirectusShare[];
    directus_translations: DirectusTranslation[];
    directus_users: DirectusUser[];
    directus_versions: DirectusVersion[];
    directus_webhooks: DirectusWebhook[];
    element_cta_external: ElementCtaExternal[];
    element_cta_internal: ElementCtaInternal[];
    languages: Language[];
    logo_slider_slides: LogoSliderSlide[];
    main_menu: MainMenu;
    main_menu_nodes: MainMenuNode[];
    main_menu_translations: MainMenuTranslation[];
    pages: Page[];
    pages_translations: PagesTranslation[];
    pages_translations_sections: PagesTranslationsSection[];
    sections: Section[];
    sections_blocks: SectionsBlock[];
    settings: Setting;
};
export type CollectionName = keyof Collections;
export type ItemIn<CollectionKey extends CollectionName> = Collections[CollectionKey] extends (infer Item extends Record<string, any>)[] ? Item : Collections[CollectionKey];
