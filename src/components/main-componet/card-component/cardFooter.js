import React from 'react';
 /* fontawesome -icon  */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faShareSquare } from '@fortawesome/free-regular-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
 /* fontawesome -icon  */

 


import './card-footer.css';
  


export default function CardFooter(){
      return(
        <div className="card__footer">
            <div className="card__footer__top">
              <div className="card__footer__top__reacciones">
                <FontAwesomeIcon icon={faHeart}  className="card__footer__icon"/>{""}
                <FontAwesomeIcon icon={faComment} className="card__footer__icon" />{""}
                <FontAwesomeIcon icon={faShareSquare } className="card__footer__icon" />{""}
              
              </div>
              <div className="card__footer__top-save">
              <FontAwesomeIcon icon={faBookmark} className="card__footer__icon__save" />{""}

              </div>
            </div>
         
            <div className="card__footer__bottom">
              <p>10 Me gusta</p>
              <small>HACE 12 HORAS</small>
            </div>

        </div>
       
      )
        
}