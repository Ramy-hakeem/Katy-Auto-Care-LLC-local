import PropTypes from 'prop-types'; // Import PropTypes
import StarIcon from '../../assets/StarIcon';

function CardHeader({ discount = "", children, StarIconColor, discountClassName = "" }) {
    return (
        <div className="relative mb-3">
            <div className="rounded-t-xl overflow-hidden">
                {children}
            </div>
            <div className={`absolute ${discount === "" && "hidden"}`}>
                <div className="flex items-start transform -translate-y-1/2 ml-5">
                    <StarIcon color={StarIconColor} />
                </div>
                <p className={`flex items-start text-black transform translate-x-[10px] -translate-y-[60px] xs:text-sm z-20 ml-5 ${discountClassName}`}>
                    {discount}%
                </p>
            </div>
        </div>
    );
}

// Define prop types
CardHeader.propTypes = {
    discount: PropTypes.string,
    children: PropTypes.node,
    StarIconColor: PropTypes.string,
    discountClassName: PropTypes.string
};

export default CardHeader;
