import axios, { Axios } from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  return (
    <div className="bg-blue-300 h-fit w-full p-10">
      <h1 className="font-bold text-5xl">Users</h1>
      <div className="p-5 flex flex-col gap-2">
        <Link
          to={`/users/John Green`}
          className="bg-red-300 p-2 rounded-lg shadow-lg w-full"
        >
          John Green
        </Link>
        <Link
          to={`/users/Frost Giant`}
          className="bg-red-300 p-2 rounded-lg shadow-lg w-full"
        >
          Frost Giant
        </Link>
        <Link
          to={`/users/Himmat Singh`}
          className="bg-red-300 p-2 rounded-lg shadow-lg w-full"
        >
          Himmat Singh
        </Link>
      </div>
    </div>
  );
}

export default Users;
