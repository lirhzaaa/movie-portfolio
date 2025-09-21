import React, { use, useState } from "react";

const WithCalculate = (OriginalCalculate) => {
  return (props) => {
    const [nilai, setNilai] = useState(0);

    const tambahClick = () => {
      setNilai(nilai + props.counter);
    };

    const kurangClick = () => {
        setNilai(nilai - props.counter);
    }

    const kaliClick = () => {
        setNilai(nilai * props.counter);
    }

    const bagiClick = () => {
        setNilai(nilai / props.counter);
    }

    const resetClick = () => {
        setNilai(0);
    }

    return <OriginalCalculate nilai={nilai} tambahClick={tambahClick} kurangClick={kurangClick} kaliClick={kaliClick} bagiClick={bagiClick} resetClick={resetClick} {...props}/>;
  };
};

export default WithCalculate;
