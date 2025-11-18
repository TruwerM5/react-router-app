import { NavLink } from "react-router";
import { useMemo } from "react";

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
        }
    ], [])

    return (
        <div className="header">
            <nav className="nav">
                <ul className="nav__list flex flex-col gap-5">
                    {routes.map(route => (
                        <li key={route.id}>
                            <NavLink to={route.href} className='text-lg hover:text-purple-500 transition-colors'>
                                {route.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}