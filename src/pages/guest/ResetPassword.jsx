import Description from "../../components/ui/Description";
import Input from "../../components/ui/Input";
import SectionTitle from "../../components/ui/SectionTitle";
import loginImg from "./../../assets/loginImg.png";
import { Button } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useEffect } from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

function ResetPassword() {
  // const dispatch = useDispatch();
  const { isLoading, isError, message } = useAuth();

  const initialValues = {
    password: "",
    password2: "",
  };

  const validationSchema = yup.object().shape({
    password: yup.string().required("required field"),
    password2: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("This is a required field"),
  });

  const onSubmit = () => {};

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  const showAlert = () => {
    Swal.fire({
      icon: "success",
      titleText: "successfully",
      html: "<p class='custom-sub-title'>Your password has been reset successfully</p>",
      confirmButtonText: "Contenue",
      customClass: {
        confirmButton: "custom-confirm-button",
        title: "custom-title",
        icon: "custom-icon",
      },
      buttonsStyling: false,
    });
  };

  useEffect(() => {
    showAlert();
  }, []);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="
                pt-10 sm:pt-10 md:pt-16 lg:pt-28
                flex flex-col lg:flex-row 
                h-auto  lg:h-screen
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
            maintext="Reset &nbsp;"
            spantext={" your password"}
            hideImg={true}
            textClassName={"!text-lg sm:!text-3xl lg:!text-3xl xl:!text-4xl  "}
          />
          <Description
            className={
              "text-wrap text-center !text-sm sm:!text-lg xl:!text-2xl  "
            }
            text="Set the new password for your account so you can login and access all features."
          />
        </div>
        <div className="w-10/12 flex flex-col">
          <Input
            formik={formik}
            name="password"
            value={formik.values.password}
            type="password"
            label="Password"
            placeholder="Enter Your New Password"
            required={true}
          />

          <Input
            formik={formik}
            name="password2"
            value={formik.values.password2}
            type="password"
            label="Confirm New Password"
            placeholder="Confirm Your New Password"
            required={true}
          />
          <Button
            type="submit"
            className="w-full normal-case
                        min-h-3 sm:min-h-12 xl:min-h-20
                        text-sm sm:text-2xl xl:text-3xl
                    "
          >
            {isLoading ? "Loading..." : "Update Password"}
          </Button>
          {isError && <p className="text-red-500 mt-4">{message}</p>}
        </div>
      </div>
    </form>
  );
}

export default ResetPassword;
