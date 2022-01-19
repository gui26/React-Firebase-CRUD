import React from "react";
import { useEffect, useState } from "react";
import { db } from "../components/Firebase.config";
import{ collection, getDocs, addDoc, updateDoc, deleteDoc, doc} from 'firebase/firestore';

export const Home = () =>{
    const [newName, setName] = useState('');
    const[Avaliation, setAvaliation] = useState('');

    const[user, setUser] = useState([]);
    const usersCollectionRef = collection(db, "Barbeiros");

    const CreateUser = async () =>{
        await addDoc(usersCollectionRef, {name: newName, avaliation: Avaliation})
        
    }

    const DeleteUser = async (id)=>{
        const userDoc = doc( db, "Barbeiros", id);
        await deleteDoc(userDoc);
    }

    useEffect(()=>{
        const Getuser = async ( )=>{
           const data = await getDocs(usersCollectionRef);
           setUser(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        Getuser();
    },[]);


    return(
        <>
         <h1>Crud com Firebase</h1>
         <input type='text' 
         placeholder="Digite seu nome" 
         onChange={(e)=>setName(e.target.value)}/>

         <input type='text'
          placeholder="Avaliação" 
          onChange={(e)=>setAvaliation(e.target.value)}/>
          <button onClick={CreateUser}>Criar usuario</button>

         {user.map((user)=>{
             return <div key={user.id}>
                        <h1>{user.name}</h1>
                        <p>{user.avaliation}</p>
                        <button onClick={()=>{DeleteUser(user.id)}}>Delete user</button>
                    </div>
         })}
        
        </>
    )
}

export default Home;