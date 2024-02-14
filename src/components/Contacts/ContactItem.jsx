import { Button } from './Contacts.styled';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <li>
      <span>{name}: </span>
      <span>{number}</span>
      <Button type="button" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </li>
  );
};
