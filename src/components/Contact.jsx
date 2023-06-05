import PropTypes from 'prop-types';
import { DeleteButton } from './Phonebook.styled';

export default function Contact({
    name,
    number,
    onDelete,
}) {
    return (
        <>
            {name}: {number}
            <DeleteButton type="button" onClick={onDelete}>
                Delete
            </DeleteButton>
        </>
    );
}
Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};
