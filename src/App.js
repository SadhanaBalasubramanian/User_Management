import React from 'react';
import { BrowserRouter as Router , Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import UserData from "./components/UserData";

const  App=()=> {

  const dataURL="https://reqres.in/api/users";
  const [usersDetails, setUsersDetails] = useState([])
  
  useEffect(() => {
    const getUserDetails = async () => {
      const UserDataFromServer = await fetchUserDetails()
      setUsersDetails(UserDataFromServer.data)
    }
    getUserDetails()
  }, [])

  // Fetch User Details  
    const fetchUserDetails = async () => {
    const res = await fetch(dataURL);
    const data = await res.json();
    return data
  }

  
  return (
    <Router>
    <div className="container">
        <Header />
        <Route path='/about' component={About} />        
        <Route path='/' exact render={(props) => (
            <>
              {usersDetails.length > 0 ? (
              <UserData usersDetails={usersDetails}/>
                ) : (
                'No Users To Show'
                )}
              </>
          )}
        />
        <Footer /> 
    </div>
    </Router>
  );
}

export default App