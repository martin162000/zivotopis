import React from 'react'

interface Props {
    show :any;
    closeModalHandler: (data:any) => void
}

const CategPhp = (props: Props) => {
    const {show, closeModalHandler} = props
    return (
        <div className="modalWrapper aniFromTop"
        style={{
          display: show ? 'block' : 'none'
        }}
      >
        <div className="modalHeader">
          <h2>Php</h2>
          <span onClick={closeModalHandler}>x</span>
        </div>
        <div className="modalContent">
  
          <div className="modalBody">
            <h4>Skúsenosti</h4>
            <article>
                <p>S php som sa prvykrát stretol v 2014, keď som ho použil pri vytváraní stránky (herného portálu) cms systém phpfusion. V ňom som musel niektoré pluginy prerábať, ktoré mi nevyhovovali, tak som sa začal učiť php.
                  Neskôr som vytvoril vlastný registračný systém uživateľov v php. Použil som php aj pri maturitnej práci, keď som potreboval vypísať produkty z databázy na stránku.
                  Mal som aj stránku, ktorá bežala vo wordpresse a v nich som vytvoril pár menších pluginov pomocou php. Mám zakúpeny kurz, na learn2code, ktorý plánujem absolovať cez voľný čas.
                </p>
                    
            </article>
  
          </div>
  
        </div>
      </div>
    )
}

export default CategPhp
