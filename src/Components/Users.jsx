import axios, { Axios } from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { myContext } from "./Context";

function Users() {
    const {data} = useContext(myContext);
  return (
    <div className="bg-blue-300 h-fit w-full p-10">
      <h1 className="font-bold text-5xl">Users</h1>
      <div className="p-5 flex flex-col gap-2">
        {data.map((user,i)=>{
            return <Link
            key={i}
            to={`/users/${user.id}`}
            className="bg-red-300 p-2 rounded-lg shadow-lg w-full"
          >
            {user.name}
          </Link>
        })}
      </div>
    </div>
  );
}

export default Users;
