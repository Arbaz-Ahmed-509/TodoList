import React from 'react'
import ToDo from './ToDo'
import Header from './Header'



const Main = () => {
  return (
    <div className='container'>
        <div className='app-wrapper'>
            <div>
                < Header />
            </div>
            <div>
                < ToDo />
            </div>
        </div>
    </div>
  )
}
export default Main




