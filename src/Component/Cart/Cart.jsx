import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeplayer } from "../../Redux/Slice/Slice";

function Cart() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.team.data);
  console.log(selected.map((x) => x.id));

  return (
    <div>
      <h1>Cart</h1>
      {selected.map((player, index) => (
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
          <button onClick={() => dispatch(removeplayer(player.id))}>
            Remove
          </button>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Cart;
