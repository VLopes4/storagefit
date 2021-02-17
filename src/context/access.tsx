import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from  '@react-native-community/async-storage';
import { User } from '../models/User';
import { Alert } from 'react-native';

interface AccessContextData {
    first: boolean;
    user: User | null;
    loading: boolean;
    state: boolean;
    collect(
        name: string,
        weight: number,
        pretense: string
        ): Promise<void>;
    stateLoading(): void;
}

const AccessContext = createContext<AccessContextData>({} as AccessContextData);

export const AccessProvider: React.FC = ({ children }) => {
    const [first, setFirst] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState(false);

    useEffect(() => {
        async function LoadAccess(){
            const storageUser = await AsyncStorage.getItem('@storagefit:user');
            if(storageUser){
                setUser(JSON.parse(storageUser));
                setFirst(true);
            }
            setLoading(false);
        }
        LoadAccess();
    },[])

    async function collect(name: string, weight: number, pretense: string) {
        setLoading(true);
        const data: User = { name: name, startingWeight: weight, pretense: pretense };
        setUser(data);
        setFirst(true);
        await AsyncStorage.setItem('@storagefit:user', JSON.stringify(data));
        setLoading(false)
    }

    function stateLoading(){
        setState(!state);
    }

    return(
        <AccessContext.Provider value={{ first, user, loading, state, collect, stateLoading }}>
            { children }
        </AccessContext.Provider>
    );
}

export function useAccess(){
    const context = useContext(AccessContext);

    return context;
}