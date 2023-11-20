import React from "react";

const Footer = () => {
  const today = new Date();
  return (
    <footer>
      <p>Copyright &copy; {today.getFullYear()} by SJ</p>
    </footer>
  );
};

export default Footer;
