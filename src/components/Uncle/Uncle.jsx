import React from 'react'
import Cousin from '../Cousin/Cousin'

const Uncle = () => {
  return (
    <div>
        <h2>Uncle</h2>
        <section className='flex'>
            <Cousin name={'Tamim'}></Cousin>
            <Cousin name={'Tanjina'}></Cousin>

        </section>
    </div>
  )
}

export default Uncle