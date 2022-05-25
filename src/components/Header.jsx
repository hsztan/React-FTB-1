import PropTypes from 'prop-types';

const Header = ({ text, bgColor, textColor }) => {
  const styles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={styles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: 'Feedback UI',
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
