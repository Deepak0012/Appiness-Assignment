import React from "react";
import "./index.css";
import { user } from "./data";

export const Stocks = () => {
  return (
    <>
      
      <div className="stock-container">
        {user.map((data, key) => {
          return (
            <div key={key}>
              <Stock
                key={key}
                id={data.id}
                name={data.name}
                age={data.age}
                gender={data.gender}
                email={data.email}
                phoneNo={data.phoneNo}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};



  const Stock = ({ id, name, age, gender, email, phoneNo }) => {
    if (!id) return <div />;
    return (
      <table>
        
        <tbody>
        
          <tr>
            <td>
              <h5>{id}</h5>
            </td>
            <td>
              <h5>{name}</h5>
            </td>
            <td>
              <h4>{age}</h4>
            </td>
            <td>
              <h4>{gender}</h4>
            </td>
            <td>
              <h4>{email}</h4>
            </td>
            <td>
              <p>{phoneNo}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  