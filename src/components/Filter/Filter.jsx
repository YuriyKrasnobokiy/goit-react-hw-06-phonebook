import React from 'react';
import { FilterInput, FilterLabel } from './Filter.Styled';
import { useDispatch, useSelector } from 'react-redux';
import { redChangeFilter } from 'redux/contactsSlice';

export const Filter = () => {
  const filter = useSelector(state => state.contactsStore.filter);
  const dispatch = useDispatch();
  const handleChange = value => {
    dispatch(redChangeFilter(value));
  };
  return (
    <>
      <FilterLabel>
        Find contact by name or number
        <FilterInput
          name="filter"
          type="text"
          value={filter}
          onChange={e => handleChange(e.target.value)}
        />
      </FilterLabel>
    </>
  );
};
