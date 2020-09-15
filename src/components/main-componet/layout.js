import React from "react";

import Card from "./card-component/card";

import "./layout.css";

const cardDataList = [
  {
    userIde: 1,
    username: "@francisDiezCanseco",
    avatar: "https://i.ibb.co/Ps2YQMC/diezcanseco.jpg",
    fotosUsers: "https://i.ibb.co/Ps2YQMC/diezcanseco.jpg",
  },
  {
    userIde: 2,
    username: "@barnechea",
    avatar: "https://i.ibb.co/9ZKJKng/barnecheachiko.jpg",
    fotosUsers: "https://i.ibb.co/9ZKJKng/barnecheachiko.jpg",
  },
  {
    userIde: 3,
    username: "@chaparron",
    avatar: "https://i.ibb.co/cQDVbWC/Carlos-Enrique-Fern-ndez-Chac-n.jpg",
    fotosUsers: "https://i.ibb.co/cQDVbWC/Carlos-Enrique-Fern-ndez-Chac-n.jpg",
  },
  {
    userIde: 4,
    username: "@salvadordelsolar",
    avatar: "https://i.ibb.co/WGK2BVV/del-solar.jpg",
    fotosUsers: "https://i.ibb.co/WGK2BVV/del-solar.jpg",
  },
  {
    userIde: 5,
    username: "@elgoyo",
    avatar: "https://i.ibb.co/TBjDdwt/santoschiko.jpg",
    fotosUsers: "https://i.ibb.co/TBjDdwt/santoschiko.jpg",
  },
  {
    userIde: 6,
    username: "@acuña",
    avatar: "https://i.ibb.co/XDMMmMV/acu-a.jpg",
    fotosUsers: "https://i.ibb.co/XDMMmMV/acu-a.jpg",
  },
  {
    userIde: 7,
    username: "@julioguzman",
    avatar: "https://i.ibb.co/bJFdRyg/julio-guzman.jpg",
    fotosUsers: "https://i.ibb.co/bJFdRyg/julio-guzman.jpg",
  },
  {
    userIde: 8,
    username: "@marcoarana",
    avatar: "https://i.ibb.co/Cw292sL/marco-arana.jpg",
    fotosUsers: "https://i.ibb.co/Cw292sL/marco-arana.jpg",
  },
];

function Layout() {
  return (
    <>
      {
        // cardDataList.map( (cardData) => <Card key= {cardData.username} username={cardData.username}/>)
        //  cardDataList.map( ({id, username, avatar, fotoUserName}) => <Card key= {userIde} username={username} avatar={avatar} fotosUsers={fotosUsers}/>) // destructcurando
        cardDataList.map((cardData) => (
          <Card key={cardData.username} {...cardData} />
        )) // propagamos las propiedades de manera inplisita con spreads(no es buena practica para casos complejos pues debe ser lo mas explisito posible)
      }
    </>
  );
}

export default Layout;
