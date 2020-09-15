import React from 'react';

 /* fontawesome -icon  */

 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faHeart } from '@fortawesome/free-regular-svg-icons'
 import { faCompass } from '@fortawesome/free-regular-svg-icons'
 import { faShareSquare } from '@fortawesome/free-regular-svg-icons'
 import { faBookmark } from '@fortawesome/free-regular-svg-icons'
 import { faHome } from '@fortawesome/free-solid-svg-icons'
 
  /* fontawesome -icon  */
 
  
 

import './imagesItems.css'

export default function ImagesItems(){
    return(
      <>
          <div className="items__icons">
                    <FontAwesomeIcon icon={faHome} className="items__icons__icon" />{""} 
                    <FontAwesomeIcon icon={faShareSquare } className="items__icons__icon" />{""}              
                    <FontAwesomeIcon icon={faCompass} className="items__icons__icon" />{""}                  
                    <FontAwesomeIcon icon={faHeart}  className="items__icons__icon"/>{""}
                   
          </div>
                  
        
      </>
    )
}