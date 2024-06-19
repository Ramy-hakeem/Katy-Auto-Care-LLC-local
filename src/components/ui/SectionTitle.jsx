import PropTypes from 'prop-types';
import Image from './Image';
import arrow from '../../assets/left-arrow.png';

function SectionTitle({ maintext, spantext, className }) {
    return (
        <div className={`flex items-center justify-center gap-2 mb-4 ${className}`}>
            <Image src={arrow} alt="pointer"

                className="
            w-[30] sl:w-[25px] t:w-[20px]
            -[34px] sl:h-[28px] t:h-[22px]
             "/>
            <h1 className=" font-bold leading-17 text-navyBlue flex justify-center items-center
            text-[38px] sl:text-[30px] t:text-[24px] uppercase  
            ">
                {maintext} <span className="text-flame">{spantext}</span>
            </h1>
        </div>
    );
}

SectionTitle.propTypes = {
    maintext: PropTypes.string.isRequired,
    spantext: PropTypes.string,
    className: PropTypes.string,
};

export default SectionTitle;
