import PropTypes from 'prop-types';


export default function Description({ text, className }) {
    return (
        <p className={`font-lg  opacity-70 ${className}`}>
            {text}
        </p>
    );
}

Description.propTypes = {
    fontSize: PropTypes.number,
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};