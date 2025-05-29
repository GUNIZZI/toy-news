'use client';

import { useEffect, useState } from 'react';
import { useLoader } from '../_hook/useGlobalLoader';
import { CATEGORY_LIST } from './titleWrap';
import { ServerApiNewsNaver } from '../_action/actions';
import { NaverNews } from '../_type/news.type';
import Board from './Board';
import { useNews } from '../providers';

interface OwnProps {
    children?: React.ReactNode;
    category: keyof typeof CATEGORY_LIST;
}

export function BoardClientWrapper({ children, category }: OwnProps) {
    const [data, setData] = useState<NaverNews[]>([]);
    const { showLoader, hideLoader } = useLoader();

    useEffect(() => {
        showLoader();
        (async () => {
            try {
                const res = await ServerApiNewsNaver();
                // console.log('API Response  >>  ', res);
                console.log('API Response  >>  ', res.items.length);
                setData(res.items);
            } catch (error) {
                console.error('API Error:', error);
                throw error;
            } finally {
                hideLoader();
            }
        })();
    }, [category]);

    // useEffect(() => {
    //     console.log('Data change', data.length);
    //     // if (data) prevData = [...data];
    // }, [data]);

    // useEffect(() => {
    //     console.log('마운트');
    //     // if (data) prevData = [...data];
    // }, []);

    return (
        <>
            {JSON.stringify(data)}
            {/* <div>{category}</div> */}
            {/* <div>{JSON.stringify(data)}</div> */}
            {/* <Board data={newsData || []} /> */}
            {/* <div>{JSON.stringify(data)}</div> */}
            {/* {children} */}
        </>
    );
}
