import React from 'react'
import { Link } from 'react-router-dom'
import Footer from "../components/Footer"
import { ReactComponent as Blur } from "../assets/blurs/blur.svg"

const TermsOfService = () => {
    return (
        <div className='min-h-screen overflow-hidden bg-[#0c0c0c] background'>
            <Blur className='absolute top-0 mt-[70px] lg:mt-0 right-0 z-10 w-[400px] h-[350px] md:w-[400px] 2xl:w-[973px] lg:h-[673px]' />
            <Blur className='absolute top-0 mt-[70px] lg:mt-0 right-0 z-10 w-[350px] h-[240px] md:w-[400px] 2xl:w-[1573px] lg:h-[673px]' />
            <div className='mt-[120px] md:mt-[200px] flex flex-col lg:ml-[40px] 3xl:ml-[120px] lg:max-w-[1180px]'>
                <div className='text-left px-5 lg:px-0 lg:pr-5 2xl:pr-0'>
                    <p className='text-[#828383] font-gilroy text-[14px] uppercase'>LAST UPDATED: NOVEMBER 28, 2022</p>
                    <p className='mt-[30px] text-white text-[40px] lg:text-[62px] font-gilroy font-semibold leading-[40px] md:leading-[65px]'>Terms of Service</p>
                    <div className='text-white font-gilroy text-[18px] flex flex-col mt-[30px] gap-[15px]'>
                        <p>Please read these Terms of Service (the “Terms”) and our Privacy Policy <span className='text-[#beff55]'>(<Link to="/privacyPolicy" className='underline'>https://switchmint.io/privacy-policy</Link>)</span> (“Privacy Policy”) carefully because they govern your use of the website and interface located at <span className='text-[#beff55]'><Link to="/" className='underline'>https://switchmint.io/</Link></span> (the “Site” or the “Crypto Market Platform”) and corresponding mobile application (“App”) offered by Crypto Labs Inc. (“Crypto Labs,” “we,” “our”), which facilitates interaction with certain decentralized cryptographic protocols, which we do not own or control, (“Protocols”) to effectuate the creation and deployment (aka “minting”) of non-fungible tokens (“NFTs”) and support sale and distribution of such NFTs on the decentralized blockchains on which the NFTs are recorded (“Blockchain”). To make these Terms easier to read, the Site, our services and App are collectively called the “Services”. </p>
                        <p>IMPORTANT NOTICE REGARDING ARBITRATION: WHEN YOU AGREE TO THESE TERMS YOU ARE AGREEING (WITH LIMITED EXCEPTION) TO RESOLVE ANY DISPUTE BETWEEN YOU AND Crypto Labs THROUGH BINDING, INDIVIDUAL ARBITRATION RATHER THAN IN COURT. PLEASE REVIEW CAREFULLY SECTION 18 “DISPUTE RESOLUTION” BELOW FOR DETAILS REGARDING ARBITRATION. HOWEVER, IF YOU ARE A RESIDENT OF A JURISDICTION WHERE APPLICABLE LAW PROHIBITS ARBITRATION OF DISPUTES, THE AGREEMENT TO ARBITRATE IN SECTION 18 WILL NOT APPLY TO YOU BUT THE PROVISIONS OF SECTION 17 (GOVERNING LAW) WILL APPLY INSTEAD.</p>
                    </div>
                    <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                        1. Agreement to Terms
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        By using our Services, you agree to be bound by these Terms. If you don’t agree to be bound by these Terms, you are not authorized to use the Services.
                    </p>
                    <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                        2. Privacy Policy
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        Please review our Privacy Policy, which also governs your use of the Services, for information on how we collect, use and share your information.
                    </p>
                    <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                        3. Changes to these Terms or the Services
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        We may update the Terms from time to time at our sole discretion. If we do, we’ll let you know by posting the updated Terms on the Site, to the App and/or may also send other communications. It’s important that you review the Terms whenever we update them or you use the Services. If you continue to use the Services after we have posted updated Terms, it means that you accept and agree to the changes. If you don’t agree to be bound by the changes, you may not use the Services anymore. Because our Services are evolving over time, we may change or discontinue all or any part of the Services, at any time and without notice, at our sole discretion.
                    </p>
                    <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                        4. Who May Use the Services?
                    </p>
                    <ul className='mt-[30px] text-white font-gilroy flex flex-col text-[18px] gap-[15px] list-decimal pl-5'>
                        <li>Eligibility. YOU MAY USE THE SERVICES ONLY IF YOU ARE 18 YEARS OR OLDER AND CAPABLE OF FORMING A BINDING CONTRACT WITH Crypto Labs, AND NOT OTHERWISE BARRED FROM USING THE SERVICES UNDER APPLICABLE LAW. As required by the Children’s Online Privacy Protection Act (“COPPA”), we will not knowingly solicit or collect personal information from any user under the age of 13. Do not attempt to use our Services if you are under the age of 13. If we become aware that a user is under the age of 13, we will promptly delete all personal information of the user. If you have information that suggests that a user of our Service could be under the age of 13, please send an email to tos@cryptomarket.io.</li>
                        <li>Compliance. The Services are only available to users in certain jurisdictions who can use the Services as permitted under applicable law. You certify that you will comply with all applicable laws (e.g., local, state, federal and other laws) when using the Services. Without limiting the foregoing, by using the Services, you represent and warrant that: (a) you are not located in a country that is subject to a U.S. Government embargo; and (b) you are not listed on any U.S. Government list of prohibited, sanctioned, or restricted parties. If you access or use the Services outside the United States, you are solely responsible for ensuring that your access and use of the Services in such country, territory or jurisdiction does not violate any applicable laws. You must not use any software or networking techniques, including use of a Virtual Private Network (VPN) to modify your internet protocol address or otherwise circumvent or attempt to circumvent this prohibition. We reserve the right, but have no obligation, to monitor where our Services are accessed from. Furthermore, we reserve the right, at any time, in our sole discretion, to block access to the Services, in whole or in part, from any geographic location, IP addresses and unique device identifiers or to any user who we believe is in breach of these Terms.</li>
                        <li>Unauthorized Access. You may not access or utilize the Site and/or Services for the purpose of web crawling, web harvesting, data mining, data extraction, scraping or aggregating information, including without limitation listings and smart contracts available on or through the Site and/or Services, or similar activities without our prior written consent in our sole discretion. Users who wish to engage in any of the foregoing activities must contact us at tos@cryptomarket.io to obtain our prior approval and an application programming interface (the “API”) to legally access our servers. We will evaluate requests as they are received and use reasonable business efforts to respond within fourteen (14) days. Upon approval we will issue the API. Failure to respond constitutes disapproval. We reserve the right to implement testing and maintenance of the API at our sole discretion. Engaging in any of the activities referenced in the first sentence of this paragraph without prior authorization is a prohibited material breach of these Terms and may subject violators to legal liability</li>
                    </ul>
                    <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                        5. About the Services
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        1. The Crypto Market Platform. Our Services facilitate interactions with the Protocols and Blockchains to allow individuals to bid on, purchase, trade, and sell NFTs. Crypto Labs provides the Crypto Market Platform, which is an interface to interact with the Protocols and Blockchains. Crypto Labs does not provide the Protocol. Our Services also allows users to create and deploy NFTs.
                    </p>
                    <ul className='mt-[30px] text-white font-gilroy flex flex-col text-[18px] gap-[15px] list-disc pl-7'>
                        <li>You may participate in the Services by linking your digital wallet(s) on supported bridge extensions, which allows you to purchase, store, and engage in transactions using Solana cryptocurrency. Before putting up your unique digital asset for sale or putting in an offer to purchase a unique digital asset from another user, we will ask you to download a supported electronic wallet extension and connect and unlock your digital wallets with that extension. Once you submit an order to sell or purchase a unique digital asset, your order is passed on to the applicable extension, which completes the transaction on your behalf.</li>
                        <li>Crypto Market PLATFORM IS NOT A BROKER, FINANCIAL INSTITUTION, OR CREDITOR. THE SERVICES ARE AN ADMINISTRATIVE PLATFORM ONLY. Crypto Labs FACILITATES TRANSACTIONS BETWEEN THE PURCHASER AND SELLER ON THE Crypto Market PLATFORM BUT IS NOT A PARTY TO ANY AGREEMENT BETWEEN THE PURCHASER AND SELLER OF NFTs OR BETWEEN ANY USERS.</li>
                        <li>YOU BEAR FULL RESPONSIBILITY FOR VERIFYING THE IDENTITY, LEGITIMACY, AND AUTHENTICITY OF ASSETS YOU PURCHASE THROUGH THE Crypto Market PLATFORM. NOTWITHSTANDING INDICATORS AND MESSAGES THAT SUGGEST VERIFICATION, Crypto Labs MAKES NO CLAIMS ABOUT THE IDENTITY, LEGITIMACY, OR AUTHENTICITY OF ASSETS ON THE PLATFORM.</li>
                    </ul>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        2. Transactions Are Conducted on the Blockchain. While Crypto Labs offers a platform for NFTs, it does not buy, sell or take custody or possession of any NFTs, nor does it act as an agent or custodian for any user of the Services. Instead, each NFT that is listed for sale will be deposited into a blockchain-based smart contract deployed by Crypto Labs to ensure that the purported seller owns such NFT. Each such NFT is released automatically upon consummation of its sale through the relevant Blockchain network If you elect to mint, buy, or sell any NFTs, any transactions that you engage in will be conducted solely through the relevant Blockchain network governing such NFT. You will be required to make or receive payments exclusively through the cryptocurrency wallet you have connected to the Crypto Market Platform. We will have no insight into or control over these payments or transactions, nor do we have the ability to reverse any transactions. Accordingly, we will have no liability to you or to any third party for any claims or damages that may arise as a result of any transactions that you engage in via the Service. There may be royalties associated with the secondary sale of any NFT. You acknowledge and agree that the payment of any such royalty shall, in certain circumstances, be programmed to be self-executing via a blockchain network’s nonfungible token standard and Crypto Labs does not have any control or ability to direct such funds or the obligation to collect such fees.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        3. Promotions Programs. Your participation in certain programs (e.g., promotions, sweepstakes, giveaways, contests, etc.) made available through the Crypto Market Platform will be subject to additional terms and conditions specific to such programs as set forth by the sponsor of each promotion.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        4. Terms Applicable to Purchasers and Sellers. If you are using the Services to purchase NFTs, you are a “Purchaser,” and if you are using the Services to sell NFTs, you are a “Seller.” If you are either a Purchaser or Seller, you agree to the following additional terms:
                    </p>
                    <ul className='mt-[30px] text-white font-gilroy flex flex-col text-[18px] gap-[15px] list-disc pl-7'>
                        <li>Purchase Terms. Although the terms of sale for an NFT are displayed on the Crypto Market Platform, all such terms are determined by the Purchasers and Sellers and the sale and purchase of NFTs are subject to such (e.g., with respect to the use of the NFT Content, as defined below in Section 5(e)(ii), or benefits associated with a given NFT) (“Purchase Terms”), including, but not limited to, the price to be paid for such NFT. Crypto Labs is not a party to any such Purchase Terms, which are solely between the Purchaser and the Seller and is not responsible for ensuring compliance with such terms or mediating or resolving any disputes with respect to such Purchase Terms, including, but not limited to, any disputes arising out of or related to the authenticity of the NFT or any intellectual property rights associated with such NFT. The Purchaser and Seller are entirely responsible for communicating, promulgating, agreeing to, and enforcing Purchase Terms, and for resolving any disputes arising from any breach of any Purchase Terms. Seller must comply with and fulfill the Purchase Terms with respect to any NFTs that it sells. When you purchase an NFT through the Services, you own all personal property rights to the electronic record that comprises the NFT (i.e., the right to sell or otherwise dispose of that NFT). Unless expressly specified in the Purchase Terms, such rights, however, do not include the ownership of the intellectual property rights in any NFT Content. Rather, unless specified otherwise in the purchase terms, you have a license to use the NFT Content solely for the following purposes: (1) for Purchaser’s own personal, non-commercial use; (2) attempts to sell or otherwise dispose of the NFT consistent with the ownership of it; and (3) as part of a third party offering compatible with the purchased NFT in the normal course of the permitted end-use of such offering.</li>
                        <li>Costs and Fees. Transactions on the Crypto Market Platform may be subject to fees that Crypto Labs collects to support the NFT creators and Crypto Market Platform, as posted on the Site or otherwise set forth in these Terms. “Revenue” means the gross amount paid by the Purchaser of a sale of your NFT on the Crypto Market Platform. You further agree to pay all other applicable fees, including Gas Fees and hosting fees, and you authorize Crypto Labs to automatically charge you for any such fees or deduct such fees (including the Transaction Fee) directly from your amounts paid by the Purchaser. The payments made to Creators do not include any Taxes (as defined below), and Crypto Labs shall have no responsibility for payment of such Taxes regardless of the taxing authority. Each party shall be responsible for all Taxes imposed on its income or property. Purchasers will be responsible for paying all such fees. In addition, interactions with the Blockchain may also result in transaction fees or Gas Fees (as defined below) imposed by the Blockchain, which are also solely your responsibility. “Gas fees” mean the fees that fund the network of computers that run the decentralized blockchain network, meaning that you will need to pay a Gas Fee for each transaction that occurs via the blockchain network.</li>
                        <li>Revenue Share and Fees. If you are a Seller, will receive Revenue less the Transaction Fee for each initial sale of your NFT on the Crypto Market Platform. “Transaction Fee” means the percentage of the Revenue generated from the initial sale of your NFT sale of an NFT that is listed on the listing interface, as agreed by You, when determining to list your NFT for sale. The Transaction Fee may be, but is not required to be, the sale percentage for all sales of NFT and may be changed from time to time prior to being agreed to on the listing interface with respect to.</li>
                    </ul>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        5. Terms Applicable to Creators. If you are using the Services to create and deploy, you are a “Creator” and agree to the following additional terms:
                    </p>
                    <ul className='mt-[30px] text-white font-gilroy flex flex-col text-[18px] gap-[15px] list-disc pl-7'>
                        <li>Royalties. If you are a Creator, in each sale by other Sellers following your initial sale of your NFT, you may receive the percentage of Revenue with respect to each such sale set forth in the applicable field of the NFT at the time of creation (“Artist Royalty Fee”).</li>
                        <li>NFT Content. As between Crypto Labs and you, you shall continue to exclusively own all right, title and interest in and to the digital art embodied in the NFTs and any name, likeness, image, signature, voice and other identifiable characteristics included in the digital art embodied in the NFTs, creative assets you provide to Crypto Labs, and your name, logos and trademarks, and all intellectual property rights in the foregoing (collectively, the “NFT Content”). Notwithstanding the foregoing, you grant to Crypto Labs a perpetual, irrevocable, worldwide, non-exclusive, royalty-free, fully paid-up, license, with the right to sublicense through multiple tiers, to use NFT Content for the purpose of performing Crypto Labs’ obligations under these Terms, including hosting the NFT Content and listing, marketing and facilitating the sale of the NFTs, and marketing or promoting the Services.</li>
                        <li>Creator Obligations and Perks. You shall obtain all rights to the NFT Content in connection with the use thereof by Crypto Labs as contemplated in these Terms, and the awarding and administration of the benefits that you sell or list in connection with the sale of your NFT, as applicable, including, but not limited to: (i) clearing and obtaining any rights in connection with the NFT Content, including any music performance rights and payment of royalties to any performing rights organizations; (ii) acquiring any services or materials needed in connection with the NFTs and benefits offered to Purchasers; and (iii) the costs and compliance for the benefits, including as specified in the Purchase Terms.</li>
                        <li>Promotions Tool. Our Services may enable you to administer a promotion (e.g., a contest or sweepstakes) (a “Promotion”) through the use of a promotions tool (the “Promotions Tool”). By using the Promotions Tool, you (a) agree to fully release Crypto Labs from any liability in connection with the promotion, and (b) acknowledge and agree that a Promotion is not in any way sponsored, endorsed, or administered by Crypto Labs.</li>
                        <li>Warranties. You represent and warrant that (i) you have the full right, power and authority to grant the rights granted or agreed to be granted hereunder, including, but not limited to, fully cleared permissions, consents, rights and licenses to the NFT Content in these Terms; (ii) the NFT Content, the NFTs, and the listing and sale contemplated by these Terms, complies with all, and do not and will not violate any applicable law, statute, rule, or regulation, will perform in accordance with the intended specifications and without material error, and will be delivered free and clear of any claims, liens or rights of third parties; (iii) the NFT Content and Crypto Labs’ use thereof in accordance with these Terms does not and will not infringe any intellectual property rights of any third party or any right of privacy or publicity, or contain any libelous, defamatory, obscene or unlawful material, or otherwise violate or infringe any other right of any third party; (iv) you will fulfill your obligations under any terms with a Purchaser of the NFTs, as applicable; (v) any advertising or promotion of the NFTs by you or on your behalf will not constitute false, deceptive or unfair advertising or disparagement under any applicable laws and will not suggest a likely increase in value of the NFTs; and (vi) you will not use the proceeds retained from sales of the NFT, whether through the Crypto Market Platform or any other platform for capital raising purposes.</li>
                    </ul>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        6. Taxes. You are solely responsible for all costs incurred by you in using the Services and determining, collecting, reporting and paying all applicable Taxes. As used herein, “Taxes” means the taxes, duties, levies, tariffs, and other governmental charges that you may be required by law to collect and remit to governmental agencies, and other similar municipal, state, federal and national indirect or other withholding and personal or corporate income taxes. You are solely responsible for maintaining all relevant Tax records and complying with any reporting requirements you may have as related to our Services. You are further solely responsible for independently maintaining the accuracy of any record submitted to any tax authority including any information derived from the Services. We reserve the right to report any activity occurring using the Services to relevant tax authorities as required under applicable law.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        7. Suspension or Termination. We may suspend or terminate your access to the Services at any time in connection with any transaction as required by applicable law, any governmental authority, or if we in our sole and reasonable discretion determine you are violating these Terms or the terms of any third-party service provider. Such suspension or termination shall not be constituted a breach of these Terms by Crypto Labs. In accordance with its anti-money laundering, anti-terrorism, anti-fraud, and other compliance policies and practices, we may impose reasonable limitations and controls on the ability of you or any beneficiary to utilize the Services. Such limitations may include where good cause exists, rejecting transaction requests, freezing funds, or otherwise restricting you from using the Services.
                    </p>
                    <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                        6. Feedback
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        We appreciate feedback, comments, ideas, proposals and suggestions for improvements to the Services (“Feedback”). If you choose to submit Feedback, you agree that we are free to use it without any restriction or compensation to you
                    </p>
                    <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                        7. Your Content
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        1. Posting Content. Our Services may allow you to store or share content such as text (in posts or communications with others), files, documents, graphics, images, music, software, audio and video. Anything (other than Feedback) that you post or otherwise make available through the Services is referred to as “User Content”. User Content may include the NFT Content. Crypto Labs does not claim any ownership rights in any User Content and nothing in these Terms will be deemed to restrict any rights that you may have to your User Content.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        2. Permissions to Your User Content. By making any User Content available through the Services, you hereby grant to Crypto Labs a non-exclusive, transferable, worldwide, royalty-free license, with the right to sublicense, to use, copy, modify, create derivative works based upon, distribute, publicly display, and publicly perform your User Content in connection with operating and providing the Services.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        3. Your Responsibility for User Content. You are solely responsible for all your User Content. You represent and warrant that you have (and will have) all rights that are necessary to grant us the license rights in your User Content under these Terms. You represent and warrant that neither your User Content, nor your use and provision of your User Content to be made available through the Services, nor any use of your User Content by Crypto Labs on or through the Services will infringe, misappropriate or violate a third party’s intellectual property rights, or rights of publicity or privacy, or result in the violation of any applicable law or regulation.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        4. Removal of User Content. You can remove certain of your User Content by specifically deleting it. You should know that in certain instances, some of your User Content (such as posts or comments you make, or your NFT Content) may not be completely removed and copies of your User Content may continue to exist on the Services or NFT. To the maximum extent permitted by law, we are not responsible or liable for the removal or deletion of (or the failure to remove or delete) any of your User Content.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        5. Crypto Labs’ Intellectual Property. We may make available through the Services content that is subject to intellectual property rights. We retain all rights to that content.
                    </p>
                    <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                        8. Rights and Terms for Apps
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        1. App License. If you comply with these Terms, Crypto Labs grants to you a limited non-exclusive, nontransferable license, with no right to sublicense, to download and install the App on your personal computers, mobile handsets, tablets, wearable devices, and/or other devices and to run the App solely for your own personal non-commercial purposes. Except as expressly permitted in these Terms, you may not: (i) copy, modify or create derivative works based on the App; (ii) distribute, transfer, sublicense, lease, lend or rent the App to any third party; (iii) reverse engineer, decompile or disassemble the App (unless applicable law permits, despite this limitation); or (iv) make the functionality of the App available to multiple users through any means.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        2. Additional Information: Apple App Store. This Section 8(b) applies to any App that you acquire from the Apple App Store or use on an iOS device. Apple has no obligation to furnish any maintenance and support services with respect to the App. In the event of any failure of the App to conform to any applicable warranty, you may notify Apple, and Apple will refund the App purchase price to you (if applicable) and, to the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to the App. Apple is not responsible for addressing any claims by you or any third party relating to the App or your possession and use of it, including, but not limited to: (i) product liability claims; (ii) any claim that the App fails to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection or similar legislation. Apple is not responsible for the investigation, defense, settlement and discharge of any third-party claim that your possession and use of the App infringe that third party’s intellectual property rights. Apple and its subsidiaries are third-party beneficiaries of these Terms, and upon your acceptance of the Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as a third-party beneficiary thereof. You represent and warrant that (i) you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a terroristsupporting country; and (ii) you are not listed on any U.S. Government list of prohibited or restricted parties. You must also comply with any applicable third-party terms of service when using the App.
                    </p>
                    <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                        9. Acceptable Use Policy and Crypto Labs’ Enforcement Rights
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        You agree not to do any of the following:
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        1. Post, upload, publish, submit or transmit any User Content that: (i) infringes, misappropriates or violates a third party’s patent, copyright, trademark, trade secret, moral rights or other intellectual property rights, or rights of publicity or privacy; (ii) violates, or encourages any conduct that would violate, any applicable law or regulation or would give rise to civil liability; (iii) is fraudulent, false, misleading or deceptive; (iv) is defamatory, obscene, pornographic, vulgar or offensive; (v) promotes discrimination, bigotry, racism, hatred, harassment or harm against any individual or group; (vi) is violent or threatening or promotes violence or actions that are threatening to any person or entity; or (vii) promotes illegal or harmful activities or substances;
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        2. Use, display, mirror or frame the Services or any individual element within the Services, Crypto Labs’ name, any Crypto Labs trademark, logo or other proprietary information, or the layout and design of any page or form contained on a page, without Crypto Labs’ express written consent;
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        3. Access, tamper with, or use non-public areas of the Services, Crypto Labs’ computer systems, or the technical delivery systems of Crypto Labs’ providers;
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        4. Attempt to probe, scan or test the vulnerability of any Crypto Labs system or network or breach any security or authentication measures;
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        5. Avoid, bypass, remove, deactivate, impair, descramble or otherwise circumvent any technological measure implemented by Crypto Labs or any of Crypto Labs’ providers or any other third party (including another user) to protect the Services;
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        6. Attempt to access or search the Services or download content from the Services using any engine, software, tool, agent, device or mechanism (including spiders, robots, crawlers, data mining tools or the like) other than the software and/or search agents provided by Crypto Labs or other generally available third-party web browsers;
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        7. Send any unsolicited or unauthorized advertising, promotional materials, email, junk mail, spam, chain letters or other form of solicitation;
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        8. Use the Services, or any portion thereof, for any commercial purpose or for the benefit of any third party or in any manner not permitted by these Terms;
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        9. Forge any TCP/IP packet header or any part of the header information in any email or newsgroup posting, or in any way use the Services to send altered, deceptive or false source-identifying information;
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        10. Attempt to decipher, decompile, disassemble or reverse engineer any of the software used to provide the Services;
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        11. Interfere with, or attempt to interfere with, the access of any user, host or network, including, without limitation, sending a virus, overloading, flooding, spamming, or mail-bombing the Services;
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        12. Collect or store any personally identifiable information from the Services from other users of the Services without their express permission;
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        13. Impersonate or misrepresent your affiliation with any person or entity;
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        14. Create or list counterfeit items (including any NFTs);
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        15. Engage or assist in any activity that violates any law, statute, ordinance, regulation, or sanctions program, including but not limited to the U.S. Department of Treasury’s Office of Foreign Assets Control (“OFAC”), or that involves proceeds of any unlawful activity (including but not limited to money laundering, terrorist financing or deliberately engaging in activities designed to adversely affect the performance of the Services);
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        16. Engage in wash trading, front running, pump and dump trading, ramping, cornering, or other deceptive or manipulative trading activities, including but not limited to: (i) trading an NFT at successively lower or higher prices for the purpose of creating or inducing a false, misleading or artificial appearance of activity in such NFT; (ii) unduly or improperly influencing the market price for such NFT or establishing a price which does not reflect the true state of the market in such NFT; (iii) executing or causing the execution of any transaction in an NFT which involves no material change in the beneficial ownership thereof; and (iv) participating in, facilitating, assisting or knowingly transacting with any pool, syndicate or joint account organized for the purpose of unfairly or deceptively influencing the market price of an NFT;
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        17. Use the Services to participate in fundraising for a business, protocol, or platform, including but not limited to creating, listing, or buying assets that are redeemable for financial instruments, assets that give owners the rights to participate in an ICO or any securities offering, or assets that entitle owners to financial rewards, including but not limited to, DeFi (or decentralized finance) yield bonuses, staking bonuses, and burn discounts;
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        18. Fabricate in any way any transaction or process related thereto;
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        19. Place misleading bids or offers;
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        20. Disguise or interfere in any way with the IP address of the computer you are using to access or use the Services or that otherwise prevents us from correctly identifying the IP address of the computer you are using to access the Services;
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        21. Transmit, exchange, or otherwise support the direct or indirect proceeds of criminal or fraudulent activity;
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        22. Violate any applicable law or regulation; or
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        23. Encourage or enable any other individual to do any of the foregoing.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        Crypto Labs is not obligated to monitor access to or use of the Services or to review or edit any content. However, we have the right to do so for the purpose of operating the Services, to ensure compliance with these Terms and to comply with applicable law or other legal requirements. We reserve the right, but are not obligated, to remove or disable access to any content, including User Content, at any time and without notice, including, but not limited to, if we, at our sole discretion, consider it objectionable or in violation of these Terms. We have the right to investigate violations of these Terms or conduct that affects the Services. We may also consult and cooperate with law enforcement authorities to prosecute users who violate the law. The sale of stolen assets, assets taken without authorization, and otherwise illegally obtained assets on the Service is prohibited. If you have reason to believe that an asset listed on the Service was illegally obtained, please contact us immediately. Listing illegally obtained assets may result in your listings being canceled, your assets being hidden, or you being suspended from the Services.
                    </p>
                    <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                        10. Copyright Policy
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        Crypto Labs respects copyright law and expects its users to do the same. It is Crypto Labs’ policy to terminate in appropriate circumstances users who repeatedly infringe or are believed to be repeatedly infringing the rights of copyright holders. Please see Crypto Labs’ Copyright Policy at https://switchmint.com/privacy-policy.pdf, for further information.
                    </p>
                    <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                        11. Links to Third Party Websites or Resources
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        The Services (including the App) may allow you to access third-party websites or other resources. We provide access only as a convenience and are not responsible for the content, products or services on or available from those resources or links displayed on such websites. You acknowledge sole responsibility for and assume all risk arising from your use of any third-party resources.
                    </p>
                    <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                        12. Termination
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        Notwithstanding anything contained in these Terms, we may suspend, modify or terminate your access to and use of the Services and the language of these Terms at our sole discretion, at any time and without notice to you. You may disconnect your digital wallet at any time. You acknowledge and agree that we shall have no liability or obligation to you in such an event and that you will not be entitled to a refund of any amounts that you have already paid to us or any third party, to the fullest extent permitted by applicable law. Upon any termination, discontinuation or cancellation of the Services, the following Sections will survive: 5(d)(ii) and 5(e)(i) (only for payments due and owing to Crypto Labs prior to the termination), 7(b), 7(c), 7(e), 9, 12, 13, 15, 16, 17, 18 and 19.
                    </p>
                    <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                        13. Warranty Disclaimers
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        THE SERVICES, INCLUDING THE PROMOTIONS TOOL, ANY CONTENT CONTAINED THEREIN, AND ANY NFTS (INCLUDING ASSOCIATED NFT CONTENT) LISTED THEREIN ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED. Crypto Labs (AND ITS SUPPLIERS) MAKE NO WARRANTY THAT THE SERVICES: (I) WILL MEET YOUR REQUIREMENTS; (II) WILL BE AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE BASIS; OR (III) WILL BE ACCURATE, RELIABLE, COMPLETE, LEGAL, OR SAFE. Crypto Labs DISCLAIMS ALL OTHER WARRANTIES OR CONDITIONS, EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, INCLUDING ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT OR NON-INFRINGEMENT, TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, AS TO THE SERVICES, ANY CONTENT CONTAINED THEREIN AND ANY NFTS LISTED THEREIN.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        WE FURTHER EXPRESSLY DISCLAIM ALL LIABILITY OR RESPONSIBILITY IN CONNECTION WITH THIRD PARTY SERVICES. NOTHING HEREIN NOR ANY USE OF OUR SERVICES IN CONNECTION WITH THIRD PARTY SERVICES CONSTITUTES OUR ENDORSEMENT, RECOMMENDATION OR ANY OTHER AFFILIATION OF OR WITH ANY THIRD PARTY SERVICES.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        Crypto Labs DOES NOT REPRESENT OR WARRANT THAT ANY CONTENT ON THE SERVICES IS ACCURATE, COMPLETE, RELIABLE, CURRENT OR ERROR-FREE. WE WILL NOT BE LIABLE FOR ANY LOSS OF ANY KIND FROM ANY ACTION TAKEN OR TAKEN IN RELIANCE ON MATERIAL OR INFORMATION, CONTAINED ON THE SERVICES. WHILE Crypto Labs ATTEMPTS TO MAKE YOUR ACCESS TO AND USE OF THE SERVICES AND ANY CONTENT THEREIN SAFE, Crypto Labs CANNOT AND DOES NOT REPRESENT OR WARRANT THAT THE SERVICES, ANY CONTENT THEREIN, ANY NFTS LISTED THEREIN, OR OUR SERVERS ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. WE CANNOT GUARANTEE THE SECURITY OF ANY DATA THAT YOU DISCLOSE ONLINE. YOU ACCEPT THE INHERENT SECURITY RISKS OF PROVIDING INFORMATION AND DEALING ONLINE OVER THE INTERNET AND WILL NOT HOLD US RESPONSIBLE FOR ANY BREACH OF SECURITY.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        Crypto Labs WILL NOT BE RESPONSIBLE OR LIABLE TO YOU FOR ANY LOSS AND TAKES NO RESPONSIBILITY FOR, AND WILL NOT BE LIABLE TO YOU FOR, ANY USE OF THE SERVICES, INCLUDING BUT NOT LIMITED TO ANY LOSSES, DAMAGES OR CLAIMS ARISING FROM: (I) USER ERROR SUCH AS FORGOTTEN PASSWORDS, INCORRECTLY CONSTRUCTED TRANSACTIONS, OR MISTYPED WALLET ADDRESSES; (II) SERVER FAILURE OR DATA LOSS; (III) BLOCKCHAIN NETWORKS, CRYPTOCURRENCY WALLETS OR CORRUPT FILES; (IV) UNAUTHORIZED ACCESS TO SERVICES; OR (V) ANY THIRD PARTY ACTIVITIES, INCLUDING WITHOUT LIMITATION THE USE OF VIRUSES, PHISHING, BRUTEFORCING OR OTHER MEANS OF ATTACK.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        NFTS ARE INTANGIBLE DIGITAL ASSETS. THEY EXIST ONLY BY VIRTUE OF THE OWNERSHIP RECORD MAINTAINED IN THE APPLICABLE BLOCKCHAIN NETWORK. ANY TRANSFER OF TITLE THAT MIGHT OCCUR IN ANY UNIQUE DIGITAL ASSET OCCURS ON THE DECENTRALIZED LEDGER WITHIN SUCH BLOCKCHAIN NETWORK. WE DO NOT GUARANTEE THAT WE CAN EFFECT THE TRANSFER OF TITLE OR RIGHT IN ANY NFTS OR OTHER DIGITAL ASSETS, OR THAT ANY ASSOCIATED PAYMENT WILL BE SUCCESSFUL.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        YOU BEAR FULL RESPONSIBILITY FOR VERIFYING THE IDENTITY, LEGITIMACY, AND AUTHENTICITY OF ASSETS YOU PURCHASE THROUGH THE SERVICES. NOTWITHSTANDING INDICATORS AND MESSAGES THAT SUGGEST VERIFICATION, Crypto Labs MAKES NO CLAIMS ABOUT THE IDENTITY, LEGITIMACY, OR AUTHENTICITY OF ASSETS ON THE SERVICES
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        THE SERVICES MAY NOT BE AVAILABLE DUE TO ANY NUMBER OF FACTORS INCLUDING, BUT NOT LIMITED TO, PERIODIC SYSTEM MAINTENANCE, SCHEDULED OR UNSCHEDULED, ACTS OF GOD, UNAUTHORIZED ACCESS, VIRUSES, DENIAL OF SERVICE OR OTHER ATTACKS, TECHNICAL FAILURE OF THE SERVICES AND/OR TELECOMMUNICATIONS INFRASTRUCTURE OR DISRUPTION, AND THEREFORE WE EXPRESSLY DISCLAIM ANY EXPRESS OR IMPLIED WARRANTY REGARDING THE USE AND/OR AVAILABILITY, ACCESSIBILITY, SECURITY OR PERFORMANCE OF THE SERVICES CAUSED BY SUCH FACTORS. WE DO NOT MAKE ANY REPRESENTATIONS OR WARRANTIES AGAINST THE POSSIBILITY OF DELETION, MISDELIVERY OR FAILURE TO STORE COMMUNICATIONS, PERSONALIZED SETTINGS OR OTHER DATA.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES. ACCORDINGLY, SOME OF THE ABOVE DISCLAIMERS OF WARRANTIES MAY NOT APPLY TO YOU.
                    </p>
                    <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                        14. Assumption of Risk.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        You accept and acknowledge:
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        1. The prices and liquidity of cryptocurrency assets (including any NFTs) are extremely volatile. Fluctuations in the price of other digital assets could materially and adversely affect the NFTs made available through the Services, which may also be subject to significant price volatility. We cannot guarantee that any Purchasers of NFTs will not lose money.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        2. You are solely responsible for determining what, if any, Taxes apply to your transactions through the Services. Neither Crypto Labs nor any Crypto Labs affiliates are responsible for determining the Taxes that apply to such transactions.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        3. Our Services do not store, send, or receive cryptocurrency assets. This is because cryptocurrency assets exist only by virtue of the ownership record maintained on its supporting Blockchain. Any transfer of cryptocurrency assets occurs within the supporting Blockchain and not on the Services. Transactions in NFTs may be irreversible, and, accordingly, losses due to fraudulent or accidental transactions may not be recoverable. Some transactions in NFTs shall be deemed to be made when recorded on a public ledger, which is not necessarily the date or time that you initiated the transaction.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        4. There are risks associated with using an Internet based currency, including but not limited to, the risk of hardware, software and Internet connections, the risk of malicious software introduction, and the risk that third parties may obtain unauthorized access to information stored within your wallet. You accept and acknowledge that Crypto Labs will not be responsible for any communication failures, disruptions, errors, distortions or delays you may experience when using the Services for transactions, however caused.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        5. A lack of use or public interest in the creation and development of distributed ecosystems could negatively impact the development of those ecosystems and related applications, and could therefore also negatively impact the potential utility or value of a certain NFT.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        6. The regulatory regime governing blockchain technologies, cryptocurrencies, and tokens is uncertain, and new regulations or policies may materially adversely affect the development of the Services and the utility of NFTs.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        7. The Services may rely on third-party platforms to perform transactions with respect to any cryptocurrency assets. If we are unable to maintain a good relationship with such platform providers; if the terms and conditions or pricing of such platform providers change; if we violate or cannot comply with the terms and conditions of such platforms; or if any of such platforms loses market share or falls out of favor or is unavailable for a prolonged period of time, access to and use of the Service will suffer.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        8. There are risks associated with purchasing user generated content, including but not limited to, the risk of purchasing counterfeit assets, mislabeled assets, assets that are vulnerable to metadata decay, assets on smart contracts with bugs, and assets that may become untransferable. Crypto Labs reserves the right to hide collections, contracts, and assets affected by any of these issues or by other issues. Assets you purchase may become inaccessible on Crypto Labs. Under no circumstances shall the inability to view or access your assets on Crypto Labs serve as grounds for a claim against Crypto Labs.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        9. By accessing and using the Services, you represent that you understand the inherent risks associated with using cryptographic and blockchain-based systems, and that you have a working knowledge of digital assets. Such systems may have vulnerabilities or other failures, or other abnormal behavior. Crypto Labs is not responsible for any issues with the Blockchains, including forks, technical node issues or any other issues having fund losses as a result. You acknowledge that the cost and speed of transacting with cryptographic and blockchain-based systems such as Ethereum are variable and may increase at any time. You further acknowledge the risk that your digital assets may lose some or all of their value while they are supplied to or from the Services. You further acknowledge that we are not responsible for any of these variables or risks and cannot be held liable for any resulting losses that you experience while accessing Services. Accordingly, you understand and agree to assume full responsibility for all of the risks of accessing and using and interacting with the Services.
                    </p>
                    <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                        15. Indemnity
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        1. You will indemnify, defend (at Crypto Labs’ option) and hold Crypto Labs and its officers, directors, employees and agents, harmless from and against any claims, disputes, demands, liabilities, damages, losses, and costs and expenses, including, without limitation, reasonable legal and accounting fees arising out of or in any way connected with (a) your access to or use of the Services, (b) your NFT Content, or (c) your violation of these Terms. You may not settle or otherwise compromise any claim subject to this Section without Crypto Labs’ prior written approval.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        2. You will indemnify and hold harmless Crypto Labs and its officers, directors, employees and agents, from and against any claims, disputes, demands, liabilities, damages, losses, and costs and expenses, including, without limitation, reasonable legal and accounting fees arising out of or in any way connected with your breach of your representations and warranties from Section 5(e)(v).
                    </p>
                    <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                        16. Limitation of Liability.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        1. TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER Crypto Labs NOR ITS SERVICE PROVIDERS INVOLVED IN CREATING, PRODUCING, OR DELIVERING THE SERVICES WILL BE LIABLE FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES, OR DAMAGES FOR LOST PROFITS, LOST REVENUES, LOST SAVINGS, LOST BUSINESS OPPORTUNITY, LOSS OF DATA OR GOODWILL, SERVICE INTERRUPTION, COMPUTER DAMAGE OR SYSTEM FAILURE OR THE COST OF SUBSTITUTE SERVICES OF ANY KIND ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO USE THE SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT Crypto Labs OR ITS SERVICE PROVIDERS HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, EVEN IF A LIMITED REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        2. TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL THE AGGREGATE TOTAL LIABILITY OF Crypto Labs AND ITS AGENT, REPRESENTATIVES, AND AFFILIATES ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO USE THE SERVICES EXCEED THE AMOUNTS YOU HAVE PAID OR ARE PAYABLE BY YOU TO Crypto Labs FOR USE OF THE SERVICES OR ONE HUNDRED U.S. DOLLARS ($100), IF YOU HAVE NOT HAD ANY PAYMENT OBLIGATIONS TO Crypto Labs, AS APPLICABLE.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        3. THE EXCLUSIONS AND LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE BARGAIN BETWEEN Crypto Labs AND YOU.
                    </p>
                    <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                        17. Governing Law and Forum Choice.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        These Terms and any action related thereto will be governed by the U.S. Federal Arbitration Act, federal arbitration law, and the laws of the State of California, without regard to its conflict of laws provisions. Except as otherwise expressly set forth in Section 18 “Dispute Resolution,” the exclusive jurisdiction for all Disputes (defined below) that you and Crypto Labs are not required to arbitrate will be the state and federal courts located in San Francisco, California, and you and Crypto Labs each waive any objection to jurisdiction and venue in such courts.
                    </p>
                    <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                        18. Dispute Resolution.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        1. Informal Resolution of Disputes. You and Crypto Labs must first attempt to resolve any dispute, claim or controversy arising out of or relating to these Terms or the breach, termination, enforcement, interpretation or validity thereof or the use of the Services (collectively, “Disputes”) informally. Accordingly, neither you nor Crypto Labs may start a formal arbitration proceeding for at least sixty (60) days after one party notifies the other party of a claim in writing. As part of this informal resolution process, you must deliver your written notices via hand or first-class mail to us at Crypto Labs, 1209 Orange Street, Wilmington, Delaware 19801.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        2. Mandatory Arbitration of Disputes. We each agree that any Dispute will be resolved solely by binding, individual arbitration and not in a class, representative or consolidated action or proceeding. You and Crypto Labs agree that the U.S. Federal Arbitration Act governs the interpretation and enforcement of these Terms, and that you and Crypto Labs are each waiving the right to a trial by jury or to participate in a class action. This arbitration provision shall survive termination of these Terms.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        3. Exceptions. As limited exceptions to Section 18(a) above: (i) we both may seek to resolve a Dispute in small claims court if it qualifies; and (ii) we each retain the right to seek injunctive or other equitable relief from a court to prevent (or enjoin) the infringement or misappropriation of our intellectual property rights.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        Conducting Arbitration and Arbitration Rules. The arbitration will be conducted by the American Arbitration Association (“AAA”) under its Consumer Arbitration Rules (the “AAA Rules”) then in effect, except as modified by these Terms. The AAA Rules are available at www.adr.org or by calling 1-800-778-7879. A party who wishes to start arbitration must submit a written Demand for Arbitration to AAA and give notice to the other party as specified in the AAA Rules. The AAA provides a form Demand for Arbitration at www.adr.org. Any arbitration hearings will take place in the county (or parish) where you live, unless we both agree to a different location. The parties agree that the arbitrator shall have exclusive authority to decide all issues relating to the interpretation, applicability, enforceability and scope of this arbitration agreement.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        4. Arbitration Costs. Payment of all filing, administration and arbitrator fees will be governed by the AAA Rules, and we won’t seek to recover the administration and arbitrator fees we are responsible for paying, unless the arbitrator finds your Dispute frivolous. If we prevail in arbitration, we’ll pay all of our attorneys’ fees and costs and won’t seek to recover them from you. If you prevail in arbitration you will be entitled to an award of attorneys’ fees and expenses to the extent provided under applicable law.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        5. Injunctive and Declaratory Relief. Except as provided in Section 18(c) above, the arbitrator shall determine all issues of liability on the merits of any claim asserted by either party and may award declaratory or injunctive relief only in favor of the individual party seeking relief and only to the extent necessary to provide relief warranted by that party’s individual claim. To the extent that you or we prevail on a claim and seek public injunctive relief (that is, injunctive relief that has the primary purpose and effect of prohibiting unlawful acts that threaten future injury to the public), the entitlement to and extent of such relief must be litigated in a civil court of competent jurisdiction and not in arbitration. The parties agree that litigation of any issues of public injunctive relief shall be stayed pending the outcome of the merits of any individual claims in arbitration.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        6. Class Action Waiver. YOU AND Crypto Labs AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. Further, if the parties’ Dispute is resolved through arbitration, the arbitrator may not consolidate another person’s claims with your claims, and may not otherwise preside over any form of a representative or class proceeding. If this specific provision is found to be unenforceable, then the entirety of this Dispute Resolution section shall be null and void.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        7. Severability. With the exception of any of the provisions in Section 18(g) of these Terms (“Class Action Waiver”), if an arbitrator or court of competent jurisdiction decides that any part of these Terms is invalid or unenforceable, the other parts of these Terms will still apply
                    </p>
                    <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                        19. General Terms
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        1. Reservation of Rights. Crypto Labs and its licensors exclusively own all right, title and interest in and to the Services, including all associated intellectual property rights. You acknowledge that the Services are protected by copyright, trademark, and other laws of the United States and foreign countries. You agree not to remove, alter or obscure any copyright, trademark, service mark or other proprietary rights notices incorporated in or accompanying the Services.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        2.Entire Agreement. These Terms constitute the entire and exclusive understanding and agreement between Crypto Labs and you regarding the Services, and these Terms supersede and replace all prior oral or written understandings or agreements between Crypto Labs and you regarding the Services. If any provision of these Terms is held invalid or unenforceable by an arbitrator or a court of competent jurisdiction, that provision will be enforced to the maximum extent permissible, and the other provisions of these Terms will remain in full force and effect. Except where provided by applicable law in your jurisdiction, you may not assign or transfer these Terms, by operation of law or otherwise, without Crypto Labs’ prior written consent. Any attempt by you to assign or transfer these Terms absent our consent or your statutory right, without such consent, will be null. Crypto Labs may freely assign or transfer these Terms without restriction. Subject to the foregoing, these Terms will bind and inure to the benefit of the parties, their successors and permitted assigns.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        3. Notices. Any notices or other communications provided by Crypto Labs under these Terms will be given: (i) via email; or (ii) by posting to the Services. For notices made by email, the date of receipt will be deemed the date on which such notice is transmitted.
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        4. Waiver of Rights. Crypto Labs’ failure to enforce any right or provision of these Terms will not be considered a waiver of such right or provision. The waiver of any such right or provision will be effective only if in writing and signed by a duly authorized representative of Crypto Labs. Except as expressly set forth in these Terms, the exercise by either party of any of its remedies under these Terms will be without prejudice to its other remedies under these Terms or otherwise.
                    </p>
                    <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                        20. Contact Information
                    </p>
                    <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                        If you have any questions about these Terms or the Services, please contact Crypto Labs at tos@switchmint.com.
                    </p>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default TermsOfService;