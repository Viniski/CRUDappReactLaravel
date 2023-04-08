import { Link } from "react-router-dom";

interface CanalsType {
  name: string;
  number: number;
  id: number;
}
[];

import axios from "../axios";
import { useState, useEffect } from "react";

export function ListPage() {
  const [canals, setCanals] = useState([
    { name: "przykłaowe imię", number: 34, id: 26434 },
  ]);

  //   useEffect(() => {
  //     fetchAllCanals();
  //   }, []);

  const fetchAllCanals = () => {
    axios.get("/canals").then((res) => {
      setCanals(res.data);
    });
  };

  const deleteUser = (id: number) => {
    axios.delete("/users/" + id).then((res) => {
      fetchAllCanals();
    });
  };

  return (
    <div>
      <h2>Lista kanałów pozyskania klienta</h2>
      <div>
        {canals.map(
          (canal: { name: string; number: number; id: number }, id: number) => (
            <div>
              <p>{id}</p>
              <p>{canal.name}</p>
              <p>{canal.number}</p>
              <Link to={{ pathname: "/edit/" + canal.id }}>Edit</Link>
              <Link to={{ pathname: "/view/" + canal.id }}>View</Link>
              <button
                type="button"
                onClick={() => {
                  deleteUser(canal.id);
                }}
              >
                Delete
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
