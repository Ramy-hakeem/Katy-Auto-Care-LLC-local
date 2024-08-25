import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import StarIcon from "../../assets/StarIcon";
import CardHeader from "./CardHeader";

export function OfCard() {
    return (
        <Card className="w-full max-w-[21rem] shadow-lg ">
            <CardHeader>
                <img
                    src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="ui/ux review check"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="font-medium">
                    Wooden House, Florida
                </Typography>
                <Typography color="gray">
                    Enter a freshly updated and thoughtfully furnished peaceful home
                    surrounded by ancient trees, stone walls, and open meadows.
                </Typography>
            </CardBody>
            <CardFooter>
                <Button size="lg" fullWidth={true} className="bg-white text-black border border-red-300">
                    Reserve
                </Button>
            </CardFooter>

        </Card>
    )
}