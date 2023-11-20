import React from "react";

import { FaTrashAlt } from "react-icons/fa";

const Content = ({ items, setItems }) => {
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("checklist", JSON.stringify(listItems));
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("checklist", JSON.stringify(listItems));
  };
  return (
    <main>
      {items.length !== 0 ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
              >
                {item.item}
              </label>
              <FaTrashAlt onClick={() => handleDelete(item.id)} />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem", color: "whitesmoke" }}>
          체크 리스트가 비어 있습니다
        </p>
      )}
    </main>
  );
};

export default Content;
