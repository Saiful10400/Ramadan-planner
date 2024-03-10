import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './../../../firebase_config';
export const dataProvider=createContext(null)

const ContextApi = ({children}) => {


    // user subscribe and unsubscribe.
    const [user,setUser]=useState(null)
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(user)=>{
            setUser(user)
        })
        return ()=>unsubscribe
    },[])




    // fierbase login and signup handle.

    // firebase email signup.
    const CreateUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // firebase email login.
    const userLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // context api convaying data object.
    const contextData={
        CreateUser,
        userLogin,user
    }
    return (
        <dataProvider.Provider value={contextData}>
            {children}
        </dataProvider.Provider>
    );
};

export default ContextApi;