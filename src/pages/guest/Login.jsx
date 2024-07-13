import { Link } from "react-router-dom";
import Description from "../../components/ui/Description";
import Input from "../../components/ui/Input";
import SectionTitle from "../../components/ui/SectionTitle";
import loginImg from "./../../assets/loginImg.png";
import { Button } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as yup from 'yup';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../services/auth/authSlice";


function Login() {
    const dispatch = useDispatch();
    const { isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);
    const [rememberMe, setRememberMe] = useState(false);

    const initialValues = {
        email: "",
        password: ""
    };

    const validationSchema = yup.object().shape({
        email: yup.string().required("This is a required field").email("this email is not valie"),
        password: yup.string().required("This is a required field"),
    });

    const onSubmit = (values) => {
        const user = {
            data: values,
            rememberMe: rememberMe
        };
        dispatch(login(user));
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <form
            onSubmit={formik.handleSubmit}
            className="
                pt-10 sm:pt-10 md:pt-16 lg:pt-28
                flex flex-col lg:flex-row 
                h-auto lg:h-screen
                w-full "
        >
            <img src={loginImg} alt="" className="lg:w-6/12 w-full h-[70vh] lg:h-full object-cover " />
            <div className="lg:w-6/12 w-full flex flex-col items-center justify-center my-5 lg:my-20">
                <div className="w-11/12 mb-10">
                    <SectionTitle
                        maintext="Welcome &nbsp;"
                        spantext={"Back"}
                        hideImg={true}
                        textClassName={"!text-lg sm:!text-3xl lg:!text-4xl xl:!text-5xl  "}
                    />
                    <Description
                        className={"text-wrap text-center !text-sm sm:!text-lg xl:!text-2xl  "}
                        text="Enter your email and password to access your account"
                    />
                </div>
                <div className="w-10/12 flex flex-col">
                    <Input formik={formik} name={"email"} label={"Email"} placeholder={"Enter your Email"} />
                    <Input formik={formik} name={"password"} type="password" label={"Password"} placeholder={"Enter your Password"} className={"!mb-3"} />
                    <div className="flex justify-between items-center mb-10">
                        <div className="flex justify-center items-center gap-1">
                            <input
                                type="checkbox"
                                className="size-3 sm:size-4 lg:size-5"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <label className="text-xs sm:text-sm lg:text-lg" htmlFor="remember me">Remember Me</label>
                        </div>
                        <Link className="text-xs sm:text-sm lg:text-lg" to={"/forgot-password"}>Forgot Password?</Link>
                    </div>
                    <Button type="submit" className="w-full normal-case
                        min-h-3 sm:min-h-12 xl:min-h-20
                        text-sm sm:text-2xl xl:text-3xl
                    ">
                        {isLoading ? "Loading..." : "Sign in"}
                    </Button>
                    {isError && <p className="text-red-500 mt-4">{message}</p>}
                    <p className="text-wrap text-center !text-sm sm:!text-lg xl:!text-2xl mt-2">Don’t have an account? &nbsp; <Link to={"/register"} className="text-flame">Sign Up</Link></p>
                </div>
            </div>
        </form>
    );
}

export default Login;
