import React, {useState} from 'react'; 
import { Stocks } from "./components/Data/StudentDetails";
import LoginForm from './components/LoginForm';
function App() {
  const adminUser = {
    email:"hruday@gmail.com",
    password :"hruday123"
  }

  const [user, setUser] = useState({email: ""});
  const [error, setError] = useState("");

  const Login = details=>{
    console.log(details);

    if(details.email==adminUser.email && details.password==adminUser.password){
      console.log("Logged in");
      setUser({
        email: details.email.substring(0, details.email.lastIndexOf("@"))
      })
    }else{
      alert("Details do not match"+"\n"+"Try Again!!");
      //setError("Details do not match");
    }
  }

  const Logout = ()=>{
    console.log("Logout");
    setUser({email: ""});
  }
  return (
    <div className="App">
       {(user.email!="")?(
         <div className="welcome">
           <h1>EmployeeList</h1><br/>
          <div className="box">
           <Stocks />
           </div>
           <button onClick={Logout}>Logout</button>
           </div>
       ):(
         <LoginForm Login={Login} error={error} />
       )}
    </div>
  );
}

export default App;
