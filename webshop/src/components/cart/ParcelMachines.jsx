import React, { useEffect, useRef, useState } from 'react';

function ParcelMachines() {
  const [parcelMachines, setParcelMachines] = useState([]); // väljanäidatav
  const [dbParcelMachines, setDbParcelMachines] = useState([]); // otse andmebaasist
  const parcelMachineRef = useRef(); // useRef importida

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json())
      .then(data => {
        setParcelMachines(data);
        setDbParcelMachines(data);
      });
  }, []);

  const searchFromPMs = () => {             // product.category === categoryClicked
    const result = dbParcelMachines.filter(pm => 
          pm.NAME.toLowerCase().includes(parcelMachineRef.current.value.toLowerCase()));
    setParcelMachines(result);
  }

  return (
    <React.Fragment>
      <input onChange={searchFromPMs} ref={parcelMachineRef} type="text" />
      <select>
        {parcelMachines
          .filter(pm => pm.A0_NAME === "EE")
          .map(pm => <option key={pm.NAME}>{pm.NAME}</option>)}
      </select>
    </React.Fragment>
  )
}

export default ParcelMachines