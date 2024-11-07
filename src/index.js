import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
    return (
        <div className="container">
            <Header />
            <Tagline />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <h1 style={{ color: "#Aec6cf", fontSize: "48px", textTransform: "uppercase" }}>
            Ciao Pizzaz
        </h1>
    );
}

const pizzas = [
    { id: 1, name: "Pizza Spinaci", description: "Tomato, mozzarella, spinach, and ricotta cheese", price: 12, image: "/pizzas/spinaci.jpg" },
    { id: 2, name: "Pizza Margherita", description: "Tomato, mozzarella", price: 10, image: "/pizzas/margherita.jpg" },
    { id: 3, name: "Pizza Focaccia", description: "Bread with italian olive oil and rosemary", price: 6, image: "/pizzas/focaccia.jpg" },
    { id: 4, name: "Pizza Salamino", description: "Tomato, mozarella, and pepperoni", price: 15, image: "/pizzas/salamino.jpg" },
    { id: 5, name: "Pizza Funghi", description: "Tomato, mozarella, mushrooms, and onion", price: 12, image: "/pizzas/funghi.jpg" },
    { id: 6, name: "Pizza Prosciutto", description: "Bread with italian olive oil and rosemary", price: 18, image: "/pizzas/prosciutto.jpg" },
];

function Pizza({ pizza }) {
    return (
        <div className="pizza">
            <img src={pizza.image} alt={pizza.name} />
            <h3>{pizza.name}</h3>
            <p>{pizza.description}</p>
            <p>${pizza.price}</p>
        </div>
    );
}

function Menu() {
    const [searchQuery, setSearchQuery] = useState("");

    // Filter pizzas based on the search query
    const filteredPizzas = pizzas.filter(pizza =>
        pizza.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="menu">
            <h2>Our Menu</h2>
            
            {/* Search input */}
            <input
                type="text"
                placeholder="Search for a pizza..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)} // Update search query on input change
                className="search-input"
            />

            <div className="pizza-list">
                {filteredPizzas.map(pizza => (
                    <Pizza key={pizza.id} pizza={pizza} />
                ))}
            </div>
        </div>
    );
}

function Footer() {
    const d = new Date();
    const hour = d.getHours();
    const isOpen = hour >= 10 && hour < 22;

    return (
        <footer className="footer">
            {isOpen ? <Button /> : <p>Sorry, we're closed</p>}
        </footer>
    );
}

function Tagline() {
    const d = new Date();
    const hour = d.getHours();
    const isOpen = hour >= 10 && hour < 22;

    return (
        <footer className="footer">
            {isOpen ? "Authentic Italian Cuisine!" : ""}
        </footer>
    );
}

function Button({ onClick }) {
    return (
        <div className="order">
            <p>We're currently open!</p>
            <button onClick={onClick} className="btn">
                Order!
            </button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

