import { Link } from "react-router-dom";
import Description from "../../components/ui/Description";
import Input from "../../components/ui/Input";
import SectionTitle from "../../components/ui/SectionTitle";
import addCarBanner from "./../../assets/addCarBanner.png";
import { Button } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as yup from 'yup';
import { useSelector } from "react-redux";
import SelectInput from "../../components/ui/SelectInput";

function AddCar() {
    const { isLoading, isError, message } = useSelector((state) => state.auth);
    const makes = []
    const initialValues = {
        make_id: "",
        model: "",
        mileage: "",
        year: "",
        vin: "",
        license_plate: "",
        color_id: ""
    };

    const validationSchema = yup.object().shape({
        make_id: yup.string().required("required field"),
        model: yup.string().required("required field"),

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
            <img src={addCarBanner} alt="" className="lg:w-6/12 w-full h-[70vh] lg:h-full object-cover " />
            <div className="lg:w-6/12 w-full flex flex-col items-center justify-center my-5 lg:my-20">
                <div className="w-11/12 mb-10">
                    <SectionTitle
                        maintext="add&nbsp;"
                        spantext={"your car"}
                        hideImg={true}
                        textClassName={"!text-lg sm:!text-3xl lg:!text-3xl xl:!text-4xl  "}
                    />

                    <Description
                        className={"text-wrap text-center !text-sm sm:!text-lg xl:!text-2xl  "}
                        text="Enter your vehicle details to get started!"
                    />
                </div>
                <div className="w-10/12 flex flex-col overflow-y-auto form-scroll bg-scroll">

                    <div className="flex gap-2 pr-2">
                        <SelectInput
                            formik={formik}
                            name={"make_id"}
                            label={"Make"}
                            placeholder={"Select a Make"}
                            values={() => makes.map(make => {
                                return (
                                    <option key={make.id} >
                                        {make.name}
                                    </option>
                                )
                            })}
                        />
                        <SelectInput
                            formik={formik}
                            name={"model"}
                            label={"Model"}
                            placeholder={"BenzS-Class"}
                            values={() => makes.map(make => {
                                return (
                                    <option key={make.id} >
                                        {make.name}
                                    </option>
                                )
                            })}
                        />
                    </div>

                    <div className="flex gap-2 pr-2">
                        <SelectInput
                            formik={formik}
                            name={"year"}
                            label={"Year"}
                            placeholder={"2022"}

                            values={() => makes.map(make => {
                                return (
                                    <option key={make.id} >
                                        {make.name}
                                    </option>
                                )
                            })}
                        />

                        <Input
                            formik={formik}
                            name="mileage"
                            label="MIleage"
                            placeholder="100.000"
                        />
                    </div>



                    <div className="flex gap-2 pr-2">
                        <Input
                            formik={formik}
                            name="vin"
                            label="VIN"
                            placeholder="1GNEK13Z42R298984"
                            required={true}
                        />
                        <Input
                            formik={formik}
                            name="license_plate"
                            label="License Plate"
                            placeholder="ABC-123"
                        />
                    </div>
                    <div className="flex gap-2 pr-2">
                        <SelectInput
                            formik={formik}
                            name={"Color_id"}
                            label={"Color"}
                            placeholder={"Red"}
                            values={() => makes.map(make => {
                                return (
                                    <option key={make.id} >
                                        {make.name}
                                    </option>
                                )
                            })}
                        />
                        <SelectInput
                            formik={formik}
                            name={"engine_type"}
                            label={"Engine Type"}
                            placeholder={"V6 Engine"}

                            values={() => makes.map(make => {
                                return (
                                    <option key={make.id} >
                                        {make.name}
                                    </option>
                                )
                            })}
                        />
                    </div>

                    <p className="my-5 text-right pr-2">+ Add New Car</p>

                    <Button type="submit" className="w-full normal-case
                        min-h-3 sm:min-h-12 xl:min-h-20
                        text-sm sm:text-2xl xl:text-3xl
                    ">

                        {isLoading ? "Loading..." : "Submit"}
                    </Button>

                </div>
                {isError && <p className="text-red-500 mt-4">{message}</p>}




            </div>
        </form>
    );
}

export default AddCar;
