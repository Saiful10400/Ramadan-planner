import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './../../../firebase_config';
import axios from "axios";
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
   
    // fetch data for task
    const[regularTaskData,setRegularData]=useState([])
    useEffect(()=>{
        axios.get("permanentData.json")
        .then(res=>setRegularData(res.data))
    },[])

    // fetch namaj time.
    const[prayerTime,setPrayerTime]=useState(null)
    useEffect(()=>{
        const url="https://muslimsalat.p.rapidapi.com/chandpur.json"
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7bb4d6a885msh44524ec540fda94p1405a9jsna21b0ad0c6f7',
                'X-RapidAPI-Host': 'muslimsalat.p.rapidapi.com'
            }
        };
    
        fetch(url,options)
        .then(res=>res.json())
        .then(result=>setPrayerTime(result))
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
        userLogin,user,regularTaskData,prayerTime
    }
    return (
        <dataProvider.Provider value={contextData}>
            {children}
        </dataProvider.Provider>
    );
};

export default ContextApi;