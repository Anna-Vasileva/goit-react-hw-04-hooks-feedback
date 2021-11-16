import React from "react";
import PropTypes from "prop-types";
import s from "./Section.module.css";

const Section = ({ children, title }) => {
  return (
    <>
      {title && <h1 className={s.title}>{title}</h1>}
      {children}
    </>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};
export default Section;
