import { API_naverNews } from '../_service/naver';

export function useNaver() {
    const res = API_naverNews();
    // console.log('useNaver', res);
    return {
        res,
    };
}
