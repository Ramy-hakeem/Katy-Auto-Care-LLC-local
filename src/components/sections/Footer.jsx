function Footer() {
    return (
        <div className='mt-20 px-20 bg-midnightBlack flex  justify-around items-center  '>

            <div className='w-1/3'>
                <h1 className='font-semibold  text-2xl text-white'>
                    opening Hours
                </h1>
                <table className='text-[#F5F7FA] font-normal text-lg'>
                    <tr>
                        <td className='pr-8'> Monday</td>
                        <td>8.00 AM – 6.00 PM</td>
                    </tr>
                    <tr>
                        <td className='pr-8'> Tuesday</td>
                        <td>8.00 AM – 6.00 PM</td>
                    </tr>
                    <tr>
                        <td className='pr-8'> Wednesday</td>
                        <td>8.00 AM – 6.00 PM</td>
                    </tr>
                    <tr>
                        <td className='pr-8'> Thursday</td>
                        <td>8.00 AM – 6.00 PM</td>
                    </tr>
                    <tr>
                        <td className='pr-8'> Friday</td>
                        <td>8.00 AM – 6.00 PM</td>
                    </tr>
                    <tr>
                        <td className='pr-8'> Saturday</td>
                        <td>8.00 AM – 2.00 PM</td>
                    </tr>
                    <tr>
                        <td className='pr-8'> Sunday</td>
                        <td>closed</td>
                    </tr>
                </table>


            </div>
            <div className='w-1/3'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.8885029759367!2d-95.70290631016641!3d29.866969684639763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d7996194365d%3A0x57ade83228758c7!2sKaty%20Auto%20Care%20LLC!5e0!3m2!1sen!2seg!4v1707829477365!5m2!1sen!2seg"
                    className='w-80 h-52'
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                >
                </iframe>
            </div>
            <div className='w-1/3'>
                <h1 className='font-semibold text-2xl text-white'>
                    opening Hours
                </h1>
            </div>
        </div>
    )
}

export default Footer