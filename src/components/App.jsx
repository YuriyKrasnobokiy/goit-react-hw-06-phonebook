import { AppContainer } from './AppStyled';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { AddForm } from './Form/Form';
import { FormWrapper } from './Form/Form.Styled';

export const App = () => {
  return (
    <>
      <AppContainer>
        <FormWrapper>
          <h2>Phonebook</h2>
          <AddForm />
        </FormWrapper>
        <div>
          <h2>Contacts</h2>
          <Filter />
          <ContactsList />
        </div>
      </AppContainer>
    </>
  );
};
