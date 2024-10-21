import { createContext, useState, ReactNode, useContext, useEffect, Children } from "react"

interface DocContextProviderProps {
    children : ReactNode,
}

interface DocContextProps {
    clickedNavItem : string,
    setClickedNavItem : (clickedNavItem: string) => void,
}

const DocContext = createContext<DocContextProps>({
    clickedNavItem: 'admin',
    setClickedNavItem: () => {}
});

export const DocContextProvider = ({children}: DocContextProviderProps) => {
    const [clickedNavItem, setClickedNavItem] = useState<string>('admin');
    const contextData = {
        clickedNavItem,
        setClickedNavItem
    }
    return(
        <DocContext.Provider value={contextData}>
            {children}
        </DocContext.Provider>
    )
}

export const useDocContext = () => {
    const context = useContext(DocContext);
    if (!context) {
        throw new Error("useDocContext must be used within a DocContextProvider");
    }
    return context;
};