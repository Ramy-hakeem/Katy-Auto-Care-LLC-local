import { Button } from '@material-tailwind/react';
import { useState, useEffect } from 'react';

const OtpInput = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(30);

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer === 1) {
                    clearInterval(countdown);
                    return 0;
                }
                return prevTimer - 1;
            });
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    const handleChange = (value, index) => {
        if (/^\d*$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
        }
    };

    return (
        <div className="flex flex-col items-center my-10  w-full">
            <div className="flex space-x-2 mb-4">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleChange(e.target.value, index)}
                        className="w-10 h-10 text-center border-2 border-red-400 rounded"
                    />
                ))}
            </div>
            <div className="text-lg mb-4">{`00:${timer < 10 ? `0${timer}` : timer}`}</div>
            <div className='w-10/12 '>

                <Button type="submit" className=" normal-case
                        min-h-3 sm:min-h-12 xl:min-h-20
                        text-sm sm:text-2xl xl:text-3xl
                        w-full
                    ">
                    Contenue
                </Button>
                <p>you didnt receive a code? <span className='text-scarlet'>resend</span> </p>
            </div>
        </div>
    );
};

export default OtpInput;
