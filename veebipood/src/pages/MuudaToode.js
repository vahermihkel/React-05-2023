import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json";

function MuudaToode() {
  const { index } = useParams();
  const leitudToode = tootedFailist[index];
  const nimiViide = useRef(); // const nameRef = useRef();
  const hindViide = useRef();
  const piltViide = useRef();
  const aktiivneViide = useRef();
  const navigate = useNavigate();

  const muuda = () => {
    tootedFailist[index] = {
      "nimi": nimiViide.current.value, 
      "hind": Number(hindViide.current.value), 
      "aktiivne": aktiivneViide.current.checked, 
      "pilt": piltViide.current.value
    };
    navigate("/halda"); // JavaScriptist navigeerimine
  }

  return (
    <div>
      <label>Toote nimetus</label> <br />
      <input ref={nimiViide} defaultValue={leitudToode.nimi} type="text" /> <br />
      <label>Toote hind</label> <br />
      <input ref={hindViide} defaultValue={leitudToode.hind} type="number" /> <br />
      <label>Toote pilt</label> <br />
      <input ref={piltViide} defaultValue={leitudToode.pilt} type="text" /> <br />
      <label>Toote aktiivsus</label> <br />
      <input ref={aktiivneViide} defaultChecked={leitudToode.aktiivne} type="checkbox" /> <br />
      <button onClick={muuda}>Muuda</button> <br />
    </div>
  )
}

export default MuudaToode