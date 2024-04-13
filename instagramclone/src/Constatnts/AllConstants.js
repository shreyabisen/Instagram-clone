import { IoMdHome } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { BiSolidMoviePlay } from "react-icons/bi";
import { RiMessengerLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegSquarePlus } from "react-icons/fa6";

export const NAV_ITEMS = [

    {
        name: "Home",
        icon: IoMdHome, redirect: "/home"
    },
    {
        name: "Search",
        icon: IoSearch, redirect: "/search"
    },
    {
        name: "Explore",
        icon: MdOutlineExplore, redirect: "/explore"
    },
    {
        name: "Reels",
        icon: BiSolidMoviePlay, redirect: "/reels"
    },
    {
        name: "Messages",
        icon: RiMessengerLine, redirect: "/message"
    },
    {
        name: "Notifications",
        icon: FaRegHeart, redirect: "/notification"
    },
    {
        name: "Create",
        icon: FaRegSquarePlus, redirect: "/create"
    }




]
