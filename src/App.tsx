import React, { useRef, useState} from 'react';
//import logo from './logo.svg';
import './assets/scss/App.scss';

import FirstColumn from './components/FirstColumn';
import SecondColumn from './components/SecondColumn';
import { Modal } from './components/Modal';

import {DataContext} from './DataContext';


function App() {
  const [value, setValue] = useState("");

  const backDropRef:any = useRef();

  const closeModalHandler = () => { 

    backDropRef.current.classList.add("fadeOut");

    const modal = document.querySelector<HTMLElement>('.modalWrapper')!;
    modal.classList.remove("aniFromTop");
    modal.classList.add("aniToTop");

    setTimeout(() => {
      modal.style.display = 'none';
      backDropRef.current.style.display = 'none';
      
    }, 300);

    setTimeout(() => {
      setValue("");

      backDropRef.current.classList.remove("fadeOut");
    }, 350);

  };


  
  return (
    <div className="App">
    <DataContext.Provider value={{value, setValue}}>     

        <div className='wrapper'>
            <FirstColumn />
            <SecondColumn />
        </div>

        <div className='blackUnderBox'></div>

  
          <div ref={backDropRef} onClick={closeModalHandler} className="backDrop"> </div>
          {value.length > 0 ? <Modal show={true} type={value}/> : null}
       </DataContext.Provider>

    </div>
  );
}

export default App;
