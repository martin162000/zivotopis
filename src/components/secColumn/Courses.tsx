import React, { useContext } from 'react'
import {EyeFill} from 'react-bootstrap-icons';
import { DataContext } from '../../DataContext';


const Courses = () => {

    const {setValue} =  useContext(DataContext);


    const showBackgroundModal = (par:any) => {
        const elm = document.querySelector<HTMLElement>('.backDrop')!;
        elm.style.display = 'block';
        setValue(par)
    };


    return (
        <div className="mainBlock">
          <h2>KURZY A ŠKOLENIA</h2>
          <div className="courseGrid">
            <div>
                  <div>
                    <h4>  <EyeFill onClick={ () => showBackgroundModal("sass")} /> CSS preprocesory: Sass</h4>
                      <p className="lightFont">  08/2021 (Learn2Code) </p>
                  </div>
                  <div>
                      <h4>  <EyeFill onClick={ () => showBackgroundModal("react")} /> React</h4>
                      <p className="lightFont">  09/2021 (Learn2Code) </p>
                  </div>
            </div>

            <div className="secDiv">
                  <div>
                      <h4>  <EyeFill onClick={ () => showBackgroundModal("webrebel")} /> Webrebel 1: HTML, CSS & JavaScript</h4>
                      <p className="lightFont">  09/2021 (Learn2Code) </p>
                  </div>
                  <div>
                      <h4>  <EyeFill onClick={ () => showBackgroundModal("mysql")}/> SQL databázy: MySQL a SQLite</h4>
                      <p className="lightFont">  09/2021 (Learn2Code) </p>
                  </div>
            </div>
          </div>
        </div>

    )
}

export default Courses
