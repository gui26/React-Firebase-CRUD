import React from "react"
import { useState } from "react"
import {db} from '../components/Firebase.config';
import { getDoc, addDoc, updateDoc, deleteDoc, doc} from  'firebase/firestore';
import { useEffect } from "react";

export const Home = () =>{
    const[name, setName] = useState('');
    const[avaliation, setAvaliation] = useState('');


    

const AddUser = async () =>{

}

useEffect(()=>{
    const GetUser = async ()=>{

    }
    GetUser()
},[])


    return(
        <>
        <h1>Crud com Firebase</h1>
        <input type='text' placeholder="Digite seu Nome" 
        onChange={(e) =>setName(e.target.value)}/>
        
        <input type='text' placeholder="Digite sua avaliação" 
        onChange={(e) =>setAvaliation(e.target.value)}/>
         
        <button onClick={AddUser}>adiconar usuario</button>
        </>
    )
}