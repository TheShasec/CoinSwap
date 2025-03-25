import React, { useEffect, useState } from "react";
import "./Dropdown.css";

function Dropdown({ currencys, setCurrencyState }) {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [currencyText, setCurrencyText] = useState("TRY");
  const openDropdown = () => {
    setDropdownIsOpen((prev) => !prev);
  };
  const changeCurrecyText = (e) => {
    setCurrencyText(e.target.textContent);
  };
  useEffect(() => {
    setCurrencyState(currencyText);
  }, [currencyText]);
  return (
    <div className="dropdownMainDiv">
      <form action="">
        <div className="dropdownDiv" onClick={openDropdown}>
          <div className="dropdownText">
            {currencyText ? <p>{currencyText}</p> : <p>TRY</p>}{" "}
            <i className="fa-solid fa-arrow-down"></i>
          </div>
          {dropdownIsOpen && (
            <div className="dropdownCurrencysDiv">
              {Object.keys(currencys).map((currency, index) => (
                <p key={index} onClick={changeCurrecyText}>
                  {currency}
                </p>
              ))}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Dropdown;
