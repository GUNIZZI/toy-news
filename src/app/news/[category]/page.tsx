export const dynamic = 'force-dynamic';

import React, { Suspense } from 'react';
import Title, { CATEGORY_LIST } from '../_component/titleWrap';
import Board from '../_component/Board';
import { Loader } from '@/components/ui/loader/loader';

interface OwnProps {
    params: {
        category: keyof typeof CATEGORY_LIST;
    };
}

function LoaderFallback() {
    return (
        <div className="flex justify-center items-center w-full min-h-[60vh]">
            <Loader className="w-16 text-xs text-gray-600" />
        </div>
    );
}

export default async function Page({ params }: OwnProps) {
    const { category } = await params;

    return (
        <>
            <div className="mb-6">
                <Title category={category} />
            </div>
            <Suspense fallback={<LoaderFallback />}>
                <Board category={category} />
            </Suspense>
        </>
    );
}
