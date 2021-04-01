import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Customers from "./components/customers/Customers";

const App = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("/api/customers")
      .then((res) => res.json())
      .then((customers) => setCustomers(customers));
  }, []);

  console.log(customers);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Customers />
    </div>
  );
};

export default App;
