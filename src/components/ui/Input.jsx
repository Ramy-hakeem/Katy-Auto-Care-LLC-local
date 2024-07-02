import { useState } from 'react';
import PropTypes from 'prop-types';
import passwordImg from "./../../assets/passwordImg.png";

const Input = ({ formik, name, value, type = "text", label, placeholder, showEye, className }) => {
    const [inputType, setInputType] = useState(type);

    return (
        <div className={`flex flex-col gap-1 text-2xl ph:text-sm w-full mb-8 ${className}`}>
            <label htmlFor={name}>{label}</label>
            <div className={`${type === "password" && "relative"} w-full`}>
                <input
                    name={name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id={name}
                    type={inputType}
                    value={value}
                    placeholder={placeholder}
                    autoComplete={type === "password" ? "password" : ""}
                    className={`h-16 ph:h-12 sph:h-10 bg-[#F5F7FA] rounded-xl p-5 w-full ${(formik.errors[name] && formik.touched[name]) && "border border-red-400"}`}
                />
                {formik.errors[name] && formik.touched[name] && (
                    <div className='text-[#FF0000] text-right mr-2'>{formik.errors[name]}</div>
                )}
                {type === "password" && (
                    <img
                        onClick={() => setInputType(prev => prev === "text" ? "password" : "text")}
                        src={passwordImg}
                        className="w-6 sph:w-4 h-auto cursor-pointer absolute top-1/2 right-4 -translate-y-1/2"
                        alt="Toggle visibility"
                    />
                )}
            </div>
        </div>
    );
};

Input.propTypes = {
    formik: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    showEye: PropTypes.bool,
    className: PropTypes.string
};

export default Input;
