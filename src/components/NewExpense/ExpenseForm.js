import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [OriTitle, NewTitle] = useState("");
  const [OriAmount, NewAmount] = useState("");
  const [OriDate, NewDate] = useState("");

  const Submited = (e) => {
    e.preventDefault();

    const expenseData = {
      title: OriTitle,
      amount: OriAmount,
      date: new Date(OriDate),
    };

    props.onSaveExpenseData(expenseData);

    NewTitle("");
    NewAmount("");
    NewDate("");
  };

  // Event handling
  const TitleEvent = (event) => {
    NewTitle(event.target.value);
  };

  const AmountEvent = (event) => {
    NewAmount(event.target.value);
  };

  const DateEvent = (event) => {
    NewDate(event.target.value);
  };

  return (
    <form onSubmit={Submited}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={OriTitle} onChange={TitleEvent} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={OriAmount}
            onChange={AmountEvent}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={OriDate}
            onChange={DateEvent}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
