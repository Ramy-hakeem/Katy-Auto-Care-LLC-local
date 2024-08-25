import React from "react";
import {
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Badge,
    IconButton,
} from "@material-tailwind/react";
import {

    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    UserCircleIcon,


} from "@heroicons/react/24/solid";
import { BellIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";


export default function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const closeMenu = () => setIsMenuOpen(false);
    const dispatch = useDispatch()
    const HandleLogOut = () => {
        dispatch(logout())
        setIsMenuOpen(false)
    }
    const profileMenuItems = [
        {
            label: "My Profile",
            icon: UserCircleIcon,
        },
        // {
        //     label: "Edit Profile",
        //     icon: Cog6ToothIcon,
        // },
        // {
        //     label: "Inbox",
        //     icon: InboxArrowDownIcon,
        // },
        // {
        //     label: "Help",
        //     icon: LifebuoyIcon,
        // },
    ];

    return (
        <div className="flex gap-3">
            {/* <Badge content="5">
                <IconButton className="bg-blue-gray-300">
                    <BellIcon className="h-6 w-6 z-10" />
                </IconButton>
            </Badge> */}
            <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">

                <MenuHandler>
                    <Button
                        variant="text"
                        color="blue-gray"
                        className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                    >
                        <Avatar
                            variant="circular"
                            size="sm"
                            alt="tania andrew"
                            className="border border-gray-900 p-0.5"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        />
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                                }`}
                        />
                    </Button>
                </MenuHandler>
                <MenuList className="p-1">
                    {profileMenuItems.map(({ label, icon }) => {

                        return (
                            <MenuItem
                                key={label}
                                onClick={closeMenu}
                                className={`flex items-center gap-2 rounded `}
                            >
                                {React.createElement(icon, {
                                    className: `h-4 w-4 `,
                                    strokeWidth: 2,
                                })}
                                <Typography
                                    as="span"
                                    variant="small"
                                    className="font-normal inherit"
                                >
                                    {label}
                                </Typography>
                            </MenuItem>
                        );
                    })}

                    <MenuItem
                        key={"Sign Out"}
                        onClick={HandleLogOut}

                        className={`flex items-center gap-2 round hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10
                            `}
                    >
                        {React.createElement(PowerIcon, {
                            className: `h-4 w-4  "text-red-500" `,
                            strokeWidth: 2,
                        })}
                        <Typography
                            as="span"
                            variant="small"
                            className="font-normal"
                            color={"red"}
                        >
                            {"Sign Out"}
                        </Typography>
                    </MenuItem>
                </MenuList>

            </Menu>
        </div >

    );
}