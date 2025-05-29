import * as React from 'react';
import { cn } from '@/lib/utils';
import Style from './loader.module.css';

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'spinner';
    children?: React.ReactNode;
}

export function Loader({ className, children = '로딩중', ...props }: LoaderProps) {
    return (
        <div className={cn(Style.loader, 'w-10 text-gray-400 text-sm', className)} {...props}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <span>{children}</span>
        </div>
    );
}
