import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

    const App = ()=>{
        const [contador,setcontador]=useState(0);
        const Sumar =()=>{

            setcontador(contador+1)

        
        
        }
        //const[name,setName]= useState('Percy')/**/
        return(
         <div className="App">  

            <div className="App--header">
                <img src={logo}
                className="App-logo"></img>            
                <div>{contador}</div>              
                     
            <button onClick={Sumar}>
                Sumar
            </button>
        
            
            </div>
            

        </div>
            
        )

    }
export default App

