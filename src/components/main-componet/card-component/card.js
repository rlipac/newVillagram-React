import React from "react";

import CardHeader from "./cardHeader";
import CardFooter from "./cardFooter";
import "./card.css";

export default function Card({ _id, username, avatar, posts }) {
  return (
    <>
      <div className="card">
        <CardHeader
          key={_id}
          username={username}
          avatar={avatar}
          posts={posts}
        />

        <img
          className="user__images"
          src={avatar}
          alt="fotos_user"
         
        />
        <CardFooter />
      </div>
    </>
  );
}
