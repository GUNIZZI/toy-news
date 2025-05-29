import { NaverNewsResponse } from '../_type/news.type';

export const API_fetchNaverList = async (): Promise<NaverNewsResponse> => {
    // const response = await fetch('https://68249bf00f0188d7e72a0681.mockapi.io/list');
    // if (!response.ok) {
    //     throw new Error('Network response was not ok');
    // }
    // return response.json();
    const clientId = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
    const clientSecret = process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
        throw new Error('Naver API credentials are not set');
    }

    try {
        const headers = {
            'X-Naver-Client-Id': clientId,
            'X-Naver-Client-Secret': clientSecret,
        };
        const params = new URLSearchParams({
            query: '최신 뉴스',
            display: '100',
        });
        // const url = `/api/naver/v1/search/news.json?${params}`;
        const url = `https://openapi.naver.com/v1/search/news.json?${params}`;
        const response = await fetch(url, {
            headers,
        });

        return response.json();
    } catch (error) {
        throw error;
    }
};
