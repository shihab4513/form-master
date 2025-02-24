import React from 'react'

const ReusableForm = ({formTitle,submitBtnText='Submit',handleSubmit,children}) => {

    const handleLocalSubmit=e=>{
        e.preventDefault();
        const data={
            name:e.target.name.value,
            email:e.target.email.value,
            password:e.target.password.value
        }
        handleSubmit(data);
    }
  return (
    <div>
        {children}
        <form onSubmit={handleLocalSubmit}>
                <input type="text" name='name' />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="text" name="password" id="" />
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
    </div>
  )
}

export default ReusableForm