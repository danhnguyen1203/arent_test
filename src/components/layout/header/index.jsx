import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineNotifications } from 'react-icons/md';
import { FiFileText, FiMenu } from 'react-icons/fi';
import { GiTrophy } from 'react-icons/gi';

const NavLink = ({ to, icon: Icon, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`
        flex items-center space-x-1 
        hover:text-orange-400 transition-colors
        ${isActive ? 'text-orange-400' : 'text-white'}
      `}
        >
            <Icon color="#FF963C" size={20} />
            <span>{children}</span>
        </Link>
    );
};

const Header = () => {
    return (
        <header className="bg-[#414141] text-white">
            <div className="max-w-6xl mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <Link to="/" className="text-orange-400 text-2xl font-bold">
                        <img
                            src="/images/logo.png"
                            alt="Daily meals"
                        />
                    </Link>
                    <nav className="flex items-center space-x-6">
                        <NavLink to="/" icon={FiFileText}>自分の記録</NavLink>
                        <NavLink to="/records" icon={GiTrophy}>チャレンジ</NavLink>
                        <NavLink to="/column" icon={MdOutlineNotifications}>お知らせ</NavLink>
                        <button className="p-1 hover:text-orange-400 transition-colors">
                            <FiMenu color="#FF963C" size={24} />
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;