import React, { useContext } from 'react';

import kurzSass from '../assets/img/kurzSass.png';
import kurzReact from '../assets/img/kurzReact.png';
import kurzWebrebel from '../assets/img/kurzWebrebel.png';
import kurzMysql from '../assets/img/kurzMysql.png';
import { DataContext } from '../DataContext';


import CategMysql from './categModal/categMysql';
import CategPhotoshop from './categModal/CategPhotoshop';
import CategReact from './categModal/CategReact';
import CategHtml from './categModal/CategHtml';
import CategJava from './categModal/CategJava';
import CategNodejs from './categModal/CategNodejs';
import CategPhp from './categModal/CategPhp';


export const Modal = ({ show, type }:any) => {

  const {setValue} =  useContext(DataContext);
  let imgKurz:any;
  let nameModal:any;


  const closeModalHandler = () => { 
    const elm = document.querySelector<HTMLElement>('.backDrop')!;
    const modal = document.querySelector<HTMLElement>('.modalWrapper')!;

    elm.classList.add("fadeOut");
    modal.classList.remove("aniFromTop");
    modal.classList.add("aniToTop");

    setTimeout(() => {
      modal.style.display = 'none';
    }, 300);


    setTimeout(() => {
      elm.style.display = 'none';
      modal.style.display = 'none';
      setValue("");
      elm.classList.remove("fadeOut");
    }, 350);
 };


 switch (type) {
   case "sass":
      imgKurz = kurzSass;
      nameModal = "Kurz: Sass"
      break;

   case "react":
      imgKurz = kurzReact;
      nameModal = "Kurz: React"
      break;
 
   case "webrebel":
      imgKurz = kurzWebrebel;
      nameModal = "Kurz: Webrebel"
      break; 

  case "mysql":
      imgKurz = kurzMysql;
      nameModal = "Kurz: Mysql"
      break;
        
 
   default:
    console.log("NEBOL");
     break;
 }



 if ( type === "expReact") {
    return (
        <CategReact show={show} closeModalHandler={closeModalHandler} />
    )

  } else if ( type === "expHtml") {
    return (
        <CategHtml show={show} closeModalHandler={closeModalHandler} />
    )

  } else if ( type === "expJava") {
    return (
        <CategJava show={show} closeModalHandler={closeModalHandler} />
    )

  } else if ( type === "expNodejs") {
    return (
        <CategNodejs show={show} closeModalHandler={closeModalHandler} />
    )

  } else if ( type === "expPhp") {
    return (
      <CategPhp show={show} closeModalHandler={closeModalHandler} />
    )

  } else if ( type === "expMysql") {
    return (
      <CategMysql show={show} closeModalHandler={closeModalHandler} />
    )
  } else if ( type === "expPhotoshop") {
    return (
      <CategPhotoshop show={show} closeModalHandler={closeModalHandler} />
    )
  }

  return (
    <div className="modalWrapper aniFromTop"
    style={{
      display: show ? 'block' : 'none'
    }}
  >

    <div className="modalHeader">
      <h2>{nameModal}</h2>
      <span onClick={closeModalHandler}>x</span>
    </div>
    <div className="modalContent">
      <div className="modalBody">
          <img src={imgKurz} alt={nameModal + " img"} />
      </div>
    </div>
  </div>
  )
};