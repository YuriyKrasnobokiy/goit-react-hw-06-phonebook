import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { AddForm } from './Form/Form';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   redAddContact,
//   redChangeFilter,
//   // redDeleteContact,
// } from 'redux/contactsSlice';
// import {
//   redAddContact,
//   redChangeFilter,
//   redDeleteContact,
// } from 'redux/contactsSlice';

export const App = () => {
  // const contacts = useSelector(state => state.contactsStore.contacts);
  // const filter = useSelector(state => state.contactsStore.filter);
  // const dispatch = useDispatch();

  // const addContact = newContact => {
  //   if (
  //     contacts.find(
  //       contact =>
  //         contact.name.toLowerCase() === newContact.name.toLowerCase() ||
  //         contact.number === newContact.number
  //     )
  //   ) {
  //     return alert(
  //       `${newContact.name} or ${newContact.number} is already in contacts!`
  //     );
  //   }
  //   dispatch(redAddContact(newContact));
  // };

  // const deleteContact = id => {
  //   dispatch(redDeleteContact(id));
  // };

  // const handleChange = value => {
  //   dispatch(redChangeFilter(value));
  // };

  // const visibleContacts = () => {
  //   return contacts.filter(
  //     contact =>
  //       contact.name.toLowerCase().includes(filter.toLowerCase()) ||
  //       contact.number.includes(filter)
  //   );
  // };

  return (
    <>
      <h2>Phonebook</h2>
      {/* <AddForm addContact={addContact} /> */}
      <AddForm />

      <h2>Contacts</h2>
      {/* <Filter filter={filter} handleChange={handleChange} /> */}
      <Filter />
      {/* <ContactsList contacts={visibleContacts()} onDelete={deleteContact} /> */}
      <ContactsList />
    </>
  );
};
