import {
    FooterLinkType,
    IconLookupType,
    NavigationLinkType
} from "./type-library";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export const navigationLinks: NavigationLinkType[] = [
    {
        display: "Dashboard",
        link: "/",
        filepath: "src/app/page.tsx",
        changeFrequency: "monthly",
        priority: 1.0
    },
    {
        display: "Muscle Group Data",
        link: "/muscle-group-data",
        filepath: "src/app/(site-pages)/muscle-group-data/page.tsx",
        changeFrequency: "monthly",
        priority: 0.9
    },
    {
        display: "Workout History",
        link: "/workout-history",
        filepath: "src/app/(site-pages)/workout-history/page.tsx",
        changeFrequency: "yearly",
        priority: 0.8
    }
];

export const footerLinks: FooterLinkType[] = [
    {
        display: "Home",
        link: "/"
    },
    {
        display: "Privacy Policy",
        link: "/privacy-policy"
    },
    {
        display: "Sitemap",
        link: "/sitemap"
    }
];

export const mobileLinkIcons: IconLookupType[] = [
    {
        display: "Dashboard",
        icon: DashboardIcon
    },
    {
        display: "Muscle Group Data",
        icon: FitnessCenterIcon
    },
    {
        display: "Workout History",
        icon: CalendarMonthIcon
    }
];