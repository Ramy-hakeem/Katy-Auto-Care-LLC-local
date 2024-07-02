import PropTypes from 'prop-types';
import Image from './Image';
import arrow from '../../assets/left-arrow.png';

function SectionTitle({ maintext, spantext, className, textClassName, hideImg }) {
    return (
        <div className={`flex items-center justify-center gap-2  ${className}`}>
            <Image src={arrow} alt="pointer"

                className={`h-auto w-3 sm:w-5 ${hideImg && "hidden"}`}
            />
            <h1 className={`font-bold  text-navyBlue flex justify-center items-center
                text-sm sm:text-2xl lg:text-3xl  uppercase ${textClassName}`}>
                {maintext} <span className="text-flame">{spantext}</span>
            </h1>
        </div>
    );
}

SectionTitle.propTypes = {
    maintext: PropTypes.string.isRequired,
    spantext: PropTypes.string,
    className: PropTypes.string,
    textClassName: PropTypes.string,
    hideImg: PropTypes.boolean
};

export default SectionTitle;
