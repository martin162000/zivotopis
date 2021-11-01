import React, { useContext } from 'react'
import { DataContext } from '../../DataContext';

import htmlIcon from '../../assets/img/htmlIcon.jpg';
import reactIcon from '../../assets/img/reactIcon.png';
import javaIcon from '../../assets/img/javaIcon.png';
import nodejsIcon from '../../assets/img/nodejsIcon.png';
import phpIcon from '../../assets/img/phpIcon.png';
import mysqlIcon from '../../assets/img/mysqlIcon.png';
import photoshopIcon from '../../assets/img/photoshopIcon.png';

const Experiences = () => {


  const {setValue} =  useContext(DataContext);


  const showBackgroundModal = (par:any) => {
      const elm = document.querySelector<HTMLElement>('.backDrop')!;
      elm.style.display = 'block';
      setValue(par)
  };

  
    return (
        <div className="mainBlock">
          <h2>Skúsenosti</h2>
          <div className="experiences">
              <div onClick={ () => showBackgroundModal("expReact")}>
                <h4> <img src={reactIcon} alt="iconReact" /> REACT <span className="plus">+</span></h4>
              </div>
              <div onClick={ () => showBackgroundModal("expHtml")}>
                <h4> <img src={htmlIcon} alt="iconHtml" /> HTML, JAVASCRIPT, CSS / SCSS <span className="plus">+</span></h4>
              </div>
              <div onClick={ () => showBackgroundModal("expJava")}>
                <h4> <img src={javaIcon} alt="iconJava" /> JAVA <span className="plus">+</span></h4>
              </div>
              <div onClick={ () => showBackgroundModal("expNodejs")}>
                <h4> <img src={nodejsIcon} alt="iconNodejs" />  NODEJS <span className="plus">+</span></h4>
              </div>
              <div onClick={ () => showBackgroundModal("expPhp")}>
                <h4> <img src={phpIcon} alt="iconPHP" /> PHP <span className="plus">+</span></h4>
              </div>
              <div onClick={ () => showBackgroundModal("expMysql")}>
                <h4> <img src={mysqlIcon} alt="iconMySQL" /> MySQL / SQL <span className="plus">+</span></h4>
              </div>
              <div onClick={ () => showBackgroundModal("expPhotoshop")}>
                <h4> <img src={photoshopIcon} alt="iconPhotoshop" />  Photoshop <span className="plus">+</span></h4>
              </div>
          </div>
        </div>
    )
}

export default Experiences
