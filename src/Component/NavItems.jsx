// import React from "react";
import PropTypes from "prop-types";
const NavItem = ({ href, children }) => {
  return (
    <li>
      <a href={href} className="text-white hover:text-blue-200">
        {children}
      </a>
    </li>
  );
};
NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavItem;
