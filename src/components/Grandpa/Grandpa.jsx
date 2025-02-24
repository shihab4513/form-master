import React from 'react'
import Dad from '../Dad/Dad'
import Uncle from '../Uncle/Uncle'
import Aunty from '../Aunty/Aunty'
import './Grandpa.css'

const Grandpa = () => {
    const asset='Diamond Ring';
  return (
    <div className='grandpa'>
         <h2>Grandpa</h2>
        <section className='flex'>
        <Dad asset={asset}></Dad>
        <Uncle></Uncle>
        <Aunty></Aunty>
        </section>
        
    </div>
  )
}

export default Grandpa