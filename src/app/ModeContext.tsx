import React from 'react'

export interface ModeContextType{
    mode : boolean,
    setMode: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModeContext=React.createContext<ModeContextType| null>(null);