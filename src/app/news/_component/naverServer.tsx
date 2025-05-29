import { API_fetchNaverList } from '../_service/naver';

export async function NewsListServer() {
    const data = await API_fetchNaverList();
    return { data };
}
