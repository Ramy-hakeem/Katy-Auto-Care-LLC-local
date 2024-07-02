import user from "../../assets/user.png"
import Image from "../ui/Image";

const ReviewCard = () => {
    return (
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-2xl p-6">
            <p className="text-gray-700 mb-4">
                Thank you for your service. I am very pleased with the result. I have seen exponential growth in my business and it's all thanks to your amazing service.
            </p>
            <div className="flex items-center">
                <Image src={user} alt="Emily Stone" className="w-15 h-15 rounded-full mr-4" />
                <div>
                    <p className="text-blue-600 font-semibold">Emily Stones</p>
                    <p className="text-gray-500 text-sm">CEO, Marketing Guru</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
