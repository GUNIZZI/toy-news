// src/hoc/withIconWrapper.tsx
import React from 'react';

export function withIconWrapper<P extends object>(WrappedComponent: React.ComponentType<P>) {
    return function WithIconWrapper(props: P & { className?: string }) {
        return (
            <div className={props.className || ''}>
                <WrappedComponent {...props} />
            </div>
        );
    };
}
