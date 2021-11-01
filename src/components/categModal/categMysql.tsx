import React from 'react'

interface Props {
    show :any;
    closeModalHandler: (data:any) => void
}

const CategMysql = (props: Props) => {

    const {show, closeModalHandler} = props

    return (
        <div className="modalWrapper aniFromTop"
        style={{
          display: show ? 'block' : 'none'
        }}
      >
        <div className="modalHeader">
          <h2>MySQL / SQL</h2>
          <span onClick={closeModalHandler}>x</span>
        </div>
        <div className="modalContent">
  
          <div className="modalBody">
            <h4>Skúsenosti</h4>
            <article>
                <p>
                    Databázy sú neoddeliteľná súčasť webových stránok. Do roku 2019 som vytvoril pár menších databáz, ktoré som používal na vlastné webové stránky. V roku 2020 som použil MySql databázu s javou na semestrálnu prácu z predmetu informatika 2.
                    Na hodinách databázove systémy sme navrhli v skupinách databázu "karanténa covid", ako semestrálnu prácu. Používali sme Oracle.
  
                </p>
                    
            </article>
  
          </div>
  
        </div>
      </div>
    )
}

export default CategMysql
