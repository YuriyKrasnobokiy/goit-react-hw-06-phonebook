import { Form } from 'formik';
import styled from 'styled-components';

export const FormWrapper = styled.div`
  padding-bottom: 20px;
  /* background-color: lightblue; */
`;

export const FormPhoneBook = styled(Form)`
  /* background-color: lightblue; */
`;

export const FormBtn = styled.button`
  display: flex;
  justify-content: center;
  width: 120px;
  margin: 0 auto;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
  margin-bottom: 20px;
`;
