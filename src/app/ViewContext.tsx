// ViewContext.jsx
"use client";

import { createContext, useContext, useState } from 'react';

export interface ViewContextType {
    view: number;
    setView: (view: number) => void;
}

interface Route {
    [key: number]: string;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export const route: Route = {
    0: '#about-me',
    1: '#resume',
    2: '#works'
}

export const ViewContextProvider = ({ children }: { children: React.ReactNode }) => {
    const currentHash = window.location.hash;
    const currentRoute = Object.entries(route).find(_ => _[1] === currentHash)?.[0];

    const [view, setView] = useState(Number(currentRoute));

    const contextValue: ViewContextType = {
        view,
        setView,
      };

    return (
        <ViewContext.Provider value={contextValue}>
            {children}
        </ViewContext.Provider>
    );
};

export const useViewContext = () => {
    const context = useContext(ViewContext);
    if (!context) {        
        throw new Error('useViewContext must be used within a MyProvider');
    }
    return context;
};