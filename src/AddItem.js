import React from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, setNewItem, items, setItems }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item: newItem };
    const listItems = [...items, myNewItem];
    setItems(listItems);
    localStorage.setItem("checklist", JSON.stringify(listItems));
    setNewItem("");
  };
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">리스트 추가</label>
      <input
        type="text"
        autoFocus
        placeholder="리스트 작성"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
