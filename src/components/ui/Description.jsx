import "./ui.css";
import PropTypes from 'prop-types';


export default function Description({ text, fontSize, className }) {
    return (
        <p className={className} style={{ fontSize: `${fontSize}px` }}>
            {text}
        </p>
    );
}

Description.propTypes = {
    fontSize: PropTypes.number,
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};