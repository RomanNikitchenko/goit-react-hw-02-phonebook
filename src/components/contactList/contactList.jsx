import React from 'react';

const ContactList = ({ visibleFilter }) => {
  return (
    <ul>
      {visibleFilter.map(({ name, number }) => {
        return (
          <li key={number}>
            {name}: {number}
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
