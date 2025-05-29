'use client';

import { useEffect, useRef } from 'react';
import { useLoader } from '../_hook/useGlobalLoader';

interface OwnProps {
    category: string;
    children: React.ReactNode;
}

export function ClientWrapper({ category, children }: OwnProps) {
    const { showLoader, hideLoader } = useLoader();
    const isFirstRenderRef = useRef(true);

    useEffect(() => {
        // if (isFirstRenderRef.current) {
        //     console.log('ClientWrapper rendered..');
        //     showLoader();
        //     isFirstRenderRef.current = false;
        // }

        // // 컴포넌트가 언마운트될 때 로더를 숨깁니다
        // return () => {
        //     hideLoader();
        // };
        console.log('ClientWrapper rendered..');
    }, [category]);

    return <>{children}</>;
}
