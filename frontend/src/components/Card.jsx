import React from "react";
import "./Card.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Card = ({ searchTerm }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://localhost:5000/user/cards");
        //console.log(response.data);
        setCards(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCards();
  }, []);

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="card-whole-container">
      {filteredCards.map((card) => (
        <div key={card._id} className="card-container">
          <img src={card.img} alt={card.name} />
          <div className="card-body">
            <h3 className="card-title">{card.name}</h3>
            <p>{card.description}</p>
            <div className="container-text">
              <select>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>
              <select>
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="total-price">Total Price : ₹0</div>
            </div>
            <button className="cart-btn">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
