import { useState, useEffect } from "react";
import "./customers.css";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("/api/customers")
      .then((res) => res.json())
      .then((customers) => setCustomers(customers));
  }, []);

  return (
    <div className="customers">
      <h2>Customers</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer}>
            <span> {customer.firstname}</span>
            <span> {customer.lastname}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Customers;
