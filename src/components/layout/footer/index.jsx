import React from 'react';

const footerLinks = [
    { text: '会員登録', href: '/register' },
    { text: '運営会社', href: '/company' },
    { text: '利用規約', href: '/terms' },
    { text: '個人情報の取扱について', href: '/privacy' },
    { text: '特定商取引法に基づく表記', href: '/legal' },
    { text: 'お問い合わせ', href: '/contact' }
];

const Footer = () => {
    return (
        <footer className="bg-[#414141] text-white mt-12 py-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-wrap gap-6">
                    {footerLinks.map(({ text, href }) => (
                        <a
                            key={text}
                            href={href}
                            className="hover:text-orange-400 transition-colors"
                        >
                            {text}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;