import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "../pages/Hero";
import PopularNFT from "../pages/PopularNFT";
import NewNFT from "../pages/NewNFT";
import Collection from "../pages/Collection"
import Auctions from "../pages/Auctions";
import Launchpad from "../pages/Launchpad";
import Support from "../pages/Support"
import OpenPageNFT from "./OpenPageNFT";
import Profile from "../pages/profile/Profile";
import OpenPageCollection from "./OpenPageCollection";
import CopyrightPolice from "../pages/CopyrightPolice";
import TermsOfService from "../pages/TermsOfService";
import PrivacyPolicy from "../pages/PrivacyPolicy";

const Navpage = ({ onBuy, web3, account, balance }) => {
    return (
        <React.Fragment>
            <section>
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/popularNFT" element={<PopularNFT />} />
                    <Route path="/newNFT" element={<NewNFT />} />
                    <Route path="/collection" element={<Collection />} />
                    <Route path="/auctions" element={<Auctions />} />
                    <Route path="/launchpad" element={<Launchpad />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/item/:address/:id" element={<OpenPageNFT onBuy={onBuy} />} />
                    <Route path="/profile" element={<Profile web3={web3} account={account} balance={balance}/>} />
                    <Route path="/collection/:address" element={<OpenPageCollection />} />
                    <Route path="/copyrightPolice" element={<CopyrightPolice />} />
                    <Route path="/termsOfService" element={<TermsOfService />} />
                    <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
                </Routes>
            </section>
        </React.Fragment>
    )
}

export default Navpage;