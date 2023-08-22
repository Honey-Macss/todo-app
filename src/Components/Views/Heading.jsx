import React from 'react'

const Heading = ({darkMode, moon, sun, toggler}) => {
  return (
    <div className=' flex justify-between items-center'>
        <h1 className=' text-[2.5rem] font-bold text-[white] '>T O D O</h1>
        <img onClick={toggler} src={darkMode ? sun : moon} alt="modes" />
    </div>
  )
}

export default Heading