'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        // 에러 로깅 서비스에 에러를 보낼 수 있습니다
        console.error('뉴스 컴포넌트 에러:', error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-4">
            <h2 className="text-xl font-bold mb-4">문제가 발생했습니다</h2>
            <p className="text-gray-600 mb-6 text-center">뉴스를 불러오는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.</p>
            <div className="flex gap-4">
                <Button onClick={reset} variant="outline">
                    다시 시도
                </Button>
                <Button onClick={() => (window.location.href = '/')} variant="default">
                    홈으로 이동
                </Button>
            </div>
            {error.digest && <p className="text-xs text-gray-400 mt-8">에러 코드: {error.digest}</p>}
        </div>
    );
}
