import React from "react";
import ImagesItems  from './imagesItems';
import './imagesItems.css'
//import cardDataList from '../main-componet/layout';


import "./header.css";

export default function Header() {
  return (
    <>
  
        <div className="top-header">

          <header className="header" >
              <div className="header__logo">VillaGram</div>
              <div className="header__images">
                <ImagesItems/>
                <img className="header__images__user" src="https://i.ibb.co/WGK2BVV/del-solar.jpg" alt="avatar_usuario" width="33px" />
                    
            </div>

                
            </header>
        

        </div>
         
      
    </>
  );
}
