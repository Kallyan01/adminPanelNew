import React, {useState, createContext} from "react";

export const GlobalContext = createContext({});

export const GlobalProvider = ({children}) => {

    const [navOpen, setNavOpen] = useState(true);

    return (
        <GlobalContext.Provider value = {
            {
                nav:[navOpen, setNavOpen],
            }
            }>
            {children}
        </GlobalContext.Provider>
    )
};