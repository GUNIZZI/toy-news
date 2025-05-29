'use client';

import { SportsSoccer as SoccerIcon, SportsBaseball as BaseballIcon } from '@mui/icons-material';
import Link from 'next/link';

import { IconNaver } from '@/asset/svg/naver';
import { IconNate } from '@/asset/svg/nate';
import { IconKakao } from '@/asset/svg/kakao';

export default function Aside() {
    return (
        <aside className="sticky top-[57px] z-30 hidden h-[calc(100vh-3.5rem)] w-64 border-r bg-background lg:block">
            <div className="flex h-full flex-col py-4">
                <div className="px-4 py-2 mt-2">
                    <h2 className="text-sm font-light tracking-tight">Weekly News</h2>
                </div>
                <div className="space-y-1 px-2">
                    <Link href="/news/naver" className="flex justify-start items-center p-2 px-4 rounded-sm font-semibold hover:bg-gray-100">
                        <div className="mr-2 w-5">
                            <IconNaver className="w-4 w-4 m-auto" />
                        </div>
                        Naver
                    </Link>
                    <Link href="/news/kakao" className="flex justify-start items-center p-2 px-4 rounded-sm font-semibold hover:bg-gray-100">
                        <div className="mr-2 w-5">
                            <IconKakao className="w-4 w-5" />
                        </div>
                        Kakao
                    </Link>
                    <Link href="/news/nate" className="flex justify-start items-center p-2 px-4 rounded-sm font-semibold hover:bg-gray-100">
                        <div className="mr-2 w-5">
                            <IconNate className="w-4 w-5" />
                        </div>
                        Nate
                    </Link>
                </div>
                <div className="px-4 py-2 mt-6">
                    <h2 className="text-sm font-light tracking-tight">Today Sport</h2>
                </div>
                <div className="space-y-1 px-2">
                    <Link href="./news/weeksport/soccer" className="flex justify-start items-center p-2 px-4 rounded-sm text-sm hover:bg-gray-100">
                        <SoccerIcon className="mr-2 h-3 w-3" />
                        Soccer
                    </Link>
                    <Link href="./news/weeksport/soccer" className="flex justify-start items-center p-2 px-4 rounded-sm text-sm hover:bg-gray-100">
                        <BaseballIcon className="mr-2 h-3 w-3" />
                        Baseball
                    </Link>
                </div>
            </div>
        </aside>
    );
}
