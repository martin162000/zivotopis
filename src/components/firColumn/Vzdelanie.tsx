import React from 'react'


const Vzdelanie = () => {
    return (
        <div className="columnBlock">
          <h2>Vzdelanie</h2>
          <div className = "insideMarg">
              <div className="leftAlign">
                <h4> <span className="dot"></span>  <span className="fontNumber">2019</span> -  súčasnosť</h4>
                  <p className="eduText">Fakulta riadenia a informatiky (Žilinská univerzita), Žilina.</p> 
                  <p className="eduSection">Informatika (prezenčné baklárske štúdium)</p>
              </div>

              <div className="leftAlign margTopEduDiv">
                <h4> <span className="dot"></span>  <span className="fontNumber">2015 -  2019</span></h4>
                  <p className="eduText">Stredná priemyselná škola technická, Martin.</p>
                  <p className="eduSection">Technické lýceum (informatika)</p>
              </div>
          </div>
        </div>
    )
}

export default Vzdelanie
