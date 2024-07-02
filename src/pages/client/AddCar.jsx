import { Link } from "react-router-dom";
import Description from "../../components/ui/Description";
import Input from "../../components/ui/Input";
import SectionTitle from "../../components/ui/SectionTitle";
import loginImg from "./../../assets/loginImg.png";
import { Button } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as yup from 'yup';

function AddCar() {
    const initialValues = {
        name: "",
        user_name: "",
        email: "",
        phone_number_one: "",
        phone_number_two: "",
        state: "",
        zip: "",
        address: "",
        password: "",
        password2: ""
    };

    const validationSchema = yup.object().shape({
        name: yup.string().required("This is a required field"),
        user_name: yup.string().required("This is a required field"),
        email: yup.string().email("Invalid email format").required("This is a required field"),
        phone_number_one: yup.string().required("This is a required field"),
        phone_number_two: yup.string().required("This is a required field"),
        state: yup.string().required("This is a required field"),
        zip: yup.string().required("This is a required field"),
        address: yup.string().required("This is a required field"),
        password: yup.string().required("This is a required field"),
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
            className="pt-[131px] sl:pt-[116px] t:pt-[110px] ph:pt-[80px] flex t:flex-col h-screen  t:h-fit overflow-hidden"
        >

            <img src={loginImg} alt="" className="t:h-[50vh] w-6/12 t:w-full object-cover" />

            <div className="w-6/12 t:w-full flex flex-col items-center justify-center my-20">
                <div className=" t:w-full mb-10">
                    <SectionTitle
                        maintext="Add &nbsp;"
                        spantext={"Your Car"}
                        hideImg={true}
                        textClassName={"!text-5xl sl:!text-4xl t:!text-5xl ph:!text-3xl sph:!text-lg"}
                    />
                    <Description
                        className={"text-wrap text-center  !text-2xl ph:!text-lg sph:!text-sm"}
                        text="Enter your vehicle details to get started!"
                    />
                </div>
                <div className="w-10/12 flex flex-col overflow-y-auto form-scroll bg-scroll">




                    <div className="flex gap-2">
                        <Input
                            formik={formik}
                            name="make_id"
                            value={formik.values.phone_number_one}
                            label="Make"
                            placeholder="Select a Make"

                        />

                        <Input
                            formik={formik}
                            name="model"
                            value={formik.values.zip}
                            label="Model"
                            placeholder="Enter Your ZIP"

                        />

                    </div>





                    <Button type="submit" className="w-full min-h-20 ph:min-h-12 sph:min-h-2  text-3xl ph:text-2xl sph:text-sm normal-case flex justify-center items-center">
                        Sign UP
                    </Button>
                    <p className="text-[#1B1E20] text-2xl ph:text-lg sph:text-sm text-center">
                        Already have an account? <Link className={"text-flame"} to={"/login"}>Sign In</Link>
                    </p>
                </div>
            </div>
        </form>
    );
}

export default AddCar;
