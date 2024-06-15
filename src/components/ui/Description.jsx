import PropTypes from 'prop-types';


export default function Description({ text, className }) {
    return (
        <p className={`text-base font-normal leading-12 text-gray-700 ${className}`}>
            {text}
        </p>
    );
}

Description.propTypes = {
    fontSize: PropTypes.number,
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};