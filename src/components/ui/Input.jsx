import { useState } from 'react';
import PropTypes from 'prop-types';
import passwordImg from "./../../assets/passwordImg.png";
import closedEye from "./../../assets/closedEye.png";

const Input = ({ formik, name, type = "text", label, placeholder, className, required = false }) => {
    const [inputType, setInputType] = useState(type);

    return (
        <div className={`flex flex-col gap-1  text-sm sm:text-lg md:text-lg lg:text-2xl w-full mb-8  ${className}`}>
            <label htmlFor={name}>{label} <span className={` ${!required ? "hidden" : ""}`}>*</span></label>
            <div className={`${type === "password" && "relative"} w-full`}>
                <input
                    name={name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id={name}
                    type={inputType}
                    value={formik.values[name]}
                    placeholder={placeholder}
                    autoComplete={type === "password" ? "password" : ""}
                    className={`h-10 sm:min-h-12  md:min-h-15 lg:min-h-16  bg-[#F5F7FA] w-full rounded-xl p-1  ${(formik.errors[name] && formik.touched[name]) && "border border-red-400"}`}
                />

                {type === "password" && (
                    inputType === "text" ? (
                        <img
                            onClick={() => setInputType(prev => prev === "text" ? "password" : "text")}
                            src={passwordImg}
                            className="w-4 sm:w-5 md:w-6 lg:w-7 h-auto cursor-pointer absolute top-1/2 right-4 -translate-y-1/2"
                            alt="Toggle visibility"
                        />
                    ) : (
                        <img
                            onClick={() => setInputType(prev => prev === "text" ? "password" : "text")}
                            src={closedEye}
                            className="w-4 sm:w-5 md:w-6 lg:w-7 h-auto cursor-pointer absolute top-1/2 right-4 -translate-y-1/2"
                            alt="Toggle visibility"
                        />
                    )

                )}
            </div>
            {formik.errors[name] && formik.touched[name] && (
                <div className='text-[#FF0000] text-right mr-2'>{formik.errors[name]}</div>
            )}
        </div>
    );
};

Input.propTypes = {
    formik: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string
};

export default Input;
