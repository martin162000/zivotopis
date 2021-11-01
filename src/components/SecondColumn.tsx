import React from 'react'

import Experiences from './secColumn/Experiences';
import Courses from './secColumn/Courses';
import Prax from './secColumn/Prax';


const SecondColumn = () => {
    return (
        <div className='secondColumn'>

        <div className="mainTitle">
          <h1>Martin Židuliak</h1>
          <h5>Životopis</h5>
        </div>


        <Prax/>
        <Courses />
        <Experiences />

      </div>
    )
}

export default SecondColumn
