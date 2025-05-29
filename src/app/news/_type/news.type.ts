export interface News {
    title: string;
    originallink: string;
    link: string;
    description: string;
    pubDate: string;
}
export interface NewsResponse {
    display: number;
    items: News[];
    lastBuildDate: string;
    start: number;
    total: number;
}

// 네이버
export interface NaverNews {
    title: string;
    originallink: string;
    link: string;
    description: string;
    pubDate: string;
}
export interface NaverNewsResponse {
    display: number;
    items: NaverNews[];
    lastBuildDate: string;
    start: number;
    total: number;
}

// 카카오
export interface KakaoNews {
    contents: string;
    datetime: string;
    title: string;
    url: string;
}
export interface KakaoNewsResponse {
    documents: KakaoNews[];
    meta: {
        is_end: false;
        pageable_count: number;
        total_count: number;
    };
}
