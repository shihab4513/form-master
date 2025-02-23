import React, { useEffect, useRef } from 'react'

const RefForm = () => {
    const nameRef=useRef(null);
    const emailRef=useRef(null);
    const passwordRef=useRef(null);
    // below uesEffect make sure whenever we enter this website cursor is pointed to name input field
    useEffect(()=>{
        nameRef.current.focus();
    },[])

    const handleSubmit=e=>{
        e.preventDefault();
        // to print whatever written in input name field , write below code
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name='name' />
                <br />
                {/* defaultValue is like place holder */}
                <input ref={emailRef} defaultValue={'Enter Email'} type="email" name="email" id="" />
                <br />
                <input ref={passwordRef} type="text" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
    </div>
  )
}

export default RefForm