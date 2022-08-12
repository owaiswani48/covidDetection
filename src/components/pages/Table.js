import React from "react";
import "./Table.css";
import numeral from "numeral";

function Table({ countries }) {
  return (
    <div className="table" style={{display:'flex', flexDirection:'column'}}>
      {countries.map((country) => (
        <div style={{borderBottom:'1px solid red'}}>
          <td>{country.country}</td>
          <td>
            <strong>{numeral(country.cases).format("0,0")}</strong>
          </td>
        </div>
      ))}
    </div>
  );
}

export default Table;
