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
        user_name: "",
        password: ""
    };

    const validationSchema = yup.object().shape({
        user_name: yup.string().required("This is a required field"),
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
              pt-[131px] sl:pt-[116px] t:pt-[110px]  ph:pt-[80px] 
              flex t:flex-col 
              h-screen  t:h-auto overflow-hidden
              w-full lg:w-screen"
        >
            <img src={loginImg} alt="" className="w-6/12 t:w-full t:h-[50vh] object-cover " />
            <div className="w-6/12 t:w-full flex flex-col items-center justify-center my-20">
                <div className="w-11/12 mb-10 ">
                    <SectionTitle
                        maintext="Welcome &nbsp;"
                        spantext={"Back"}
                        hideImg={true}
                        textClassName={"!text-5xl sl:!text-4xl ph:!text-3xl sph:!text-lg"}
                    />
                    <Description
                        className={"text-wrap text-center !text-2xl ph:!text-lg sph:!text-sm"}
                        text="Enter your email and password to access your account"
                    />
                </div>
                <div className="w-10/12 flex flex-col">
                    <Input formik={formik} name={"user_name"} label={"User Name"} placeholder={"Enter your User Name"} />
                    <Input formik={formik} name={"password"} type="password" label={"Password"} placeholder={"Enter your Password"} className={"!mb-3"} />
                    <div className="flex justify-between items-center mb-10">
                        <div className="flex justify-center items-center gap-1">
                            <input
                                type="checkbox"
                                className="w-5 h-5 sph:w-3 sph:h-3"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <label className="sph:text-xs" htmlFor="remember me">Remember Me</label>
                        </div>
                        <Link className="sph:text-xs" to={"/forgot-password"}>Forgot Password?</Link>
                    </div>
                    <Button type="submit" className="w-full min-h-20 ph:min-h-12 sph:min-h-3 text-3xl ph:text-2xl sph:text-sm -sm normal-case">
                        {isLoading ? "Loading..." : "Sign in"}
                    </Button>
                    {isError && <p className="text-red-500 mt-4">{message}</p>}
                </div>
            </div>
        </form>
    );
}

export default Login;
