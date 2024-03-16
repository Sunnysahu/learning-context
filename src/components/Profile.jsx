import React, { useContext } from "react";

import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Login</div>;
  return (
    <>
      <div>Welcome {user.username}</div>
      <div>Your Password is {user.password}</div>
    </>
  );
}

export default Profile;

/*

How it flows

1. Createed a USerContext.JS File and Created used React.createContext() and Exported it
2. Made a USerCOntextProvider.JSX file and Made a variable inside that, create whatever data you want and pass it as PROPS with UserContext.Provider ( EX -> <UserContext.Provider value={{ user, setUser }}> ) and Export the UserContextProvider.
3. Now in App.JSX File Wrap the Components you want the flow of data <UserContextProvider> <UserContextProvider/>

to Use the Context

--> Got to Whatever Component and Extract the PROPS using **Data Destructuring** with useContext(UserContext) and Pass the UserContext, which made at very 1st

*/
