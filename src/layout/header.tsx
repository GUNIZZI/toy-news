import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 flex">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="font-bold text-xl">Toy News</span>
                    </Link>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <nav className="flex items-center space-x-4">
                        <Link href="/news" className="text-sm font-medium transition-colors hover:text-primary">
                            News
                        </Link>
                        <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                            About
                        </Link>
                    </nav>
                    <div className="flex items-center space-x-2">{/* <ModeToggle /> */}</div>
                </div>
            </div>
        </header>
    );
}
