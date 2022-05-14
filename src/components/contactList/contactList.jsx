import React from 'react';
import s from './contactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ visibleFilter, deleteContact }) => {
  return (
    <ul>
      {visibleFilter.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.item}>
            <span>
              {name}: {number}
            </span>
            <button type="button" onClick={() => deleteContact(id)}>
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  visibleFilter: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
