import { NavLink } from "react-router";
import { useMemo } from "react";
import Burger from "./ui/burger";
import clsx from "clsx";

export default function Header() {

    const routes = useMemo(() => [
        {
            id: 1,
            title: 'Home',
            href: '',
        }, 
        {
            id: 2,
            title: 'About',
            href: 'about',
        },
        {
            id: 3,
            title: 'Posts',
            href: 'posts',
        }
    ], [])

    return (

        <div className="header  bg-gray-500 p-5 w-full md:w-1/6">
            <Burger />
            <nav className="nav fixed ">
                <ul className="nav__list flex flex-col gap-5">
                    {routes.map(route => (
                        <li key={route.id}>
                            <NavLink to={route.href} className='text-lg text-white hover:text-gray-800 transition-colors'>
                                {route.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}