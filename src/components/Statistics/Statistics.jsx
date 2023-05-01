import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';
import React from 'react';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage, index }) => (
          <li
            className={css.item}
            style={{ backgroundColor: randomColor() }}
            key={id}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>%{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
