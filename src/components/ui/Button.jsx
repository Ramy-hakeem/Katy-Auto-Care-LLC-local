import PropTypes from 'prop-types';

function Button({ className = "", title = "" }) {
    return (
        <button className={className}>{title}</button>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
};

export default Button;
