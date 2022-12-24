import React from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Logomini } from "../assets/logomini.svg";
import { ReactComponent as Social1 } from "../assets/social1.svg";
import { ReactComponent as Social2 } from "../assets/social2.svg";
import { ReactComponent as Social3 } from "../assets/social3.svg";

const navigation = {
    market: [
        { name: 'Popular NFT', path: '/popularNFT' },
        { name: 'New NFT', path: '/newNFT' },
        { name: 'Auction', path: '/auction' },
    ],
    features: [
        { name: 'Insights', path: '/insights' },
        { name: 'Launchpad', path: '/launchpad' },
    ],
    resources: [
        { name: 'Support', path: '/support' },
        { name: 'Copyright Police', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Privacy Policy', href: '#' },
    ],
}

const Footer = () => {
    return (
        <section>
            <div className='bg-transparent w-full pt-[70px] lg:pt-40'>
                <div className="mx-auto max-w-[1200px] ml-5 lg:ml-0">
                    <div className="xl:grid xl:grid-cols-4">
                        <div className="space-y-8 xl:col-span-1">
                            <Link to="/" className='hidden sm:block'>
                                <Logo />
                            </Link>
                            <Link to="/" className='block sm:hidden'>
                                <Logomini />
                            </Link>
                        </div>
                        {/* Desktop menu */}
                        <div className="hidden mt-12 md:grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-[#F9FAFA80] uppercase font-gilroyMedium text-sm tracking-wider">market</h3>
                                    <ul className="mt-[30px] space-y-4">
                                        {navigation.market.map((item) => (
                                            <li key={item.name}>
                                                <Link to={item.path} className="text-lg font-gilroy text-white hover:text-[#beff55]">
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-12 md:mt-0">
                                    <h3 className="text-[#F9FAFA80] uppercase font-gilroyMedium text-sm tracking-wider">features</h3>
                                    <ul className="mt-[30px] space-y-4">
                                        {navigation.features.map((item) => (
                                            <li key={item.name}>
                                                <Link to={item.path} className="text-lg font-gilroy text-white hover:text-[#beff55]">
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-[#F9FAFA80] uppercase font-gilroyMedium text-sm tracking-wider">resources</h3>
                                    <ul className="mt-[30px] space-y-4">
                                        {navigation.resources.map((item) => (
                                            <li key={item.name}>
                                                <Link to={item.path} className="text-lg font-gilroy text-white hover:text-[#beff55]">
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-[#F9FAFA80] uppercase font-gilroyMedium text-sm tracking-wider">social links</h3>
                                    <div className='flex gap-3 mt-[30px]'>
                                        <Social1 className='cursor-pointer' />
                                        <Social2 className='cursor-pointer' />
                                        <Social3 className='cursor-pointer' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Mobile menu */}
                        <div className="md:hidden mt-12 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-[#F9FAFA80] uppercase font-gilroyMedium text-sm tracking-wider">market</h3>
                                    <ul className="mt-[30px] space-y-4">
                                        {navigation.market.map((item) => (
                                            <li key={item.name}>
                                                <Link to={item.path} className="text-lg font-gilroy text-white hover:text-[#beff55]">
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='mt-[40px]'>
                                    <h3 className="text-[#F9FAFA80] uppercase font-gilroyMedium text-sm tracking-wider">resources</h3>
                                    <ul className="mt-[30px] space-y-4">
                                        {navigation.resources.map((item) => (
                                            <li key={item.name}>
                                                <Link to={item.path} className="text-lg font-gilroy text-white hover:text-[#beff55]">
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div className="md:mt-0">
                                    <h3 className="text-[#F9FAFA80] uppercase font-gilroyMedium text-sm tracking-wider">features</h3>
                                    <ul className="mt-[30px] space-y-4">
                                        {navigation.features.map((item) => (
                                            <li key={item.name}>
                                                <Link to={item.path} className="text-lg font-gilroy text-white hover:text-[#beff55]">
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='mt-[84px]'>
                                    <h3 className="text-[#F9FAFA80] uppercase font-gilroyMedium text-sm tracking-wider">social links</h3>
                                    <div className='flex gap-3 mt-[30px]'>
                                        <Social1 className='cursor-pointer' />
                                        <Social2 className='cursor-pointer' />
                                        <Social3 className='cursor-pointer' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[60px] md:mt-[90px] pb-8 md:pb-16 -ml-5">
                        <p className="text-sm text-[#F9FAFA80] font-gilroy font-medium tracking-wider text-center">©2022 Crypto Market, Inc. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;