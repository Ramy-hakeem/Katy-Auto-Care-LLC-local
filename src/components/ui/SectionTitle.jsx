import PropTypes from 'prop-types';
import Image from './Image';
import arrow from '../../assets/left-arrow.png';

function SectionTitle({ maintext, spantext }) {
    return (
        <div className="flex items-center justify-center gap-2 mb-4">
            <Image src={arrow} alt="pointer" className="w-auto h-6" />
            <h1 className="text-3xl font-bold leading-17 text-navyBlue">
                {maintext} <span className="text-flame">{spantext}</span>
            </h1>
        </div>
    );
}

SectionTitle.propTypes = {
    maintext: PropTypes.string.isRequired,
    spantext: PropTypes.string,
};

export default SectionTitle;
