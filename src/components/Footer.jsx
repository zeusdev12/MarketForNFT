import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"
import LogoMini from "../assets/logomini.png";
import { ReactComponent as Social1 } from "../assets/social1.svg";
import { ReactComponent as Social2 } from "../assets/social2.svg";
import { ReactComponent as Social3 } from "../assets/social3.svg";
import { ReactComponent as Blur2 } from "../assets/blurs/blur2.svg"

const navigation = {
    market: [
        { name: 'Popular NFT', path: '/popular' },
        { name: 'New NFT', path: '/new' },
        { name: 'Auction', path: '/auctions' },
    ],
    features: [
        { name: 'Collection', path: '/collection' },
        { name: 'Launchpad', path: '/launchpad' },
    ],
    resources: [
        { name: 'Support', path: '/support' },
        { name: 'Copyright Police', path: '/copyrightPolice' },
        { name: 'Terms of Service', path: "/termsOfService" },
        { name: 'Privacy Policy', path: "/privacyPolicy" },
    ],
}

const Footer = () => {
    return (
        <section>
            <div className='bg-transparent relative w-full lg:h-[540px] overflow-hidden pt-[70px] lg:pt-[150px]'>
                <Blur2 className='absolute z-10 w-[1150px] h-[773px] md:w-[1150px] md:h-[573px]' />
                <Blur2 className='absolute z-10 w-[1150px] h-[773px] md:w-[1200px] md:h-[573px]' />
                <div className="mx-auto relative 3xl:absolute z-50 max-w-[1200px] 3xl:w-[1190px] ml-5 lg:ml-0">
                    <div className="xl:grid xl:grid-cols-4">
                        <div className="space-y-8 xl:col-span-1">
                            <Link to="/" className='hidden sm:block'>
                                <img
                                    src={Logo}
                                    alt="/"
                                />
                            </Link>
                            <Link to="/" className='block sm:hidden'>
                                <img
                                    src={LogoMini}
                                    alt="/"
                                />
                            </Link>
                        </div>
                        {/* Desktop menu */}
                        <div className="hidden mt-12 md:grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0 lg:ml-[50px]">
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
                                <div className="mt-12 md:mt-0 ml-2">
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
                            <div className="md:grid md:grid-cols-2 md:gap-8 ml-2">
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
                                <div className='ml-[18px]'>
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
                    <div className="mt-[60px] md:mt-[90px] pb-8 md:pb-[60px] -ml-5">
                        <p className="text-sm text-[#F9FAFA80] font-gilroy font-medium tracking-wider text-center">©2022 Crypto Market, Inc. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;