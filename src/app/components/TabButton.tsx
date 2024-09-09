import React from 'react'

function TabButton({active, selectTab, children}: {active: boolean, selectTab: () => void, children: React.ReactNode}) {
  
  const buttonClasses = active ? 'mr-3 font-semibold border-b border-purple-500 hover:text-white text-white' : 'mr-3 font-semibold border-b border-purple-500 hover:text-white text-[#ADB7BE]'
 
  return (
    <button onClick={selectTab}><p className= {`mr-3 font-semibold hover:text:text-white ${buttonClasses}`}>{children}</p></button>

  )
}

export default TabButton