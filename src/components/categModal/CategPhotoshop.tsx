import React from 'react'

import imgps1 from '../../assets/img/photoshop/ps1.jpg';
import imgps2 from '../../assets/img/photoshop/logoPs1.png';
import imgps3 from '../../assets/img/photoshop/logoPs2.png';
import imgps4 from '../../assets/img/photoshop/logoPs3.png';

interface Props {
    show :any;
    closeModalHandler: (data:any) => void
}

const CategPhotoshop = (props: Props) => {
    const {show, closeModalHandler} = props

    return (
        <div className="modalWrapper aniFromTop"
        style={{
          display: show ? 'block' : 'none'
        }}
      >
        <div className="modalHeader">
          <h2>Photoshop</h2>
          <span onClick={closeModalHandler}>x</span>
        </div>
        <div className="modalContent">
  
          <div className="modalBody">
            <h4>Skúsenosti</h4>
            <article>
                <p>
                   Pri tvorbe webových stránok som musel vytvárať rôzne loga, pozadia stránok, vyrezávať objekty z obrázkov atď. Na všetky tieto aktivty som používal photoshop.
                </p>
                <div className="psImgs">
                  <img src={imgps1} alt="photoshop obrazok 1" />
                  <img src={imgps2} alt="photoshop obrazok 2" />
                  <img src={imgps3} alt="photoshop obrazok 3" />
                  <img src={imgps4} alt="photoshop obrazok 4" />
                </div>
                    
            </article>
  
          </div>
  
        </div>
      </div>
    )
}

export default CategPhotoshop
