import { Button } from "@material-tailwind/react"

function ScheduleAppointmentSection() {
    return (
        <section className="h-60 w-full bg-midnightBlack  flex flex-col justify-around items-center my-20" >
            <h1 className="font-bold text-3xl text-pumpkin">
                Unmatched Auto Care Awaits!!
            </h1>
            <p className="font-bold text-lg w-1/2 text-white text-center">
                Experience top-notch service and expert care for your vehicle.
                Trust Katy Auto Care LLC to keep you on the road with confidence.
            </p>
            <div className="flex gap-4">
                <Button
                    className="text-sm font-medium w-64 text-white hover:text-white hover:bg-pumpkin !border border-s-[0.1px] border-pumpkin rounded-lg py-2  " >
                    Register
                </Button>
                <Button
                    className="text-sm font-medium  text-white hover:text-white hover:bg-pumpkin !border border-s-[0.1px] border-pumpkin rounded-lg py-2  " >
                    Schedule an Appointment
                </Button>
            </div>
        </section>

    )
}

export default ScheduleAppointmentSection