// import Link from 'next/link';
// import { News, NewsResponse } from '../_type/news.type';
// import { useMemo } from 'react';
// import { formatDate } from '@/lib/date';
// import SanitizedHTML from './BoardTitle';

// export default function Board({ data }: { data: News[] }) {
//     // const totalCnt = useMemo(() => data.total, [data]);
//     // const newsList = useMemo(() => data.items, [data]);

//     return (
//         <ul className="space-y-0.5">
//             {data.map((item, idx) => (
//                 <li key={idx} className="flex items-center -mx-2 hover:bg-gray-100 p-2 rounded-md">
//                     {/* <span className="flex-shrink-0 w-[50px] text-sm text-gray-500 font-light">{totalCnt - idx}</span> */}
//                     <Link href={item.link} className="" title={`새창에서 링크 열기 : ${item.link}`} target="blank">
//                         {/* <span dangerouslySetInnerHTML={sanitizeHtml(item.title)} /> */}
//                         <SanitizedHTML html={item.title} />
//                     </Link>
//                     <span className="ml-auto text-sm text-gray-500 font-light">{formatDate(item.pubDate)}</span>
//                 </li>
//             ))}
//         </ul>
//     );
// }

import Link from 'next/link';
import { ServerApiNewsKakao, ServerApiNewsNaver } from '../_action/actions';
import SanitizedHTML from './BoardTitle';
import { News } from '../_type/news.type';
import { CATEGORY_LIST } from './titleWrap';

interface OwnProps {
    category: keyof typeof CATEGORY_LIST;
}

export default async function Board({ category }: OwnProps) {
    // const { items } = await ServerApiNewsNaver();

    let data;
    switch (category) {
        case 'kakao':
            data = await ServerApiNewsKakao({ page: 1 });
            break;
        default:
            data = await ServerApiNewsNaver({ page: 1 });
            break;
    }
    const { items } = data;

    return (
        <ul className="space-y-0.5">
            {items.map((item: News, idx: number) => (
                <li key={idx} className="flex items-center -mx-2 hover:bg-gray-100 p-2 rounded-md">
                    <Link href={item.link} className="" title={`새창에서 링크 열기 : ${item.link}`} target="blank">
                        <SanitizedHTML html={item.title} />
                    </Link>
                    <span className="ml-auto text-sm text-gray-500 font-light">{item.pubDate}</span>
                </li>
            ))}
        </ul>
    );
}
