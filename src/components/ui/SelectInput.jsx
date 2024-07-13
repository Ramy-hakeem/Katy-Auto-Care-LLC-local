import PropTypes from 'prop-types';

function SelectInput({ formik, name, values, label, placeholder, className, required = false }) {
    return (
        <div className={`flex flex-col gap-1 text-sm sm:text-lg md:text-lg lg:text-2xl w-full mb-8`}>
            <label htmlFor={name}>{label} <span className={` ${!required ? "hidden" : ""}`}>*</span></label>
            <div className={`w-full`}>
                <select
                    name={name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id={name}
                    value={formik.values[name]}
                    className={`h-10 sm:min-h-12 md:min-h-15 lg:min-h-16 bg-[#F5F7FA] rounded-xl p-1 w-full ${(formik.errors[name] && formik.touched[name]) && "border border-red-400"} ${className}`}
                >
                    <option value="" disabled>{placeholder}</option>
                    {values()}
                </select>
                {formik.errors[name] && formik.touched[name] && (
                    <div className='text-[#FF0000] text-right mr-2'>{formik.errors[name]}</div>
                )}
            </div>
        </div>
    );
}

SelectInput.propTypes = {
    formik: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    values: PropTypes.func.isRequired,
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string
};

export default SelectInput;
