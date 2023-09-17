export interface PostData {
    target: string;
    max_crawl_pages: number;
    load_resources: boolean;
    enable_javascript: boolean;
    custom_js: string;
    tag: string;
    pingback_url: string;
    enable_browser_rendering: boolean;
}

export interface PageData {
    id: string;
}
