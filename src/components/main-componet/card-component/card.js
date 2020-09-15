import React from 'react';
import CardHeader from "./cardHeader";
import CardFooter from './cardFooter';
import cardDataList from '../layout';
import './card.css';






export default function Card({userId, username, avatar, fotosUsers}){
    return(
        <>
          <div className="card">
              <CardHeader
                userId={userId}
                username={username}
                avatar={avatar}
              />
                <img className="user__images" src={fotosUsers} alt="fotos_user" width="375px" />
              <CardFooter />     
         </div>  
           
           
        </>
    )
}


