import { Input } from './Filter.styled'
import PropTypes from 'prop-types';

export const Filter = ({ onSearchContact, value }) => {
  return (
    <Input
      type="text"
      name="serchContact"
      onChange={onSearchContact}
      value={value}
    />
  );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
  };