import React from "react";
import { Routes, Route } from "react-router-dom";
import PopularNFT from "./PopularNFT";
import NewNFT from "./NewNFT";
import Collection from "./Collection"
import Insights from "./Insights";
import Auctions from "./Auctions";
import Launchpad from "./Launchpad";
import Support from "./Support"
import DashboardPage from "./dashboard/Dashboard";

const Navpage = () => {
    return (
        <React.Fragment>
            <section>
                <Routes>
                    <Route path="/" element={<PopularNFT />} />
                    <Route path="/newNFT" element={<NewNFT />} />
                    <Route path="/collection" element={<Collection />} />
                    <Route path="/insights" element={<Insights />} />
                    <Route path="/auctions" element={<Auctions />} />
                    <Route path="/launchpad" element={<Launchpad />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                </Routes>
            </section>
        </React.Fragment>
    )
}

export default Navpage;