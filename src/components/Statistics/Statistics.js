import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h2 className={s.title}>Statistics</h2>
      <p className={s.statistics}>Good: {good}</p>
      <p className={s.statistics}>Neutral: {neutral}</p>
      <p className={s.statistics}>Bad: {bad}</p>
      <p className={s.statistics}>Total: {total()}</p>
      <p className={s.statistics}>Positive feedback: {positivePercentage()}%</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
