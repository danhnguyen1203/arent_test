import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineNotifications } from 'react-icons/md';
import { FiFileText, FiMenu, FiX } from 'react-icons/fi';
import { GiTrophy } from 'react-icons/gi';
import useAuth from '../../../hooks/authentication/useAuth';

const DrawerMenu = ({ isOpen }) => {
    const menuItems = [
        { label: '自分の記録', href: '/' },
        { label: '体重グラフ', href: '/' },
        { label: '目標', href: '/' },
        { label: '選択中のコース', href: '/' },
        { label: 'コラム一覧', href: '/' },
        { label: '設定', href: '/' },
    ];

    if (!isOpen) return null;

    return (
        <div
            className={`absolute top-[48px] right-4 w-[280px] bg-[#777777] shadow-lg z-50`}
        >
            {menuItems.map((item) => (
                <Link
                    key={item.label}
                    to={item.href}
                    className="block px-6 py-5 text-white hover:bg-[#414141] hover:text-[#FF963C] transition-colors border-b border-[#414141]"
                >
                    {item.label}
                </Link>
            ))}
        </div>
    );
};

const NavLink = ({ href, icon: Icon, children }) => {
    const location = useLocation();
    const isActive = location.pathname === href;

    return (
        <Link
            to={href}
            className={`
            flex items-center space-x-1 
            hover:text-[#FF963C] transition-colors
            ${isActive ? 'text-[#FF963C]' : 'text-white'}
        `}
        >
            <Icon color="#FF963C" size={20} />
            <span>{children}</span>
        </Link>
    );
};

const Header = () => {
    const { logout, token } = useAuth();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <>
            <header className="bg-[#414141] text-white relative">
                <div className="max-w-6xl mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="text-[#FF963C] text-2xl font-bold">
                            <img
                                src="/images/logo.png"
                                alt="Logo"
                            />
                        </Link>
                        <nav className="flex items-center space-x-6">
                            {token ?
                                <>
                                    <NavLink href="/" icon={FiFileText}>自分の記録</NavLink>
                                    <NavLink href="/records" icon={GiTrophy}>チャレンジ</NavLink>
                                    <NavLink href="/column" icon={MdOutlineNotifications}>お知らせ</NavLink>
                                    <div className="relative">
                                        <button
                                            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                                            className="p-1 text-[#FF963C] transition-colors"
                                        >
                                            {isDrawerOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                                        </button>
                                        <DrawerMenu isOpen={isDrawerOpen} />
                                    </div>
                                    <button
                                        onClick={logout}
                                        className="text-white hover:text-[#FF963C]"
                                    >
                                        Logout
                                    </button>
                                </>
                                :
                                <Link to="/login" className="text-white hover:text-[#FF963C]">
                                    Login
                                </Link>
                            }
                        </nav>
                    </div>
                </div>
            </header>
            {isDrawerOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsDrawerOpen(false)}
                />
            )}
        </>
    );
};

export default Header;