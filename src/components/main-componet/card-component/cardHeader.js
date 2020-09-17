import React from "react";



import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
 
  
import './card-header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardHeader({_id, avatar, username, posts}){
    return(
        <>
            <div className="card__menu">
                <div className="avatar">
                    <img className="avatar__image" src={avatar} alt="avatar_usuario" width="30px" height="30"/>
                      <p className="avatar__name">{username}</p>
                </div>
                <div className="menu__option">
                  <FontAwesomeIcon icon={faEllipsisH}  className="menu__opcion__ellipsis"/>{""}
               </div>
            </div>
        </>
    )
}