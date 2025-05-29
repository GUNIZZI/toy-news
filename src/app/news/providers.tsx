// _component/NewsProvider.tsx
'use client';

import { createContext, useState, useContext } from 'react';

const NewsContext = createContext(null);

export function NewsProvider({ children }) {
    const [newsData, setNewsData] = useState({});

    return <NewsContext.Provider value={{ newsData, setNewsData }}>{children}</NewsContext.Provider>;
}

export function useNews() {
    return useContext(NewsContext);
}
