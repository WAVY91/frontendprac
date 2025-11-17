import React from 'react'

const Btn = ({text, color, title}) => {
  return (
    <>
    <div>
        <button className={`${text} ${color}`}>
            {title}
        </button>
    </div>
    </>
  )
}

export default Btn