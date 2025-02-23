import React from 'react'
import useInputState from '../../hooks/useInputState';

const HookForm = () => {
    // const [name,handleNameChange]=useInputState('Rojoni');
    const emailState=useInputState('r@g.com');

    const handleSubmit=e=>{
        e.preventDefault();
        // console.log(name);
        console.log(emailState.value);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name='name' /> */}
                <br />
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input type="text" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
    </div>
  )
}

export default HookForm