
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
import HookForm from './components/HookForm/HookForm'
import RefForm from './components/RefForm/RefForm'
import ReusableForm from './components/ReusableForm/ReusableForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StatefulForm from './components/StatefulForm/StatefulForm'


function App() {
//  const handleSignUpSubmit=data=>{
//   console.log('SignUp data',data);
//  }

//  const handleUpdateProfile=data=>{
//   console.log('Update Profile data',data);
//  }

  return (
    <>
        <h1>Form Master</h1>
        {/* <SimpleForm></SimpleForm>      */}
        {/* <StatefulForm></StatefulForm> */}
        {/* <RefForm></RefForm> */}
        {/* <HookForm></HookForm> */}
        {/* <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
          <div>
            <h2>SignUp</h2>
            <p>SignUp right now!</p>
          </div>
        </ReusableForm>
        <ReusableForm formTitle={'Profile Update'} submitBtnText='Update' handleSubmit={handleUpdateProfile}>
          <div>
            <h2>Update Profile</h2>
            <p>Always keep your profile updated</p>
          </div>
        </ReusableForm> */}

        <Grandpa></Grandpa>


    </>
  )
}

export default App
