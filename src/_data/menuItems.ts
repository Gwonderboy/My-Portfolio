import { ABOUT_ROUTE, CONTACT_ROUTE, HOME_ROUTE, PROJECTS_ROUTE } from "@/constants/routes";


interface MenuItem {
    name: string;
    url: string;
}

const menuItems: MenuItem[] = [
    { name: 'Home', url: `${HOME_ROUTE}` },
    { name: 'About', url: `${ABOUT_ROUTE}` },
    { name: 'Portfolio', url: `${PROJECTS_ROUTE}` },
    { name: 'Contact', url: `${CONTACT_ROUTE}` },
];

export default menuItems;