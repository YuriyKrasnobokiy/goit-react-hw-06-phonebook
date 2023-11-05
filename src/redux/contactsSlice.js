import { createSlice } from '@reduxjs/toolkit';

const contactsData = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialState = {
  contacts: contactsData,
  filter: '',
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {
    redAddContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    redDeleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    redChangeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

// Генератори екшенів
export const { redAddContact, redDeleteContact, redChangeFilter } =
  contactsSlice.actions;
export const selectContacts = state => state.contactsStore.contacts;
export const selectFilter = state => state.contactsStore.filter;

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
