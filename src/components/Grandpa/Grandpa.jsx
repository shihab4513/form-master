import React, { useState } from 'react'
import Dad from '../Dad/Dad'
import Uncle from '../Uncle/Uncle'
import Aunty from '../Aunty/Aunty'
import './Grandpa.css'
import { createContext } from 'react'
export const AssetContext=createContext('Gold');
export const MoneyContext=createContext(1000);
const Grandpa = () => {
    const asset='Diamond Ring';
    const [money,setMoney]=useState(1000);
  return (
    <div className='grandpa'>
         <h2>Grandpa</h2>
         <p>{money}</p>
        <MoneyContext.Provider value={[money,setMoney]}>
        <AssetContext.Provider value='gold'>
        <section className='flex'>
        <Dad asset={asset}></Dad>
        <Uncle asset={asset}></Uncle>
        <Aunty></Aunty>
        </section>
        </AssetContext.Provider>
        </MoneyContext.Provider>
        
    </div>
  )
}

export default Grandpa

/*
1.Create context and export it
2.Add provider for the context with a value. Value can be anything .
3. useContext to access value in the context API
*/