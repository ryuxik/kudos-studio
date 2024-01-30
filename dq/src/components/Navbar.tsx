import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { KudosMainRoutes } from './AppRouter';
import './Navbar.css';

let getTabClassNames = (isActive: boolean) => {
    let navClass = "nav-tab";
    if (isActive) navClass += " active-tab";
    return navClass;
}

const Navbar = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        let timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    });

    return (
        <div className="nav">
            <div className="nav-tab" id="name">
                Danqi Qian
            </div>
            <NavLink
                to={KudosMainRoutes.Home}
                className={({ isActive }) => {
                    return getTabClassNames(isActive);
                }}
                id="home-tab">
                Home
            </NavLink>
            <NavLink
                to={KudosMainRoutes.About}
                className={({ isActive }) => {
                    return getTabClassNames(isActive);
                }}
                id="about-tab">
                About
            </NavLink>
            <div className='nav-tab' id='time'>
                <p>NY  {date.toLocaleTimeString(
                    'en-US',
                    {
                        hour: '2-digit',
                        minute: '2-digit',
                        timeZone: 'EST'
                    })}</p>
            </div>
        </div>
    );
}

export default Navbar;