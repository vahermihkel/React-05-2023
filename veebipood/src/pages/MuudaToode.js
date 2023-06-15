import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json";

function MuudaToode() {
  const { index } = useParams();
  const leitudToode = tootedFailist[index];
  const nimiViide = useRef(); // const nameRef = useRef();
  const navigate = useNavigate();

  const muuda = () => {
    tootedFailist[index] = nimiViide.current.value;
    navigate("/halda"); // JavaScriptist navigeerimine
  }

  return (
    <div>
      <label>Toote nimetus</label> <br />
      <input ref={nimiViide} defaultValue={leitudToode} type="text" /> <br />
      <button onClick={muuda}>Muuda</button> <br />
    </div>
  )
}

export default MuudaToode