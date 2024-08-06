import { Link, Navigate } from "react-router-dom";
import Description from "../../components/ui/Description";
import Input from "../../components/ui/Input";
import SectionTitle from "../../components/ui/SectionTitle";
import loginImg from "./../../assets/loginImg.png";
import { Button } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { useLazyGetUserDataQuery, useLoginMutation } from "../../api/authApi";
import { setState } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { addLoginData, addUserData } from "../../features/auth/authSlice";

function Login() {
  const dispatch = useDispatch();
  const [rememberMe, setRememberMe] = useState(false);
  const initialValues = {
    username: "",
    password: "",
  };

  const [getLoginData, { isLoading, isError, error }] = useLoginMutation();
  const [getUserData, { isLoading: isLoadingUserData, isSuccess }] =
    useLazyGetUserDataQuery();
  console.log();
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required("This is a required field")
      .email("this email is not valie"),
    password: yup.string().required("This is a required field"),
  });

  const onSubmit = async (values) => {
    try {
      const response = await getLoginData(values).unwrap();
      const loginData = {
        access_token: response.data.access_token,
        isAuthenticated: true,
        id: response.data.customer_id,
        role: response.data.user_type,
      };

      setState("katyAutoCareUserData", loginData, rememberMe);

      dispatch(addLoginData({ ...loginData }));
      const userData = await getUserData(loginData.id).unwrap();
      dispatch(addUserData(userData));
      if (isSuccess) {
        <Navigate to={"/"} />;
      }
    } catch (err) {
      console.error("Failed to fetch user data:", err);
    }
  };
  console.log("error", error)

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
      <img
        src={loginImg}
        alt=""
        className="lg:w-6/12 w-full h-[70vh] lg:h-full object-cover "
      />
      <div className="lg:w-6/12 w-full flex flex-col items-center justify-center my-5 lg:my-20">
        <div className="w-11/12 mb-10">
          <SectionTitle
            maintext="Welcome &nbsp;"
            spantext={"Back"}
            hideImg={true}
            textClassName={"!text-lg sm:!text-3xl lg:!text-4xl xl:!text-5xl  "}
          />
          <Description
            className={
              "text-wrap text-center !text-sm sm:!text-lg xl:!text-2xl  "
            }
            text="Enter your email and password to access your account"
          />
        </div>
        <div className="w-10/12 flex flex-col">
          <Input
            formik={formik}
            name={"username"}
            label={"Email"}
            placeholder={"Enter your Email"}
          />
          <Input
            formik={formik}
            name={"password"}
            type="password"
            label={"Password"}
            placeholder={"Enter your Password"}
            className={"!mb-3"}
          />
          <div className="flex justify-between items-center mb-10">
            <div className="flex justify-center items-center gap-1">
              <input
                type="checkbox"
                className="size-3 sm:size-4 lg:size-5"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label
                className="text-xs sm:text-sm lg:text-lg"
                htmlFor="remember me"
              >
                Remember Me
              </label>
            </div>
            <Link
              className="text-xs sm:text-sm lg:text-lg"
              to={"/forgot-password"}
            >
              Forgot Password?
            </Link>
          </div>
          <Button
            type="submit"
            className="w-full normal-case
                      min-h-3 sm:min-h-12 xl:min-h-20
                      text-sm sm:text-2xl xl:text-3xl
                  "
          >
            {isLoading || isLoadingUserData ? "Loading..." : "Sign in"}
          </Button>
          {isError && (
            <p className="text-red-500 mt-4">
              {error?.data?.detail[0]?.msg || error?.data?.detail?.message ||
                error?.error ||
                "An error occurred"}
            </p>
          )}
          <p className="text-wrap text-center !text-sm sm:!text-lg xl:!text-2xl mt-2">
            Don’t have an account? &nbsp;{" "}
            <Link to={"/register"} className="text-flame">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Login;
