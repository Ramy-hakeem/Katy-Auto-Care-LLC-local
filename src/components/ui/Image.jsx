import PropTypes from 'prop-types';

function Image({ src, alt = '', className = '', func = () => { } }) {
    return (
        <img onClick={func} className={className} src={src} alt={alt} />
    );
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
    func: PropTypes.func,
};

export default Image;
