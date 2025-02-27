import React from 'react';

const SimpleForm = () => {
    const handleSubmit = (e) => {
         e.preventDefault(); // Prevents the page from refreshing
        console.log('Form Submitted');
        // below code is for getting individual text field value
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        
        console.log(e.target.phone.value);
        // 

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="text" name="phone" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;
