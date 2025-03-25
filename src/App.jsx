import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Input from "./Components/Inputs/Input";
import Dropdown from "./Components/Dropdowns/Dropdown";
function App() {
  const [allCurrencys, setAllCurrencys] = useState({});
  const [userValue, setUserValue] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("TRY");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);
  const [nanError, setNanError] = useState(null);
  const getCurrency = async () => {
    try {
      const res = await axios.get(
        `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_8ri7dyGXcsVcY8QN9HPoM3DgLAOADQIyhiqvpfjc&base_currency=${fromCurrency}`
      );

      setAllCurrencys(res.data.data);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };
  const convert = () => {
    const value = allCurrencys[`${toCurrency}`];
    setResult((userValue * value).toFixed(2));
  };

  useEffect(() => {
    getCurrency();
  }, []);
  useEffect(() => {
    getCurrency();
  }, [fromCurrency]);
  useEffect(() => {
    convert();
  }, [allCurrencys, toCurrency, userValue]);
  return (
    <div className="main">
      {nanError ? <p>{nanError}</p> : <></>}
      <div className="valueDiv">
        <Input
          setUserValueState={setUserValue}
          userValueState={userValue}
          setNanErr={setNanError}
        ></Input>
        <div className="resultDiv">{nanError ? <>{0}</> : <>{result}</>}</div>
      </div>
      <div className="currencysDiv">
        <Dropdown
          currencys={allCurrencys}
          setCurrencyState={setFromCurrency}
        ></Dropdown>
        <i className="fa-solid fa-arrows-rotate"></i>
        <Dropdown
          currencys={allCurrencys}
          setCurrencyState={setToCurrency}
        ></Dropdown>
      </div>
    </div>
  );
}

export default App;
