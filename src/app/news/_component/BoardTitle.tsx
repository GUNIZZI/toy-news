'use client';

import { sanitizeHtml } from '@/lib/sanitizeHtml';
import { useEffect, useState } from 'react';

export default function SanitizedHTML({ html }: { html: string }) {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, [setIsMounted]);

    if (!isMounted) return <span className="text-xs text-gray-400">Parsing...</span>;

    return <span dangerouslySetInnerHTML={sanitizeHtml(html)} />;
}
