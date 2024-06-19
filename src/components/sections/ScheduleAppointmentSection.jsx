import { Button } from "@material-tailwind/react"

function ScheduleAppointmentSection() {
    return (
        <section className="w-full bg-midnightBlack  flex flex-col justify-center gap-[60px] items-center 
        my-[200px] t:my-24 
        h-[693px] sl:h-[577px] t:h-[413px]
        " >
            <h1 className="font-bold text-pumpkin uppercase
            text-[44px] sl:text-[36px] t:text-[26px]
            leading-[66px] sl:leading-[54px] t:leading-[39px]
            ">
                Unmatched Auto Care Awaits!!
            </h1>
            <p className="font-bold text-white text-center
            w-[1250px] sl:w-[1041px] t:w-[764px]
            text-[36px] sl:text-[30px] t:text-[22px]
            leading-[54px] sl:leading-[45px] t:leading-[33px]
            ">
                Experience top-notch service and expert care for your vehicle.
                Trust Katy Auto Care LLC to keep you on the road with confidence.
            </p>
            <div className="flex gap-[50px] justify-center items-center">
                <Button
                    className="font-medium text-white hover:text-white hover:bg-pumpkin !border border-s-[0.1px] border-pumpkin rounded-lg  normal-case
                    w-[373px] sl:w-[311x] t:w-[221px]
                    h-[71px] sl:h-[59px] t:h-[42px]
                    text-[24px] sl:text-[20px] t:text-[14px]
                    leading-[36px]  sl:leading-[30px] t:leading-[21px]
                    " >
                    Sign Up
                </Button>
                <Button
                    className="font-medium text-white hover:text-white hover:bg-pumpkin !border border-s-[0.1px] border-pumpkin rounded-lg  normal-case
                      w-[373px] sl:w-[311x] t:w-[221px]
                    h-[71px] sl:h-[59px] t:h-[42px]
                    text-[24px] sl:text-[20px] t:text-[14px]
                    leading-[36px]  sl:leading-[30px] t:leading-[21px]
                    " >
                    Schedule an Appointment
                </Button>

            </div>
        </section>

    )
}

export default ScheduleAppointmentSection