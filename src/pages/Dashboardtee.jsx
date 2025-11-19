import React, { useEffect, useState } from 'react'

const Dashboardtee = () => {

    const user = JSON.parse(localStorage.getItem('user'))
  return (
    <>
    <div>
      <p>You are now logged in successfully!</p>
    </div>
    </>
  )
}

export default Dashboardtee