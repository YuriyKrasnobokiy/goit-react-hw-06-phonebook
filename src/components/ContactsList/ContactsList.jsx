import React from 'react';
import { ContactsLi, ContactsPhonelist } from './ContactsList.Styled';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { redDeleteContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

export const ContactsList = () => {
  const filter = useSelector(state => state.contactsStore.filter);
  const contacts = useSelector(state => state.contactsStore.contacts);
  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(redDeleteContact(id));
  };

  const visibleContacts = () => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  };

  return (
    <>
      <ContactsPhonelist>
        {visibleContacts().map(({ id, name, number }) => (
          <ContactsLi key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button onClick={() => deleteContact(id)} type="button">
              Delete
              <RiDeleteBin6Line size={18} />
            </button>
          </ContactsLi>
        ))}
      </ContactsPhonelist>
    </>
  );
};
