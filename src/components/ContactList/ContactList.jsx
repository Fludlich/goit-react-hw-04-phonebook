import PropTypes from 'prop-types';
import { Box, Text, List, Item, Button } from './ContactList.styled'

export const ContactList = ({ contactsList, onRemove }) => {
  return (
    <Box>
      {contactsList.length === 0 ? (
        <Text>Your contacts list is empty</Text>
      ) : (
        <List>
          {contactsList.map(el => {
            const {id, number, name} = el
            return (
              <Item key={id}>
                {name}:   {number}{' '}
                <Button id={id} onClick={onRemove}>
                  Remove
                </Button>
              </Item>
            );
          })}
        </List>
      )}
    </Box>
  );
};

ContactList.propTypes = {
    contactsList: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,
        })
      ),
  };