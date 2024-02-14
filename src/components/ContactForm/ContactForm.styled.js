import styled from 'styled-components';
import { Form as StyledForm, Field as StyledField, ErrorMessage as ErrorMessageStyled} from 'formik';

export const Form = styled(StyledForm)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 360px;
`;
export const Field = styled(StyledField)`
  padding: 4px;
`;

export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 360px;
`;
export const Button = styled.button`
  max-width: 160px;
  padding: 5px;
`;

export const ErrorMessage = styled(ErrorMessageStyled)`
  color: red;
  font-size: 12px;
`;
