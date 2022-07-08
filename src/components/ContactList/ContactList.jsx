import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ visibleNames, deleteContact }) => {
  return (
    <div>
      {visibleNames.map(({ id, number, name }) => {
        return (
          <li key={id} className={s.item}>
            {name}: {number}
            <button className={s.deleteBtn} onClick={() => deleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  visibleNames: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
};

export default ContactList;
