'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { LoaderProvider } from './news/_hook/useGlobalLoader';

export default function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <LoaderProvider>{children}</LoaderProvider>
            </QueryClientProvider>
        </>
    );
}
