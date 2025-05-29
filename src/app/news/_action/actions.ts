'use server';

import { formatDateKakao, formatDateNaver } from '@/lib/date';
import { API_fetchKakaoList } from '../_service/kakao';
import { API_fetchNaverList } from '../_service/naver';
import { KakaoNews, NaverNews } from '../_type/news.type';

interface OwnProps {
    page?: number | undefined;
}

export async function ServerApiNewsNaver({ page = 1 }: OwnProps) {
    const res = await API_fetchNaverList(page);
    const parseData = {
        ...res,
        items: (res.items as NaverNews[]).map((item) => ({
            ...item,
            pubDate: formatDateNaver(item.pubDate),
        })),
    };
    return parseData;
}

export async function ServerApiNewsKakao({ page = 1 }: OwnProps) {
    const res = await API_fetchKakaoList(page);
    const parseData = {
        display: 10,
        items: (res.documents as KakaoNews[]).map((item) => ({
            title: item.title,
            originallink: item.url,
            link: item.url,
            description: item.contents,
            pubDate: formatDateKakao(item.datetime),
        })),
        lastBuildDate: '',
        start: page || 1,
        total: res.meta.total_count,
    };
    return parseData;
}
