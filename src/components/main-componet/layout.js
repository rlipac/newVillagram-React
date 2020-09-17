import React from 'react';
import { useState, useEffect } from 'react';

import Card from "./card-component/card";

import "./layout.css";


  function Layout(){


    const [ userList, setUserList] = useState([]) ;

    useEffect (() => {
   
      const url = 'http://41bf4cd74de7.ngrok.io/api/user';
       fetch(url)
       .then(response=> {
        return  response.json()
       })
       .then(response =>{
         setUserList(response.usuarios);
        // const lista = response.usuarios;
        // lista.forEach(e => console.log('===>>> hollaaaa ' + e))
       })
       .catch(()=>{
         console.log('hubo un err ..... =>')
       })
     }, [] )
   return(
        <>
        {
        userList.map(({_id, username, avatar, posts})=>{
          return(
              
                <Card 
                key={_id}
                username={username}
                avatar={avatar}
                posts={posts}
              
              />
          )

        })}
        </>

   )

         

 }

 export default Layout;

