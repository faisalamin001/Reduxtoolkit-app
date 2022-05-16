import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addplayer } from "../../Redux/Slice/Slice";

function Team() {
  const dispatch = useDispatch();
  const [players, setPlayers] = useState([]);
  const fetchPlayers = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((result) => {
        setPlayers(result);
        //console.log(result);
      });
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <>
      {players.map((player, index) => (
        <div
          style={{
            border: "1px solid grey",
            borderRadius: "10px",
            width: "500px",
            margin: "auto",
            marginBottom: "10px",
          }}
          key={index}
        >
          <p
            style={{
              background: "black",
              color: "white",
            }}
          >
            {player.id}
          </p>
          <h3>{player.title.toUpperCase()}</h3>
          <h5>{player.body}</h5>
          <br />
          <button onClick={() => dispatch(addplayer(player))}>
            Add to team
          </button>
          <br />
          <br />
        </div>
      ))}
    </>
  );
}

export default Team;
