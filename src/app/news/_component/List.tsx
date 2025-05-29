import Board from './Board';
import { BoardClientWrapper } from './BoardClientWrapper';
import { API_fetchNaverList } from '../_service/naver';
import { API_fetchKakaoList } from '../_service/kakao';
import { NewsResponse } from '../_type/news.type';

interface OwnProps {
    category: string;
}

export default async function List({ category }: OwnProps) {
    console.log('API Req  >>  ', category);

    // const data = await API_fetchNaverList();

    let data: NewsResponse;
    switch (category) {
        case 'naver':
            data = await API_fetchNaverList();
            break;
        case 'kakao':
            data = await API_fetchKakaoList();
            break;
        default:
            data = await API_fetchNaverList();
            break;
    }

    // 임시로 딜레이(서스펜스 테스트)
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1초간 delay

    return (
        <BoardClientWrapper>
            <Board data={data} />;
        </BoardClientWrapper>
    );
}
