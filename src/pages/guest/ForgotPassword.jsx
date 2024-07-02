import Description from "../../components/ui/Description"
import Input from "../../components/ui/Input"
import SectionTitle from "../../components/ui/SectionTitle"
import loginImg from "./../../assets/loginImg.png"
import { Button } from "@material-tailwind/react"
import { useFormik } from "formik";
import * as yup from 'yup';

function ForgotPassword() {
    const initialValues = {
        user_name: "",
        email: ""
    };
    const validationSchema = yup.object().shape({
        user_name: yup.string().required("This is a required field"),
        email: yup.string().required("This is a required field").email("invalid email"),
    });
    const onSubmit = (values) => {

        console.log(values)
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
              h-screen  t:h-auto overflow-hidden"
        >
            <img src={loginImg} alt="" className="w-6/12 t:w-full t:h-[50vh] object-cover " />

            <div className="w-6/12 t:w-full
               flex flex-col items-center justify-center my-20
           ">
                <div className="w-11/12 mb-10  ">
                    <SectionTitle
                        maintext="forgot &nbsp;"
                        spantext={"your PassWord"}
                        hideImg={true}
                        textClassName={"!text-5xl sl:!text-4xl ph:!text-2xl sph:!text-lg"}
                    />
                    <Description
                        className={"text-wrap text-center !text-2xl ph:!text-lg sph:!text-sm"}
                        text="Don't Worry! Reset Your Password Here"
                    />
                </div>
                <div className="w-10/12 flex flex-col  ">
                    <Input formik={formik} name={"user_name"} label={"User Name"} placeholder={"Enter Your User Name"} />
                    <Input formik={formik} name={"email"} label={"Email"} placeholder={"Enter Your Email"} />
                    <Button type="submit" className="w-full min-h-20 ph:min-h-12 sph:min-h-3 text-3xl ph:text-2xl sph:text-sm  normal-case"> Send verification code</Button>
                </div>

            </div>
        </form >



    )
}

export default ForgotPassword