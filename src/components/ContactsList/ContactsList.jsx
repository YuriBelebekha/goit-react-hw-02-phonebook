import PropTypes from 'prop-types';
// import css from './ContactsList.module.css';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>{name}: {number}</p>
        <button onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>      
    ))}
  </ul>
);

export default ContactsList;
  
ContactsList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};