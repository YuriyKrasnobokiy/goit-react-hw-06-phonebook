import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { AddForm } from './Form/Form';
import { useDispatch, useSelector } from 'react-redux';
import {
  redAddContact,
  redChangeFilter,
  redDeleteContact,
} from 'redux/contactsSlice';

export const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = localStorage.getItem('contact');
  //   if (savedContacts !== null) {
  //     return JSON.parse(savedContacts);
  //   }
  //   return [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ];
  // });
  // const [filter, setFilter] = useState('');

  const contacts = useSelector(state => state.contactsStore.contacts);
  const filter = useSelector(state => state.contactsStore.filter);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   localStorage.setItem('contact', JSON.stringify(contacts));
  // });

  const addContact = newContact => {
    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase() === newContact.name.toLowerCase() ||
          contact.number === newContact.number
      )
    ) {
      return alert(
        `${newContact.name} or ${newContact.number} is already in contacts!`
      );
    }
    dispatch(redAddContact(newContact));
  };

  const deleteContact = id => {
    dispatch(redDeleteContact(id));
  };

  const handleChange = value => {
    dispatch(redChangeFilter(value));
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
      <h2>Phonebook</h2>
      <AddForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactsList contacts={visibleContacts()} onDelete={deleteContact} />
    </>
  );
};
