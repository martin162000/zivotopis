import React from 'react'

interface Props {

    show :any;
    closeModalHandler: (data:any) => void
}  

const CategNodejs = (props: Props) => {
    const {show, closeModalHandler} = props
    return (
        <div className="modalWrapper aniFromTop"
        style={{
          display: show ? 'block' : 'none'
        }}
      >
        <div className="modalHeader">
          <h2>React</h2>
          <span onClick={closeModalHandler}>x</span>
        </div>
        <div className="modalContent">
  
          <div className="modalBody">
            <h4>Skúsenosti</h4>
            <article>
                <p>S týmto jazykom som začal pracovať v roku 2016. Vytvoril som pár scriptov na stránky, ktoré som mal. Jednou z nich bola stránka, kde si uživatelia mohli vymienať položky medzi sebou s použitím steamApi.
                   Použil som nodejs aj na maturitnú prácu, ako "scrap bota", ktorý bral produkty z rôznych stránok ako je footshop.sk, thestreets.sk atď. a ukladal ich do MySql databázy. Chcem tento jazyk aplikovať, ako backend pri
                   react aplikáciach.
                </p>
                    
            </article>
  
          </div>
  
        </div>
      </div>
    )
}

export default CategNodejs
