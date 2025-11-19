import { useLocation } from "react-router-dom";

const Dashboardtee = () => {
  const location = useLocation();
  const user = location.state?.user;

  return (
    <div>
      <h1>Welcome {user?.firstName} {user?.lastName}</h1>
      <p>Email: {user?.email}</p>
    </div>
  );
};


// import React, { useEffect, useState } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'

// const Dashboardtee = () => {

//     const user = JSON.parse(localStorage.getItem('user'))

//     // const location = useLocation()
//     // const navigate = useNavigate()

//     // const user = location.state?.user

//     // if (!user) {
//     //   <h3>No user found</h3>
//     //   navigate('/signintee')
//     // }
//   return (
//     <>
//     <div>
//       {/* <h3>Welcome, {user.firstName} {user.lastName} 👋</h3> */}
//       <p>You are now logged in successfully!</p>
//     </div>
//     </>
//   )
// }

// export default Dashboardtee