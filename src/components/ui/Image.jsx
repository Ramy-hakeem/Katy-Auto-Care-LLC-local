import PropTypes from 'prop-types';

function Image({ src, alt = '', className = '' }) {
    return (
        <img className={className} src={src} alt={alt} />
    );
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
};

export default Image;
