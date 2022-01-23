import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Account from './Account'

const LogIn = ( {session, setSession, setAlert} ) => {
  const [showSignIn, setShowSignIn] = useState(true);

   if (session) {
     return <Account session={session} setSession={setSession} />
   } 

   if (showSignIn) {
     return <SignIn setShowSignIn={setShowSignIn} setSession={setSession} />
   } else {
     return <SignUp setShowSignIn={setShowSignIn} setAlert={setAlert}/>
   }

}

export default LogIn;
