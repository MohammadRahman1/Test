import React from "react";
import "./App.css";
import { jsonDataDisplay } from "./jsonData";

// "name": "Robert Chan",
// "email": "ilambert@yahoo.com",
// "phone_number": "(802)995-4959",
// "donationAmount": 893.13,
// "homeAddress": "4265 Danielle Trail\nSouth William, IA 13565",
// "age": 82,
// "occupation": "Producer, radio",
// "city": "East Donaldland"

export const Donations = () => {
  return (
    <>
      <homePageHeader/>
      <div className="donation-container">
        {jsonDataDisplay.map((data, key) => {
            return (
                <div key={key}>
                    <Donation
                        key = {key}
                        name = {data.name}
                        email = {data.email}
                        phone_number = {data.phone_number}
                        donationAmount = {data.donationAmount}
                        homeAddress = {data.homeAddress}
                        age = {data.age}
                        occupation = {data.occupation}
                        city = {data.city}
                    />
                </div>
            )
        }
        )}
      </div>
    </>
  );
};

const homePageHeader = () => {
    return (
        <header className="header">
            <h2>Your Donation Tracker</h2>
        </header>
    )
}

const Donation = ({name, email, phone_number, donationAmount, homeAddress, age, occupation, city}) => {
    if (!name) return <div/>;
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <h5>{name}</h5>
                    </td>
                    <td>
                        <h5>{email}</h5>
                    </td>
                    <td>
                        <h5>{phone_number}</h5>
                    </td>
                    <td>
                        <h5>{donationAmount}</h5>
                    </td>
                    <td>
                        <h5>{homeAddress}</h5>
                    </td>
                    <td>
                        <h5>{age}</h5>
                    </td>
                    <td>
                        <h5>{occupation}</h5>
                    </td>
                    <td>
                        <h5>{city}</h5>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}