import { KakaoNewsResponse } from '../_type/news.type';

export const API_fetchKakaoList = async (page: number): Promise<KakaoNewsResponse> => {
    const restKey = 'KakaoAK ' + process.env.NEXT_PUBLIC_KAKAO_REST_KEY;

    if (!restKey) {
        throw new Error('Naver API credentials are not set');
    }

    try {
        const headers = {
            Authorization: restKey,
        };
        const params = new URLSearchParams({
            query: '속보 -"최신뉴스" -"최신 뉴스"',
            sort: 'recency',
            size: String(process.env.NEXT_PUBLIC_NEWS_LEN),
        });
        const url = `https://dapi.kakao.com/v2/search/web?${params}`;
        const response = await fetch(url, {
            headers,
        });

        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};
