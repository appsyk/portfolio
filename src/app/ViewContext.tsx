// ViewContext.jsx
"use client";

import { createContext, useContext, useState } from 'react';

export interface ViewContextType {
    view: number;
    setView: (view: number) => void;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export const ViewContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [view, setView] = useState(0);

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