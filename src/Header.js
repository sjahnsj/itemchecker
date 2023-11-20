import React from "react";
import { BsPencilSquare } from "react-icons/bs";

const Header = ({ title, length }) => {
  return (
    <header>
      <h1>
        <BsPencilSquare size={30} />
        &nbsp;{title} {length}개
      </h1>
    </header>
  );
};

export default Header;
