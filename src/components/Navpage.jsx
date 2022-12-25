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
import Dashboard from "../pages/dashboard/Dashboard";

const Navpage = () => {
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
                    <Route path="/openPageNFT/:address/:id" element={<OpenPageNFT />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </section>
        </React.Fragment>
    )
}

export default Navpage;