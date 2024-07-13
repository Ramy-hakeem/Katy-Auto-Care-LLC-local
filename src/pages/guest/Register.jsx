import { Link } from "react-router-dom";
import Description from "../../components/ui/Description";
import Input from "../../components/ui/Input";
import SectionTitle from "../../components/ui/SectionTitle";
import loginImg from "./../../assets/loginImg.png";
import { Button } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as yup from 'yup';
import { useSelector } from "react-redux";
import SelectInput from "../../components/ui/SelectInput";

function Register() {
    const { isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);
    const states = [
        { name: "Alabama", abbreviation: "AL" },
        { name: "Alaska", abbreviation: "AK" },
        { name: "Arizona", abbreviation: "AZ" },
        { name: "Arkansas", abbreviation: "AR" },
        { name: "California", abbreviation: "CA" },
        { name: "Colorado", abbreviation: "CO" },
        { name: "Connecticut", abbreviation: "CT" },
        { name: "Delaware", abbreviation: "DE" },
        { name: "Florida", abbreviation: "FL" },
        { name: "Georgia", abbreviation: "GA" },
        { name: "Hawaii", abbreviation: "HI" },
        { name: "Idaho", abbreviation: "ID" },
        { name: "Illinois", abbreviation: "IL" },
        { name: "Indiana", abbreviation: "IN" },
        { name: "Iowa", abbreviation: "IA" },
        { name: "Kansas", abbreviation: "KS" },
        { name: "Kentucky", abbreviation: "KY" },
        { name: "Louisiana", abbreviation: "LA" },
        { name: "Maine", abbreviation: "ME" },
        { name: "Maryland", abbreviation: "MD" },
        { name: "Massachusetts", abbreviation: "MA" },
        { name: "Michigan", abbreviation: "MI" },
        { name: "Minnesota", abbreviation: "MN" },
        { name: "Mississippi", abbreviation: "MS" },
        { name: "Missouri", abbreviation: "MO" },
        { name: "Montana", abbreviation: "MT" },
        { name: "Nebraska", abbreviation: "NE" },
        { name: "Nevada", abbreviation: "NV" },
        { name: "New Hampshire", abbreviation: "NH" },
        { name: "New Jersey", abbreviation: "NJ" },
        { name: "New Mexico", abbreviation: "NM" },
        { name: "New York", abbreviation: "NY" },
        { name: "North Carolina", abbreviation: "NC" },
        { name: "North Dakota", abbreviation: "ND" },
        { name: "Ohio", abbreviation: "OH" },
        { name: "Oklahoma", abbreviation: "OK" },
        { name: "Oregon", abbreviation: "OR" },
        { name: "Pennsylvania", abbreviation: "PA" },
        { name: "Rhode Island", abbreviation: "RI" },
        { name: "South Carolina", abbreviation: "SC" },
        { name: "South Dakota", abbreviation: "SD" },
        { name: "Tennessee", abbreviation: "TN" },
        { name: "Texas", abbreviation: "TX" },
        { name: "Utah", abbreviation: "UT" },
        { name: "Vermont", abbreviation: "VT" },
        { name: "Virginia", abbreviation: "VA" },
        { name: "Washington", abbreviation: "WA" },
        { name: "West Virginia", abbreviation: "WV" },
        { name: "Wisconsin", abbreviation: "WI" },
        { name: "Wyoming", abbreviation: "WY" },
        { name: "Else", abbreviation: "not included in this list" },
    ];
    const initialValues = {
        fname: "",
        lname: "",
        user_name: "",
        email: "",
        phone_number_one: "",
        phone_number_two: "",
        state: "",
        city: "",
        zip: "",
        address: "",
        password: "",
        password2: ""
    };

    const validationSchema = yup.object().shape({
        fname: yup.string().required("required field"),
        lname: yup.string().required("required field"),
        user_name: yup.string().required("required field"),
        email: yup.string().email("Invalid email format").required("required field"),
        phone_number_one: yup.string().required("required field"),
        phone_number_two: yup.string(),
        state: yup.string().required("required field"),
        city: yup.string().required("required field"),
        zip: yup.string().required("required field").length(5, "it has to contain 5 digit"),
        address: yup.string().required("required field"),
        password: yup.string().required("required field"),
        password2: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required("This is a required field")
    });

    const onSubmit = (values) => {
        const fetchingData = { ...values };
        delete fetchingData.password2;
        console.log(fetchingData)
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <form
            onSubmit={formik.handleSubmit}
            className="pt-10 sm:pt-10 md:pt-16 lg:pt-28
                flex flex-col lg:flex-row 
                h-auto lg:h-screen 
                w-full
            "
        >
            <img src={loginImg} alt="" className="lg:w-6/12 w-full h-[70vh] lg:h-full object-cover " />
            <div className="lg:w-6/12 w-full flex flex-col items-center justify-center my-5 lg:my-20">
                <div className="w-11/12 mb-10">
                    <SectionTitle
                        maintext="Create&nbsp;"
                        spantext={"your account"}
                        hideImg={true}
                        textClassName={"!text-lg sm:!text-3xl lg:!text-3xl xl:!text-4xl  "}
                    />

                    <Description
                        className={"text-wrap text-center !text-sm sm:!text-lg xl:!text-2xl  "}
                        text="Enter your details to get started!"
                    />
                </div>
                <div className="w-10/12 flex flex-col overflow-y-auto form-scroll bg-scroll">
                    <Input
                        formik={formik}
                        name="fname"
                        value={formik.values.name}
                        label="Fist Name"
                        placeholder="Enter Your First Name"
                        required={true}

                    />
                    <Input
                        formik={formik}
                        name="lname"
                        value={formik.values.name}
                        label="Last Name"
                        placeholder="Enter Your Last Name"
                        required={true}
                    />

                    <Input
                        formik={formik}
                        name="email"
                        value={formik.values.email}
                        label="Email"
                        placeholder="Enter Your Email"
                        required={true}
                    />

                    <Input
                        formik={formik}
                        name="address"
                        value={formik.values.address}
                        label="Address"
                        placeholder="Enter Your Address"
                        required={true}
                    />
                    <div className="flex gap-2">
                        <Input
                            formik={formik}
                            name="city"
                            value={formik.values.city}
                            label="City"
                            placeholder="Enter Your City"
                            required={true}
                        />
                        <SelectInput
                            formik={formik}
                            name={"state"}
                            label={"State"}
                            placeholder={"Select a state"}
                            required={true}
                            values={() => states.map(state => {
                                return (
                                    <option key={state.abbreviation} value={state.abbreviation}>
                                        {state.name} ({state.abbreviation})
                                    </option>
                                )
                            })}
                        />
                    </div>


                    <Input
                        formik={formik}
                        name="zip"
                        value={formik.values.zip}
                        label="ZIP"
                        placeholder="Enter Your ZIP"
                        required={true}
                    />


                    <div className="flex gap-2">
                        <Input
                            formik={formik}
                            name="phone_number_one"
                            value={formik.values.phone_number_one}
                            label="Phone Number"
                            placeholder="Enter Your Phone Number"
                            required={true}
                        />
                        <Input
                            formik={formik}
                            name="phone_number_two"
                            value={formik.values.phone_number_two}
                            label="Phone Number 2"
                            placeholder="Enter Your Phone Number"
                        />
                    </div>


                    <Input
                        formik={formik}
                        name="password"
                        value={formik.values.password}
                        type="password"
                        label="Password"
                        placeholder="Enter Your Password"
                        required={true}
                    />

                    <Input
                        formik={formik}
                        name="password2"
                        value={formik.values.password2}
                        type="password"
                        label="Confirm Password"
                        placeholder="Confirm Your Password"
                        required={true}
                    />

                    <Button type="submit" className="w-full normal-case
                        min-h-3 sm:min-h-12 xl:min-h-20
                        text-sm sm:text-2xl xl:text-3xl
                    ">

                        {isLoading ? "Loading..." : "Sign Up"}
                    </Button>

                </div>
                {isError && <p className="text-red-500 mt-4">{message}</p>}


                <p className="text-wrap text-center !text-sm sm:!text-lg xl:!text-2xl mt-2">
                    Already have an account? &nbsp;
                    <Link to={"/login"} className="text-flame">Sign In</Link>
                </p>

            </div>
        </form>
    );
}

export default Register;
