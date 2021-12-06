import React from 'react'

import movieApp from '../../assets/img/reactApps/movieApp.png';
import movieAppBackend from '../../assets/img/reactApps/movieAppWithBackend.png';
import utulky from '../../assets/img/reactApps/utulkyApp.png';
import reminderApp from '../../assets/img/reactApps/reminderApp.png';
import zivotopisApp from '../../assets/img/reactApps/zivotopisApp.png';

interface Props {
    show :any;
    closeModalHandler: (data:any) => void
}

const CategReact = (props: Props) => {
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
                <p>S reactom pracujem od júla 2021.</p>
                <p>Moju prvú aplikáciu som vytvoril v rámci kurzu "React", ktorý som absolvoval na learn2code.
                  Prvá aplikácia získavala dáta z iTunes api (hudba) a zobrazovala ich. Túto aplikáciu som nezverejnil,
                  iba som sa na nej učil pracovať s reactom. Neskôr som sa rozhodol vytvoriť viac webových aplikácií, ktoré sú voľne dostupné na mojom
                  githube.</p>
            </article>
            
  
               <div className="apps">
                  <h5>1.Movie app </h5>
                  <p> Aplikácia, ktorá získava dáta z api http://www.omdbapi.com/. 
                    Zobrazí filmy, ktoré si následne môžte rozklinuť pre detailnejšie info. 
                    Keď kliknete na hviezdiu vľavo hore v detailoch, tak vám film uloží do podstránky
                     "favourites". Odtiaľ filmy môžte vymazať
                      alebo si pozrieť znova detaily o danom filme. </p>
                  <p className="usesLib">Použil som React-redux, Route, Axios</p>
                  <div className="gridButtons">
                    <img src={movieApp} alt="Movie app img" />
                      <div>
                          <div className="btnBlock"><a href="https://martin162000.github.io/firstReactApp/" className="btn" target="_blank" rel="noopener noreferrer"> Zobraziť aplikáciu</a></div>
                          <div className="btnBlock"><a href="https://github.com/martin162000/firstReactApp" className="btn btnSec" target="_blank" rel="noopener noreferrer"> Zobraziť zdrojový kód</a></div>
                      </div>
                 </div>
               </div>

               <div className="apps">
                  <h5>2.Movie app + Nodejs + MySQL</h5>
                  <p> Je to tá istá aplikácia ako predchádzajúca (Movie app), lenže
                    pridal som k nej backend, ktorý som programoval v Nodejs a databázu som urobil v MySQL.
                    Teraz sa do aplikácie môže zaregistrovať uživateľ, potom sa príhlásiť, editovať svoj profil (zmena emailu / hesla), môže pridávať filmy na svoj účet (aj ich zmazať)
                    a nakoniec sa môže uživateľ aj odhlásiť. Keď sa uživateľ registruje, tak heslo sa hashuje cez bcrypt a aj saltuje kvôli bezpečnosti. Expirácia cookie je nastavená na 3 dni. 
                    Uživateľ musí byť unikátny a to je nastavené v MySQL databáze. </p>
                  <p className="usesLib">Použil som React-redux, Route, Axios, Nodejs (express), MySQL</p>
                  <div className="gridButtons">
                    <img src={movieAppBackend} alt="Movie app img" />
                      <div>
                          <div className="btnBlock"><a href="https://github.com/martin162000/MovieApp_react-nodejs-mysql" className="btn btnSec" target="_blank" rel="noopener noreferrer"> Zobraziť zdrojový kód</a></div>
                      </div>
                 </div>
               </div>

               <div className="apps">
                  <h5>3.Utulky (zadanie GoodRequest.com)</h5>
                  <p> Dostal som zadanie z firmy Goodrequest.com, ktoré som vypracoval za 5 dni. 
                     Celé zadanie je na mojom githube v "README.md", ktoré nájdete, keď kliknete na "Zobraziť zdrojový kód".
                     Návrh frontendu som dostal figma.com.
                     Musel som overiť formuláre, data manažment spracovať cez react-redux, pomocou GET získať dáta z API a nakoniec poslať údaje pomocou POST a zobraziť výpis, či formulár bol správne vyplnený.
                     </p>
                  <p className="usesLib">Použil som lokalizačnú knižnicu na stringy i18next, React-redux, implementoval som aj SEO</p>
                  <div className="gridButtons">
                    <img src={utulky} alt="Utulky app img" />
                      <div>
                          <div className="btnBlock"><a href="https://martin162000.github.io/utulky/" className="btn" target="_blank" rel="noopener noreferrer"> Zobraziť aplikáciu</a></div>
                          <div className="btnBlock"><a href="https://github.com/martin162000/utulky" className="btn btnSec" target="_blank" rel="noopener noreferrer"> Zobraziť zdrojový kód</a></div>
                      </div>
                 </div>
            </div>
  
               <div className="apps">
                  <h5>4.Reminder app</h5>
                  <p> Použivateľ si môže vytvoriť príspevok, tento príspevok neskôr môže upravovať alebo
                     ho môže aj vymazať. Pri tejto aplikácii som sa snažil nepoužiť React-redux, pretože som chcel 
                     presnejšie pochopiť, ako prebieha menenie stavu
                      medzi child a parent komponentom, prípadne grandparent komponentom. Urobil som aj stránkovanie. 
                      Snažil som sa dosiahnuť "single of truth". </p>
                  <p className="usesLib">Použil som LocalStorage, Material UI, Route</p>
                  <div className="gridButtons">
                    <img src={reminderApp} alt="Movie app img" />
                      <div>
                          <div className="btnBlock"><a href="https://martin162000.github.io/reminder/" className="btn" target="_blank" rel="noopener noreferrer"> Zobraziť aplikáciu</a></div>
                          <div className="btnBlock"><a href="https://github.com/martin162000/reminder" className="btn btnSec" target="_blank" rel="noopener noreferrer"> Zobraziť zdrojový kód</a></div>
                      </div>
                 </div>
            </div>
  
            <div className="apps">
                  <h5>5.Životopis</h5>
                  <p> Vytvoril som svoj vlastný životopis v reacte.</p>
                  <p className="usesLib">Použil som Context, Bootstrap icons</p>
                  <div className="gridButtons">
                    <img src={zivotopisApp} alt="Movie app img" />
                      <div>
                          <div className="btnBlock"><a href="https://martin162000.github.io/zivotopis/" className="btn" target="_blank" rel="noopener noreferrer"> Zobraziť aplikáciu</a></div>
                          <div className="btnBlock"><a href="https://github.com/martin162000/zivotopis" className="btn btnSec" target="_blank" rel="noopener noreferrer"> Zobraziť zdrojový kód</a></div>
                      </div>
                 </div>
            </div>
  
          </div>
  
        </div>
      </div>
    )
}

export default CategReact
