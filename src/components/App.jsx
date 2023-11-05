import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { AddForm } from './Form/Form';

export const App = () => {
  return (
    <>
      <h2>Phonebook</h2>
      <AddForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  );
};
