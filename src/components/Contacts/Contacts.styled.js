import styled from 'styled-components';

export const ContactListStyled = styled.ul`
  padding: 25px;
`;

export const Button = styled.button`
  max-width: 60px;
  border: none;
  border-radius: 10px;
  margin-left: 12px;
  padding: 8px;
  background-color: lightskyblue;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;
