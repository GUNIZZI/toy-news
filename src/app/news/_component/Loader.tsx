'use client';

import { Loader } from '@/components/ui/loader/loader';
import { useCallback, useEffect, useState } from 'react';

export function NewsLoader() {
    const [pos, setPos] = useState({ width: 0, height: 0 });

    useEffect(() => {
        hndlResize();

        window.addEventListener('resize', hndlResize);

        return () => {
            window.removeEventListener('resize', hndlResize);
        };
    }, []);

    const hndlResize = useCallback(() => {
        const wid = document.querySelector('main')?.getBoundingClientRect()?.width;
        const hgt = window.innerHeight - 57;
        if (wid && hgt) setPos({ width: wid, height: hgt });
    }, []);

    return (
        <div className="fixed bottom-0 right-0 max-h-screen flex items-center justify-center bg-white/40 backdrop-blur-xs" style={{ width: pos.width, height: pos.height }}>
            <Loader className="w-16 text-xs text-gray-600" />
        </div>
    );
}
