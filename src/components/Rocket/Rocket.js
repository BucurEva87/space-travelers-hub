import React from 'react';
import { PropTypes as PT } from 'prop-types';
import style from './Rocket.module.scss';

const Rocket = ({
  id, name, description, flickrImages, reserved,
}) => (
  <article data-name={name} data-id={id} className={style.rocket}>
    <img src={flickrImages} alt={description} />
    <div className={style['rocket-info']}>
      <h2 className={style.title}>{name}</h2>
      <p className={style.description}>{description}</p>
      { reserved ? (
        <button
          className={style['btn-unreserve]']}
          type="button"
        >
          Cancel Reservation
        </button>
      ) : (
        <button
          className={style['btn-reserve']}
          type="button"
        >
          Reserve Rocket
        </button>
      )}
    </div>
  </article>
);

Rocket.propTypes = {
  id: PT.number.isRequired,
  name: PT.string.isRequired,
  description: PT.string.isRequired,
  flickrImages: PT.string.isRequired,
  reserved: PT.bool.isRequired,
};

export default Rocket;
