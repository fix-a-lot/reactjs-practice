import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button(props) {
  return (
    <button type="text" onClick={props.onClick}>{props.children}</button>
  );
}

// Button.propTypes = {
  // text: PropTypes.string.isRequired
// }

export default Button;
