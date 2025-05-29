import React from 'react';

import { IconKakao } from '@/asset/svg/kakao';
import { IconNate } from '@/asset/svg/nate';
import { IconNaver } from '@/asset/svg/naver';

interface OwnProps {
    category: keyof typeof CATEGORY_LIST;
}

export const CATEGORY_LIST = {
    naver: {
        name: 'Naver',
        icon: <IconNaver />,
    },
    kakao: {
        name: 'Kakao',
        icon: <IconKakao />,
    },
    nate: {
        name: 'Nate',
        icon: <IconNate />,
    },
} as const;

export default function Title({ category }: OwnProps) {
    const displayName = CATEGORY_LIST[category].name;
    const displayIcon = CATEGORY_LIST[category].icon;

    return (
        <h2 className="flex items-end text-2xl font-semibold">
            <div className="p-5 mr-4 rounded-md bg-black/3">
                {React.cloneElement(displayIcon, {
                    className: `w-7 ${category === 'naver' ? 'text-green-500' : category === 'kakao' ? 'text-yellow-400' : category === 'nate' ? 'text-red-500' : 'text-current'}`,
                })}
            </div>
            <div>
                <span>{displayName} 뉴스</span>
                <p className="text-sm text-gray-500">{displayName} 최신 뉴스입니다.</p>
            </div>
        </h2>
    );
}
