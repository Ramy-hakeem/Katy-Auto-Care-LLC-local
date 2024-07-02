import { Button } from "@material-tailwind/react";

function ScheduleAppointmentSection() {
    return (
        <section className=" bg-midnightBlack flex flex-col justify-center gap-10 items-center my-[200px] md:my-24 py-20 h-auto">
            <h1 className="font-bold text-pumpkin uppercase 
                text-lg sm:text-2xl md:text-3xl lg:text-4xl
            ">
                Unmatched Auto Care Awaits!!
            </h1>
            <p className="font-bold text-white text-center w-11/12 md:w-10/12 xl:w-9/12
             text-sm sm:text-lg md:text-2xl
             ">
                Experience top-notch service and expert care for your vehicle. Trust Katy Auto Care LLC to keep you on the road with confidence.
            </p>
            <div className="flex justify-center gap-4 items-center">
                <Button className="font-medium text-white hover:bg-pumpkin !border border-s-[0.1px] border-pumpkin rounded-lg normal-case flex justify-center items-center 
                         text-sm sm:text-lg md:text-2xl 
                ">
                    Sign Up
                </Button>
                <Button className="
                    font-medium text-white hover:text-white hover:bg-pumpkin !border border-s-[0.1px] border-pumpkin rounded-lg normal-case flex justify-center items-center 
                    text-sm sm:text-lg md:text-2xl 
                 ">
                    Schedule an Appointment
                </Button>
            </div>
        </section>
    );
}

export default ScheduleAppointmentSection;
