import Description from "../../components/ui/Description";
import Input from "../../components/ui/Input";
import SectionTitle from "../../components/ui/SectionTitle";
import loginImg from "./../../assets/loginImg.png";
import { Button } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as yup from "yup";
import OtpInput from "../../components/ui/OtpInput";
import useAuth from "../../hooks/useAuth";

function ForgotPassword() {
  const { isLoading, isError, message } = useAuth();

  const initialValues = {
    email: "",
    phone_number: "",
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("required field")
      .email("this email is not valie"),
    phone_number: yup.string().required("required field"),
  });

  const onSubmit = () => { };

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
                h-auto  lg:min-h-screen
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
            maintext="Forget &nbsp;"
            spantext={" your password"}
            hideImg={true}
            textClassName={"!text-lg sm:!text-3xl lg:!text-3xl xl:!text-4xl  "}
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
            name={"email"}
            label={"Email"}
            placeholder={"Enter your Email"}
          />
          <Input
            formik={formik}
            name={"phone_number"}
            label={"Phone Number"}
            placeholder={"Enter your Phone Number"}
            className={"!mb-3"}
          />

          <Button
            type="submit"
            className="w-full normal-case
                        min-h-3 sm:min-h-12 xl:min-h-20
                        text-sm sm:text-2xl xl:text-3xl
                    "
          >
            {isLoading ? "Loading..." : "Send verification code"}
          </Button>
          {isError && <p className="text-red-500 mt-4">{message}</p>}
        </div>
        <OtpInput />
      </div>
    </form>
  );
}

export default ForgotPassword;
