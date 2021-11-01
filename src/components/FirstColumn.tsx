import React from 'react'

import Vzdelanie from './firColumn/Vzdelanie';
import Jazyky from './firColumn/Jazyky';
import Zaujmy from './firColumn/Zaujmy';
import Opravnenia from './firColumn/Opravnenia';

import { TelephoneFill, 
    EnvelopeFill,
    HouseDoorFill,
    CalendarCheckFill,
    Facebook,
    Github
  } from 'react-bootstrap-icons';

const FirstColumn = () => {
    return (
        <div className='firstColumn'>
              
        <div className="columnBlock">
          <h2>Info</h2>
          <div className = "insideMarg">
              <ul>
                <li> <span className="icons"><TelephoneFill/></span> Tel.: <span className="listInfo lightFont">+421 904 960 867</span></li>
                <li> <span className="icons"><EnvelopeFill/></span> E-mail: <span className="listInfo lightFont">martin162000@gmail.com</span></li>
                <li> <span className="icons"><HouseDoorFill/></span> Adresa: <span className="listInfo lightFont">Hlavná, 3/34 Gbeľany</span></li>
                <li> <span className="icons"><CalendarCheckFill/></span> Dátum <span className="listInfo lightFont">narodenia: 16.02.2000</span></li>
              </ul>
          </div>
        </div>


        <Vzdelanie />
        <Jazyky />
        <Zaujmy />
        <Opravnenia />


        <div className="columnBlock">
          <div className="insideMarg leftAlign">
            <div className="gridIcons">
              <div>  <a href="https://www.facebook.com/martin.ziduliak/" target="_blank" rel="noopener noreferrer"><Facebook/></a></div>
              <div>  <a href="https://github.com/martin162000" target="_blank" rel="noopener noreferrer"><Github/></a></div>
            </div>
          </div>
        </div>
    </div>
    )
}

export default FirstColumn
