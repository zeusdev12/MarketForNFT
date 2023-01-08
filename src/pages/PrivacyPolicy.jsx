import React from 'react'
import { Link } from 'react-router-dom'
import Footer from "../components/Footer"
import { ReactComponent as Blur } from "../assets/blurs/blur.svg"

const PrivacyPolicy = () => {
    return (
        <div className='min-h-screen overflow-hidden bg-[#0c0c0c] background'>
            <Blur className='absolute top-0 mt-[70px] lg:mt-0 right-0 z-10 w-[400px] h-[350px] md:w-[400px] 2xl:w-[973px] lg:h-[673px]' />
            <Blur className='absolute top-0 mt-[70px] lg:mt-0 right-0 z-10 w-[350px] h-[240px] md:w-[400px] 2xl:w-[1273px] lg:h-[673px]' />
            <div className='mt-[120px] md:mt-[200px] flex flex-col lg:ml-[40px] 3xl:ml-[120px] lg:max-w-[1180px]'>
                <div className='text-left px-5 lg:px-0 lg:pr-5 2xl:pr-0'>
                    <p className='text-[#828383] font-gilroy text-[14px] uppercase'>Last Updated: 06/09/2022</p>
                    <p className='mt-[30px] text-white text-[40px] lg:text-[62px] font-gilroy font-semibold leading-[40px] md:leading-[65px]'>Crypto Market Privacy Policy</p>
                    <div className='mt-[40px]'>
                        <p className='text-[18px] text-white font-gilroy'>Crypto Labs, Inc. (“Crypto Market,” “us,” “we,” or “our”) provides the Crypto Market platform (Cryptomarket.io) to allow our customers to buy and sell art using non-fungible tokens (“NFTs”). This Privacy Policy is designed to help you understand how we collect, use, process, and share your personal information, and to help you understand and exercise your privacy rights.</p>
                        <div className='text-white font-gilroy text-[18px] flex flex-col mt-[30px] gap-[15px]'>
                            <p>1. SCOPE</p>
                            <p>2. PERSONAL INFORMATION WE COLLECT</p>
                            <p>3. HOW WE USE YOUR INFORMATION</p>
                            <p>4. HOW WE DISCLOSE YOUR INFORMATION</p>
                            <p>5. YOUR PRIVACY CHOICES AND RIGHTS</p>
                            <p>6. SECURITY OF YOUR INFORMATION</p>
                            <p>7. INTERNATIONAL DATA TRANSFERS</p>
                            <p>8. RETENTION OF PERSONAL INFORMATION</p>
                            <p>9. SUPPLEMENTAL NOTICE FOR NEVADA RESIDENTS</p>
                            <p>10. CHILDREN’S INFORMATION</p>
                            <p>11. OTHER PROVISIONS</p>
                            <p>12. CONTACT US</p>
                        </div>
                        <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                            1. SCOPE
                        </p>
                        <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                            This Privacy Policy applies to personal information processed by us, including on our websites and other online or offline offerings. To make this Privacy Policy easier to read, our websites and other offerings are collectively called the “Services.” Crypto Market is the controller for the personal information we process, unless otherwise stated. For information on how to contact us, please refer to <span className='text-[#beff55]'>"<Link className='underline' to="/support">Contact Us</Link>"</span> below.
                        </p>
                        <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                            2. PERSONAL INFORMATION WE COLLECT
                        </p>
                        <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                            The categories of personal information we collect depend on how you interact with us, our Services, and the requirements of applicable law. We collect information that you provide to us, information we obtain automatically when you use our Services, and information from other sources such as third-party services and organizations, as described below.
                        </p>
                        <p className='text-[26px] text-white font-gilroy font-semibold mt-[30px] leading-[33px]'>
                            A. Information You Provide to Us Directly
                        </p>
                        <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                            We may collect the following personal information that you provide to us.
                        </p>
                        <ul className='mt-[30px] text-white font-gilroy flex flex-col text-[18px] gap-[15px] list-disc pl-7'>
                            <li>Crypto Wallet information. To use our Services to buy and sell NFTs, you will need to log in with your existing cryptocurrency wallet, such as Phantom, Slope, Sollet, Solflare, Ledger, Solong, or MathWallet. Note that your interactions with these third-party wallet services are subject to each wallet’s respective privacy policy, not this Privacy Policy.</li>
                            <li>Your Purchases/Know Your Customer (“KYC”) information. If you buy or sell NFTs using our Services, we will record the details of each transaction (such as the owner of the NFTs, any royalties owed, etc.). In addition, in connection with your offer of NFTs on our Services, we or our service providers may also collect information to facilitate the transaction, verify your identity, and comply with our regulatory obligations (sometimes referred to as “Know Your Customer” checks). Such information may include, without limitation: date of birth, your passport or national ID card, a bank card statement, or other information linking you to an address.</li>
                            <li>Listing application. To list your NFTs on Crypto Market, you will be required to provide us with information about your project, including the following information: your project name, whether you were contacted by Crypto Market in advance, the email address and Discord ID for the main project contact, the Twitter URL and Discord Server invite link associated with the project, the ownership status of the artwork used in the project, the creator/artist name, links to other creator projects (optional), project mint status, Candy Machine ID or other smart contract identifiers, number of items existing or expected in the collection, and associated image files.</li>
                            <li>Launchpad applications. If you apply to join our Launchpad program to receive additional minting assistance, we collect information about your project, including: your project name and description (including expected mint date, number of items included in the mint, mint price (in SOL), the creator name, the status of your project artwork, and the Discord ID and email address of the main project contact . You also have the option to add your Twitter, Discord server, Instagram, website, and other links, along with any other information or supplemental materials you decide to share.</li>
                            <li>Your Communications with Us. We may collect personal information, such as email address, phone number, or mailing address when you request information about our Services, register for our newsletter or blog, request customer or technical support, apply for a job, or otherwise communicate with us.</li>
                            <li>Surveys. We may contact you to participate in surveys. If you decide to participate, you may be asked to provide certain information, which may include personal information. Interactive Features. We and others who use our Services may collect personal information that you submit or make available through our interactive features (e.g., messaging and chat features, commenting functionalities, forums, blogs, and social media pages on Twitter, Discord, Medium, and Spotify). Any information you provide using the public sharing features of the Services (referred to herein as “User Content”) will be considered “public,” unless otherwise required by applicable law, and is not subject to the privacy protections referenced herein. Please exercise caution before revealing any information that may identify you in the real world to other users.</li>
                            <li>Sweepstakes or Contests. We may collect personal information you provide for any sweepstakes or contests that we offer. In some jurisdictions, we are required to publicly share information of sweepstakes and contest winners.</li>
                            <li>Conferences, Trade Shows, and Other Events. We may collect personal information from individuals when we attend or host conferences, trade shows, and other events.</li>
                            <li>Business Development and Strategic Partnerships. We may collect personal information from individuals and third parties to assess and pursue potential business opportunities.</li>
                            <li>Job Applications. We may post job openings and opportunities on our Services. If you reply to one of these postings by submitting your application, CV and/or cover letter to us, we will collect and use this information to assess your qualifications.</li>
                        </ul>
                        <p className='text-[26px] text-white font-gilroy font-semibold mt-[30px] leading-[33px]'>
                            B. Information Collected Automatically
                        </p>
                        <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                            We may collect personal information automatically when you use our Services:
                        </p>
                        <ul className='mt-[30px] text-white font-gilroy flex flex-col text-[18px] gap-[15px] list-disc pl-7'>
                            <li>Automatic Data Collection. We may collect certain information automatically when you use our Services, such as your Internet protocol (IP) address, user settings, MAC address, cookie identifiers, mobile carrier, mobile advertising and other unique identifiers, browser or device information, location information (including approximate location derived from IP address), and Internet service provider. We may also automatically collect information regarding your use of our Services, such as pages that you visit before, during and after using our Services, information about the links you click, the types of content you interact with, the frequency and duration of your activities, and other information about how you use our Services. We also track the floor price, volume, and average prices for all NFT collections hosted on our platform over time.</li>
                            <li>Cookies, Pixel Tags/Web Beacons, and Other Technologies. We, as well as third parties that provide content, advertising, or other functionality on our Services, may use cookies, pixel tags, and other technologies (“Technologies”) to automatically collect information through your use of our Services.</li>
                            <li>Cookies. Cookies are small text files placed in device browsers that store preferences and facilitate and enhance your experience</li>
                            <li>Pixel Tags/Web Beacons. A pixel tag (also known as a web beacon) is a piece of code embedded in our Services that collects information about engagement on our Services. The use of a pixel tag allows us to record, for example, that a user has visited a particular web page or clicked on a particular advertisement. We may also include web beacons in e-mails to understand whether messages have been opened, acted on, or forwarded.</li>
                        </ul>
                        <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                            Our uses of these Technologies fall into the following general categories:
                        </p>
                        <ul className='mt-[30px] text-white font-gilroy flex flex-col text-[18px] gap-[15px] list-disc pl-7'>
                            <li>Operationally Necessary. This includes Technologies that allow you access to our Services, applications, and tools that are required to identify irregular website behavior, prevent fraudulent activity, improve security, or allow you to make use of our functionality;</li>
                            <li>Performance-Related. We may use Technologies to assess the performance of our Services, including as part of our analytic practices to help us understand how individuals use our Services (see Analytics below);</li>
                            <li>Functionality-Related. We may use Technologies that allow us to offer you enhanced functionality when accessing or using our Services. This may include identifying you when you sign into our Services or keeping track of your specified preferences, interests, or past items viewed;</li>
                            <li>Advertising- or Targeting-Related. We may use first party or third-party Technologies to deliver content, including ads relevant to your interests, on our Services or on third-party websites.</li>
                        </ul>
                        <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                            See <span className='text-[#beff55]'>"<Link className='underline'>Your Privacy Choices and Rights</Link>"</span> below to understand your choices regarding these Technologies.
                        </p>
                        <ul className='mt-[30px] text-white font-gilroy flex flex-col text-[18px] gap-[15px] list-disc pl-7'>
                            <li>Analytics. We may use Technologies and other third-party tools to process analytics information on our Services. Some of our analytics partners include Google Analytics. We use analytics services provided by Google Inc. This allows us to process usage data to better understand how our website and web-related Services are used. This enables us to continually improve our website, making it relevant to your interests and needs. This may involve personal data, such as cookie and other device identifiers. The data collected by Google Analytics is usually transferred to a Google server in the USA and processed there. In addition, Google uses your data for its own purposes, e.g. for profiling or linking it to other data. For more information, please visit Google Analytics’ Privacy Policy. To learn more about how to optout of Google Analytics’ use of your information, please click here.</li>
                            <li>Social Media Platforms. Our Services may contain social media buttons, such as Twitter, Discord, Medium, and Spotify, which might include widgets such as the “share this” button or other interactive mini programs). These features may collect your IP address and which page you are visiting on our Services, and may set a cookie to enable the feature to function properly. Your interactions with these platforms are governed by the privacy policy of the company providing it.</li>
                        </ul>
                        <p className='text-[26px] text-white font-gilroy font-semibold mt-[30px] leading-[33px]'>
                            C. Information Collected from Other Sources
                        </p>
                        <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                            We may obtain information about you from other sources, including through third-party services and organizations. For example, if you access our Services through a third-party application, such as an app store, a third-party login service, or a social networking site, we may collect information about you from that third-party application that you have made available via your privacy settings. Referrals and Sharing Features. Our Services may offer various tools and functionalities that allow you to provide information about your friends through our referral service; third parties may also use these services to upload information about you. Our referral services may also allow you to forward or share certain content with a friend or colleague, such as an email inviting your friend to use our Services. Please only share with us contact information of people with whom you have a relationship (e.g., relative, friend, neighbor, or co-worker).
                        </p>
                        <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                            3. HOW WE USE YOUR INFORMATION
                        </p>
                        <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                            We use your information for a variety of business purposes, including to provide our Services, for administrative purposes, and to market our products and Services, as described below. For users in the European Economic Area (“EEA”) and United Kingdom (“UK”), the legal basis for collection of this information is to provide you our Services and make it possible for you to use our Services.
                        </p>
                        <p className='text-[26px] text-white font-gilroy font-semibold mt-[30px] leading-[33px]'>
                            A. Provide Our Services
                        </p>
                        <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                            We use your information to fulfill our contract with you and provide you with our Services, such as:
                        </p>
                        <ul className='mt-[30px] text-white font-gilroy flex flex-col text-[18px] gap-[15px] list-disc pl-7'>
                            <li>Managing your information and accounts;</li>
                            <li>Providing access to certain areas, functionalities, and features of our Services;</li>
                            <li>Answering requests for customer or technical support;</li>
                            <li>Communicating with you about your account, activities on our Services, and policy changes; </li>
                            <li>Processing your financial information and other payment methods for products or Services purchased;</li>
                            <li>Processing applications if you apply for a job we post on our Services; and</li>
                            <li>Allowing you to register for events.</li>
                        </ul>
                        <p className='text-[26px] text-white font-gilroy font-semibold mt-[30px] leading-[33px]'>
                            B. Administrative Purposes
                        </p>
                        <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                            We use your information for our legitimate interests, or to comply with our legal obligations, such as:
                        </p>
                        <ul className='mt-[30px] text-white font-gilroy flex flex-col text-[18px] gap-[15px] list-disc pl-7'>
                            <li>Direct marketing, research and development (including marketing research), network and information security, and fraud prevention;</li>
                            <li>Detecting security incidents, protecting against malicious, deceptive, fraudulent or illegal activity, and prosecuting those responsible for that activity;</li>
                            <li>Measuring interest and engagement in our Services;</li>
                            <li>Short-term, transient use, such as contextual customization of ads;</li>
                            <li>Improving, upgrading, or enhancing our Services;</li>
                            <li>Developing new products and Services;</li>
                            <li>Ensuring internal quality control and safety;</li>
                            <li>Authenticating and verifying individual identities, including requests to exercise your rights under this policy;</li>
                            <li>Debugging to identify and repair errors with our Services;</li>
                            <li>Auditing relating to interactions, transactions, and other compliance activities;</li>
                            <li>Sharing information with third parties as needed to provide the Services;</li>
                            <li>Enforcing our agreements and policies; and</li>
                            <li>Other uses as required to comply with our legal obligations.</li>
                        </ul>
                        <p className='text-[26px] text-white font-gilroy font-semibold mt-[30px] leading-[33px]'>
                            C. Marketing and Advertising our Products and Services
                        </p>
                        <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                            We may use personal information to tailor and provide you with content and advertisements. We may provide you with these materials as permitted by applicable law. Some of the ways we market to you include email campaigns, custom audiences advertising, and “interest-based” or “personalized advertising,” including through cross-device tracking. If you have any questions about our marketing practices, or if you would like to opt out of the use of your personal information for marketing purposes, you may contact us at any time as set forth in <span className='text-[#beff55]'>"<Link className='underline' to="/support">Contact Us</Link>"</span> below.
                        </p>
                        <p className='text-[26px] text-white font-gilroy font-semibold mt-[30px] leading-[33px]'>
                            D. Other Purposes
                        </p>
                        <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                            We also use your information for other purposes as requested by you or as permitted by applicable law.
                        </p>
                        <ul className='mt-[30px] text-white font-gilroy flex flex-col text-[18px] gap-[15px] list-disc pl-7'>
                            <li>Consent. We may use personal information for other purposes that are clearly disclosed to you at the time you provide personal information or with your consent</li>
                            <li>Automated Decision Making. We may engage in automated decision making, including profiling, such as to suggest NFTs for you to buy or creators to follow. Crypto Market’s processing of your personal information will not result in a decision based solely on automated processing that significantly affects you unless such a decision is necessary as part of a contract we have with you, we have your consent, or we are permitted by law to engage in such automated decision making. If you have questions about our automated decision making, you may contact us as set forth in “Contact Us” below.</li>
                            <li>De-identified and Aggregated Information. We may use personal information and other information about you to create de-identified and/or aggregated information, such as de-identified demographic information, information about the device from which you access our Services, or other analyses we create. If we create or receive personal data that has been de-identified or aggregated, we will not attempt to reidentify it, except to comply with applicable law.</li>
                            <li>NFT-related Information. Notwithstanding anything to the contrary in this Privacy Policy, your personal information, user information, and related electronic wallet address may be shared with and/or sold to third parties, made publicly visible and/or appear as part of Solana or any other applicable blockchain network when you engage in NFT sales, activities and/or transactions through the services. The foregoing disclosure may be made for purposes related to facilitating those activities and/or transactions, including without limitation making payments to Crypto Market. To the fullest extent allowed by law: (a) you assume all risk related to your NFT activities and/or transactions; and (b) Crypto Market will not be liable to you for any losses or liabilities related to the foregoing use and disclosures.</li>
                        </ul>
                        <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                            4. HOW WE DISCLOSE YOUR INFORMATION
                        </p>
                        <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                            We disclose your information to third parties for a variety of business purposes, including to provide our Services, to protect us or others, or in the event of a major business transaction such as a merger, sale, or asset transfer, as described below
                        </p>
                        <p className='text-[26px] text-white font-gilroy font-semibold mt-[30px] leading-[33px]'>
                            A. Disclosures to Provide our Services
                        </p>
                        <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                            The categories of third parties with whom we may share your information are described below.
                        </p>
                        <ul className='mt-[30px] text-white font-gilroy flex flex-col text-[18px] gap-[15px] list-disc pl-7'>
                            <li>Service Providers. We may share your personal information with our third-party service providers who use that information to help us provide our Services. This includes service providers that provide us with IT support, hosting, payment processing, customer service, and related services.</li>
                            <li>Business Partners. We may share your personal information with business partners to provide you with a product or service you have requested. We may also share your personal information to business partners with whom we jointly offer products or services.</li>
                            <li>Other Users/Website Visitors. As described above in <span className='text-[#beff55]'>"<Link className='underline' to="/support">Personal Information We Collect</Link>"</span> our Services allow you to share your profile, and/or User Content with other users/publicly, including to those who do not use our Services.</li>
                            <li>Advertising Partners. We may share your personal information with third-party advertising partners. These third-party advertising partners may set Technologies and other tracking tools on our Services to collect information regarding your activities and your device (e.g., your IP address, cookie identifiers, page(s) visited, location, time of day). These advertising partners may use this information (and similar information collected from other services) for purposes of delivering personalized advertisements to you when you visit digital properties within their networks. This practice is commonly referred to as “interest-based advertising” or “personalized advertising.”</li>
                            <li>APIs/SDKs. We may use third-party Application Program Interfaces (“APIs”) and Software Development Kits (“SDKs”) as part of the functionality of our Services. For more information about our use of APIs and SDKs, please contact us as set forth in <span className='text-[#beff55]'>"<Link className='underline' to="/support">Contact Us</Link>"</span> below.</li>
                        </ul>
                        <p className='text-[26px] text-white font-gilroy font-semibold mt-[30px] leading-[33px]'>
                            B. Disclosures to Protect Us or Others
                        </p>
                        <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                            We may access, preserve, and disclose any information we store associated with you to external parties if we, in good faith, believe doing so is required or appropriate to: comply with law enforcement or national security requests and legal process, such as a court order or subpoena; protect your, our, or others’ rights, property, or safety; enforce our policies or contracts; collect amounts owed to us; or assist with an investigation or prosecution of suspected or actual illegal activity.
                        </p>
                        <p className='text-[26px] text-white font-gilroy font-semibold mt-[30px] leading-[33px]'>
                            C. Disclosure in the Event of Merger, Sale, or Other Asset Transfers
                        </p>
                        <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                            If we are involved in a merger, acquisition, financing due diligence, reorganization, bankruptcy, receivership, purchase or sale of assets, or transition of service to another provider, your information may be sold or transferred as part of such a transaction, as permitted by law and/or contract.
                        </p>
                        <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                            5. YOUR PRIVACY CHOICES AND RIGHTS
                        </p>
                        <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                            Your Privacy Choices. The privacy choices you may have about your personal information are determined by applicable law and are described below
                        </p>
                        <ul className='mt-[30px] text-white font-gilroy flex flex-col text-[18px] gap-[15px] list-disc pl-7'>
                            <li>Email Communications. If you receive an unwanted email from us, you can use the unsubscribe link found at the bottom of the email to opt out of receiving future emails. Note that you will continue to receive transaction-related emails regarding products or Services you have requested. We may also send you certain non-promotional communications regarding us and our Services, and you will not be able to opt out of those communications (e.g., communications regarding our Services or updates to our Terms or this Privacy Policy).</li>
                            <li>“Do Not Track.” Do Not Track (“DNT”) is a privacy preference that users can set in certain web browsers. Please note that we do not respond to or honor DNT signals or similar mechanisms transmitted by web browsers.</li>
                            <li>Cookies and Interest-Based Advertising. You may stop or restrict the placement of Technologies on your device or remove them by adjusting your preferences as your browser or device permits. However, if you adjust your preferences, our Services may not work properly. Please note that cookie-based opt-outs are not effective on mobile applications. However, you may opt-out of personalized advertisements on some mobile applications by following the instructions for Android, iOS, and others. The online advertising industry also provides websites from which you may opt out of receiving targeted ads from data partners and other advertising partners that participate in self-regulatory programs. You can access these and learn more about targeted advertising and consumer choice and privacy by visiting the Network Advertising Initiative, the Digital Advertising Alliance, the European Digital Advertising Alliance, and the Digital Advertising Alliance of Canada. Please note you must separately opt out in each browser and on each device.</li>
                        </ul>
                        <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                            Your Privacy Rights. In accordance with applicable law, you may have the right to:
                        </p>
                        <ul className='mt-[30px] text-white font-gilroy flex flex-col text-[18px] gap-[15px] list-disc pl-7'>
                            <li>Access Personal Information about you, including: (i) confirming whether we are processing your personal information; (ii) obtaining access to or a copy of your personal information;</li>
                            <li>Request Correction of your personal information where it is inaccurate, incomplete or outdated. In some cases, we may provide self-service tools that enable you to update your personal information;</li>
                            <li>Request Deletion, Anonymization or Blocking of your personal information when processing is based on your consent or when processing is unnecessary, excessive or noncompliant;</li>
                            <li>Request Restriction of or Object to our processing of your personal information when processing is noncompliant;</li>
                            <li>Withdraw your Consent to our processing of your personal information. If you refrain from providing personal information or withdraw your consent to processing, some features of our Service may not be available;</li>
                            <li>Request data portability and receive an electronic copy of personal information that you have provided to us;</li>
                            <li>Be informed about third parties with which your personal information has been shared; and</li>
                            <li>Request the review of decisions taken exclusively based on automated processing if these decisions could affect your data subject rights.</li>
                        </ul>
                        <p className='text-[26px] text-white font-gilroy font-semibold mt-[30px] leading-[33px]'>
                            Rights Of Users from the EEA and UK.
                        </p>
                        <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                            “GDPR” means the European Union General Data Protection Regulation (EU) 2016/679, and the UK version. Information that you provide may be transferred or accessed by entities around the world as described in this Privacy Policy. If you are located outside the United States, you understand that we may transfer personal information to and process it in the United States. If you are located in the EEA or UK, you freely consent to the transfer of personal information outside of the EEA and UK. Your consent to this Privacy Policy together with your submission of personal information constitute your agreement to these transfers.
                        </p>
                        <ul className='mt-[30px] text-white font-gilroy flex flex-col text-[18px] gap-[15px] list-disc pl-7'>
                            <li>Data Controller. For the purposes of this Privacy Policy, Crypto Market is the Data Controller of your personal information.</li>
                            <li>Rights of EEA and UK Residents. If you are accessing or using the Services from within the EEA or UK, you may have the following rights under the GDPR (as well as other rights). If you wish to exercise any of these rights, you may do so by contacting us as provided in this Privacy Policy.</li>
                            <li>Right of Access: You have the right to obtain confirmation from us as to whether or not we process personal information from you and you also have the right to at any time obtain access to your personal information stored by us.</li>
                            <li>Right to Correction of your Personal Information: If we process your personal information, we use reasonable measures to ensure that your personal information is accurate and up-to-date for the purposes for which your personal information was collected. If your personal information is inaccurate or incomplete, you have the right to require us to correct it.</li>
                            <li>Right to Deletion of your Personal Information or Right to Restriction of Processing: You may have the right to require us to delete your personal information or to restrict processing of your personal information.</li>
                            <li>Right to Withdraw your Consent: If you have given your consent to the processing of your personal information, you have the right to withdraw your consent at any time, without affecting the lawfulness of processing based on the consent before the withdrawal.</li>
                            <li>Right to Data Portability: You may have the right to receive the personal information concerning you and which you have provided to us, in a structured, commonly used and machine-readable format or to transmit this data to another controller.</li>
                            <li>Right to Object: You may have the right to object to the processing of your personal information as further specified in this Privacy Policy.</li>
                            <li>Right to Lodge a Complaint with Supervisory Authority: You have the right to lodge a complaint with a data protection supervisory authority located in the European Union or UK. Further information about how to contact your local data protection authority is available at the website of the European Commission.</li>
                        </ul>
                        <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                            If you would like to exercise any of these rights, please contact us as set forth in “Contact Us” below. We will process such requests in accordance with applicable laws
                        </p>
                        <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                            6. SECURITY OF YOUR INFORMATION
                        </p>
                        <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                            We take steps to ensure that your information is treated securely and in accordance with this Privacy Policy. Unfortunately, no system is 100% secure, and we cannot ensure or warrant the security of any information you provide to us. We have taken appropriate safeguards to require that your personal information will remain protected, and take steps to require our third-party service providers and partners to have appropriate safeguards as well. To the fullest extent permitted by applicable law, we do not accept liability for unauthorized disclosure. By using our Services or providing personal information to us, you agree that we may communicate with you electronically regarding security, privacy, and administrative issues relating to your use of our Services. If we learn of a security system’s breach, we may attempt to notify you electronically by posting a notice on our Services, by mail, or by sending an email to you.
                        </p>
                        <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                            7. INTERNATIONAL DATA TRANSFERS
                        </p>
                        <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                            All information processed by us may be transferred, processed, and stored anywhere in the world, including, but not limited to, the United States or other countries, which may have data protection laws that are different from the laws where you live. We endeavor to safeguard your information consistent with the requirements of applicable laws
                        </p>
                        <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                            8. RETENTION OF PERSONAL INFORMATION
                        </p>
                        <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                            We store the personal information we collect as described in this Privacy Policy for as long as you use our Services, or as necessary to fulfill the purpose(s) for which it was collected, provide our Services, resolve disputes, establish legal defenses, conduct audits, pursue legitimate business purposes, enforce our agreements, and comply with applicable laws.
                        </p>
                        <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                            9. SUPPLEMENTAL NOTICE FOR NEVADA RESIDENTS
                        </p>
                        <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                            If you are a resident of Nevada, you have the right to opt-out of the sale of certain Personal Information to third parties who intend to license or sell that Personal Information. You can exercise this right by contacting us at privacy@Cryptomarket.io with the subject line “Nevada Do Not Sell Request” and providing us with your name and the email address associated with your account. Please note that we do not currently sell your Personal Information as sales are defined in Nevada Revised Statutes Chapter 603A. If you have any questions, please contact us as set forth below.
                        </p>
                        <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                            10. CHILDREN’S INFORMATION
                        </p>
                        <p className='text-[18px] text-white font-gilroy mt-[30px]'>
                            The Services are not directed to children under 18 (or other age as required by local law), and we do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has uploaded personal information to our site without your consent, you may contact us as described in “Contact Us” below. If we become aware that a child has provided us with personal information in violation of applicable law, we will delete any personal information we have collected, unless we have a legal obligation to keep it, and terminate the child’s account if applicable.
                        </p>
                        <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                            11. OTHER PROVISIONS
                        </p>
                        <div className='text-[18px] text-white flex flex-col font-gilroy mt-[30px] gap-[15px]'>
                            <p>Third-Party Websites/Applications. The Services may contain links to other websites/applications and other websites/applications may reference or link to our Services. These third-party services are not controlled by us. We encourage our users to read the privacy policies of each website and application with which they interact. We do not endorse, screen, or approve, and are not responsible for, the privacy practices or content of such other websites or applications. Providing personal information to third-party websites or applications is at your own risk.</p>
                            <p>Supervisory Authority. If you are located in the European Economic Area, Switzerland, the United Kingdom, or Brazil, you have the right to lodge a complaint with a supervisory authority if you believe our processing of your personal information violates applicable law.</p>
                            <p>Changes to our Privacy Policy. We may revise this Privacy Policy from time to time in our sole discretion. If there are any material changes to this Privacy Policy, we will notify you as required by applicable law. You understand and agree that you will be deemed to have accepted the updated Privacy Policy if you continue to use our Services after the new Privacy Policy takes effect.</p>
                        </div>
                        <p className='text-white font-gilroy font-semibold text-[36px] mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
                            12. CONTACT US
                        </p>
                        <div className='text-[18px] text-white flex flex-col font-gilroy mt-[30px] gap-[15px]'>
                            <p>If you have any questions about our privacy practices or this Privacy Policy, or to exercise your rights as detailed in this Privacy Policy, please contact us at:</p>
                            <p>Crypto Market</p>
                            <p>privacy@сryptomarket.io</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default PrivacyPolicy;