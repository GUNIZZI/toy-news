'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { NewsLoader } from '../_component/Loader';

// Context 타입 정의
interface LoaderContextType {
    isLoading: boolean;
    showLoader: () => void;
    hideLoader: () => void;
}

// Context 생성
const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

// Provider 컴포넌트 정의
export function LoaderProvider({ children }: { children: ReactNode }) {
    const [isLoading, setIsLoading] = useState(false);

    const showLoader = () => setIsLoading(true);
    const hideLoader = () => setIsLoading(false);

    return (
        <LoaderContext.Provider value={{ isLoading, showLoader, hideLoader }}>
            {children}
            {isLoading && <NewsLoader />}
        </LoaderContext.Provider>
    );
}

// 커스텀 훅 생성
export function useLoader() {
    const context = useContext(LoaderContext);
    if (context === undefined) {
        throw new Error('useLoader must be used within a LoaderProvider');
    }
    return context;
}
