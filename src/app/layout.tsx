import type { Metadata } from 'next';
import './globals.css';

import localFont from 'next/font/local';
import Header from '@/layout/header';
import Aside from '@/layout/aside';

import Providers from './providers';

const pretendard = localFont({
    src: '../../public/fonts/PretendardVariable.woff2',
    display: 'swap',
    weight: '45 920',
    variable: '--font-pretendard',
});

export const metadata: Metadata = {
    title: 'Toy News App',
    description: 'A simple news application built with Next.js',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className="h-full" lang="en" suppressHydrationWarning>
            <body className={`h-full ${pretendard.variable} font-sans antialiased`}>
                <Providers>
                    <div className="flex flex-col min-h-screen">
                        <Header />

                        <div className="flex flex-1">
                            <Aside />

                            <main className="flex-1 flex flex-col relative">
                                {/* <LoaderProvider> */}
                                <div className="container p-8 flex-1 h-full overflow-auto">{children}</div>
                                {/* <GlobalLoader /> */}
                                {/* </LoaderProvider> */}
                            </main>
                        </div>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
