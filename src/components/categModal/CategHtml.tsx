import React from 'react'

interface Props {
    show :any;
    closeModalHandler: (data:any) => void
    
}

const CategHtml = (props: Props) => {

    const {show, closeModalHandler} = props

    return (
      <div className="modalWrapper aniFromTop"
      style={{
        display: show ? 'block' : 'none'
      }}
    >
      <div className="modalHeader">
        <h2>Html, javascript, css/scss</h2>
        <span onClick={closeModalHandler}>x</span>
      </div>
      <div className="modalContent">

        <div className="modalBody">
          <h4>Skúsenosti</h4>
          <article>
              <p>Stránky som začal tvoriť v 2014.Zo začiatku som väčšinou len upravoval vytvorené stránky, ale neskôr som ich pár vytvoril.
                  Mal som herný portál zameraný na counter strike 1.6 a counter-strike: global offensive. Spravoval som servery a aj webovú stránku.
                  Bolo to okolo 12 serverov prepojených s jednou webovou stránkou. V 2016 som vytvoril webovú stránku prepojenú so steamApi, cez ktorú ľudia sa mohli zaregistrovať / prihlásiť
                  a uložilo ich údaje o profile, inventári z platformy steam do mojej webovej databázy (MySql). Ľudia, keď boli prihlásení, mohli si medzi sebou vymienať položky z inventára cez bota, ktorého som napísal pomocou nodejs.
                  </p>
                  <br/><p>V roku 2019 som vytvoril ako maturitnu prácu stránku, ktorá získavala produkty <em>(topánky zo stránok ako je footshop.sk, thestreets.sk atď)</em> a zobrazovala všetky produkty na jednej stránke. 
                  O získavanie dát produktov sa staral nodejs script, ten všetky produkty uložil do jednej databázy a potom som ich zobrazoval na mojej stránke.</p>

                  <br/><p> 2021 som absolvoval kurzy ako napríklad:
                  <br/> - Webrebel 1: HTML, CSS & JavaScript,
                  <br/> - CSS preprocesory: Sass,
                  <br/> - SQL databázy: MySQL a SQLite,
                  <br/> - Moderný JavaScript (ES2015+),
                  <br/> - React
                  <br/>
                  <br/>Aktuálne sa snažím pracovať v reacte, pretože sa mi páči rýchlosť tejto javascriptovej knižnice.</p>

          </article>

        </div>

      </div>
    </div>
    )
}

export default CategHtml
