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
import MyCollections from "../pages/MyCollections";
import MyCollectionEdit from "../pages/MyCollectionEdit";
import MyCollectionAdd from "../pages/MyCollectionAdd";
import MyCollectionMint from "../pages/MyCollectionMint";

const Navpage = ({ onBuy, web3, account, balance }) => {
    return (
        <React.Fragment>
            <section>
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/popular" element={<PopularNFT />} />
                    <Route path="/new" element={<NewNFT />} />
                    <Route path="/collection" element={<Collection />} />
                    <Route path="/auctions" element={<Auctions />} />
                    <Route path="/launchpad" element={<Launchpad />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/item/:id" element={<OpenPageNFT onBuy={onBuy}  account={account}  />} />
                    <Route path="/profile" element={<Profile web3={web3} account={account} balance={balance}/>} />
                    <Route path="/collection/:address" element={<OpenPageCollection />} />
                    <Route path="/copyrightPolice" element={<CopyrightPolice />} />
                    <Route path="/termsOfService" element={<TermsOfService />} />
                    <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
                    <Route path="/collections" element={<MyCollections  web3={web3} account={account} />} />
                    <Route path="/collections/edit/:address" element={<MyCollectionEdit ccount={account} />} />
                    <Route path="/collections/add" element={<MyCollectionAdd  web3={web3} account={account} />} />
                    <Route path="/collections/mint/:address" element={<MyCollectionMint  web3={web3} account={account} />} />
                </Routes>
            </section>
        </React.Fragment>
    )
}

export default Navpage;