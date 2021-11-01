import React from 'react'

interface Props {

    show :any;
    closeModalHandler: (data:any) => void
    
}

const CategJava = (props: Props) => {
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
                <p>S javou som prvykrát začal robiť na vysokej škole, hlavne, v prvom ročníku.
                  Vytvoril som dve semestrálne práce. 
                </p>
  
                <p><br /> Prvá semestrálna práca bola hra "brickbreaker". Je to jednoduchá hra, kde hráč ovláda odrážaciu platformu, ktorú posúva šípkami vpravo/vľavo a snaží sa, aby nespadla lopta mimo platformu. 
                  Lopta, keď sa odráža, tak ničí vygenerované entity.
                  <div className="btnBlock"><a href="https://github.com/martin162000/other/tree/master/BrickBreaker" className="btn btnSmall" target="_blank" rel="noopener noreferrer"> Zobraziť projekt</a></div>
                </p>
  
                  <p><br /> Druhá semestrálna práca bola zameraná na polymorfizmus / dedičnosť. Vytvoril som simulačný model bankomatu, prepojený s MySql databázou, kde použivateľ sa prihlásil,
                  mohol peniaze vkladať / vyberať. 
                  <div className="btnBlock"><a href="https://github.com/martin162000/other/tree/master/Bank" className="btn btnSmall" target="_blank" rel="noopener noreferrer"> Zobraziť projekt</a></div>
                </p>
                    
            </article>
  
          </div>
  
        </div>
      </div>
    )
}

export default CategJava
