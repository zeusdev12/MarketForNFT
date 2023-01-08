import React from 'react'
import { Link } from 'react-router-dom'
import Footer from "../components/Footer"
import { ReactComponent as Blur } from "../assets/blurs/blur.svg"

const CopyrightPolice = () => {
  return (
    <div className='min-h-screen overflow-hidden bg-[#0c0c0c] background'>
      <Blur className='absolute top-0 mt-[70px] lg:mt-0 right-0 z-10 w-[400px] h-[350px] md:w-[400px] 2xl:w-[973px] lg:h-[673px]' />
      <Blur className='absolute top-0 mt-[70px] lg:mt-0 right-0 z-10 w-[350px] h-[240px] md:w-[400px] 2xl:w-[1273px] lg:h-[673px]' />
      <div className='mt-[120px] md:mt-[200px] flex flex-col lg:ml-[40px] 3xl:ml-[120px] lg:max-w-[1180px]'>
        <div className='text-left px-5 lg:px-0 lg:pr-5 2xl:pr-0'>
          <p className='text-[#828383] font-gilroy text-[14px] uppercase'>December, 2021</p>
          <p className='mt-[30px] text-white text-[40px] lg:text-[62px] font-gilroy font-semibold leading-[40px] md:leading-[65px]'>Copyright Polices and Procedures</p>
          <div className='text-white font-gilroy text-[18px] flex flex-col mt-[40px] gap-[15px]'>
            <p>At Crypto Labs Inc. (“Crypto Labs”), we take the rights of intellectual property owners seriously and we respect intellectual property laws. We take precautions to avoid engaging in, facilitating, or becoming involved in infringements of intellectual property rights.</p>
            <p>Like many types of third-party service providers, from time to time we may receive communications suggesting that some of our users engage in illegal conduct. Our ability to investigate the accusations is very limited because adjudication of accusations requires investigation of numerous facts to provide context for both the challenged behaviors and the claimed rights. Our ability to have actual knowledge of specific infringements by our users would be extremely rare and unusual.</p>
            <p>Although we are confident that our actions and policies would not constitute any form of copyright infringement, and although the safe harbors apply only to infringers, in an abundance of caution we intend to take advantage of the safe harbors from copyright remedies by meeting the qualifications for online service providers under 17 U.S.C. § 512, of the Copyright Act. (That is the Online Copyright Infringement Liability Limitation Act, which became law as part of the Digital Millennium Copyright Act.) Crypto Labs has therefore adopted these policies and procedures. </p>
            All Crypto Labs employees with responsibility for Crypto Labs’ services and public communications must read and abide by this document.
            <p>If you have any questions or comments regarding Crypto Labs’ copyright policies and related procedures, please contact copyright@cryptomarket.io, Crypto Labs’ designated agent to receive notifications of claimed infringement at copyright@cryptomarket.io</p>
          </div>
          <p className='text-[36px] text-white font-gilroy font-semibold mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
            A. Conditions to Qualify for Safe Harbors
          </p>
          <ul className='mt-[30px] text-white font-gilroy flex flex-col text-[18px] gap-[15px] list-decimal pl-7'>
            <li>Designation of Agent to Receive Notifications of Claimed Infringement. Crypto Labs has designated an agent with the U.S. Copyright Office to receive notifications of claimed copyright infringement (the “Designated Agent”). Crypto Labs must renew its designation with the U.S. Copyright Office every three years, with the next renewal deadline of December 13th 2024).</li>
            <li>Publication of Designated Agent’s Contact Information. Crypto Labs shall publish on each of its websites, in a location accessible to the public, the Designated Agent’s contact information, including physical address, email address, and telephone number, to enable copyright owners to send notifications of claimed infringement to Crypto Labs. At the bottom of each page of the websites, Crypto Labs maintains a links that direct users to Crypto Labs’ terms of use, privacy policy, and copyright information, located at <span className='text-[#beff55]'><Link className='underline' to="/termsOfService">https://switchmint.com/terms-of-service</Link></span>, <span className='text-[#beff55]'><Link className='underline' to="/privacyPolicy">https://switchmint.com/privacy-policy</Link></span> and <span className='text-[#beff55]'><Link className='underline' to="/copyrightPolice">https://switchmint.com/copyright</Link></span>, respectively ” (the “Copyright Information Page”). The Copyright Information Page explains the procedure for copyright owners to notify us of 39032/00100/FW/13746334.2 claims of copyright infringement on our service, system, or network. Copyright owners may send notifications by physical delivery or email to our agent at the contact address we provide. In addition, any written communication related to accusations of copyright infringement that is received by any employee of Crypto Labs should be forwarded immediately to the agent for evaluation or reference to counsel. This includes written communications received through product support, from the company’s hosting services, or by mail, courier, or email to any employee of Crypto Labs.</li>
            <li>Action Upon Notifications of Claimed Infringement. The Designated Agent will check the postal address and email address for the Designated Agent at least once each U.S. business day. Crypto Labs will review and respond to notifications of claimed copyright infringement in accordance with the procedures set forth in Section B of these Copyright Policies and Procedures.</li>
            <li>Knowledge of Infringement Without Notifications of Claimed Infringement. If Crypto Labs should happen to obtain actual knowledge of infringing material on the service, system, or network, or become aware of facts or circumstances from which infringing activity is apparent, it will take action even without having received a notification of claimed infringement. As we discussed above, however, determination of copyright infringement requires a legal judgment based upon investigation of numerous facts that are not typically within our knowledge. Crypto Labs will consider, for example, information about court rulings involving our customers or credible, authoritative governmental acts such as an indictment or a report based upon government investigation. (Government communications that simply paraphrase accusations by complainants, without active government investigation, are not likely to satisfy this standard.)</li>
            <li>Implementation of Policy for Termination of Repeat Infringers. Crypto Labs has adopted, will reasonably implement, and will inform holders of its policy to terminate, in appropriate circumstances, the users who are repeat infringers. The policy is described in detail in Section F of these Copyright Policies and Procedures.</li>
            <li>Accommodation of Standard Technical Measures. Crypto Labs will accommodate and will not interfere with any “standard technical measures” as defined in Section 512(i)(2) of the Copyright Act, to the extent any “standard technical measures” come into existence.</li>
          </ul>
          <p className='text-[36px] text-white font-gilroy font-semibold mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
            B. Evaluation of, and Action upon, Notifications of Claimed Infringement
          </p>
          <div className='text-[18px] text-white flex flex-col font-gilroy mt-[30px] gap-[15px]'>
            <p>Upon receipt of a notification of claimed copyright infringement, the Designated Agent should evaluate it for substantial compliance with the requirements for a notification.</p>
            <p>Requirements for a notification differ according to the type of online service. For claims that material stored on our network or system at the direction of a user is infringing, a notification of claimed infringement must substantially meet six requirements of Section 512(c)(3)(i)-(vi) of the Copyright Act, which are set forth below. To be a valid notification of claimed infringement, the communication must be in a writing and do the following:</p>
          </div>
          <ul className='mt-[30px] text-white font-gilroy flex flex-col text-[18px] gap-[15px] list-decimal pl-7'>
            <li>Identify the copyrighted work alleged to have been infringed, or, if multiple copyrighted works at a single online site are covered by a single notification, a representative list of such works at that site;</li>
            <li>Identify the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit Crypto Labs to locate the material, including, if applicable, the URL of the link where such material may be found;</li>
            <li>Contain information reasonably sufficient to permit Crypto Labs to contact the complaining party, such as name, address, telephone number, and/or email address;</li>
            <li>Contain a statement by the complaining party that it has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law;</li>
            <li>Contain a statement by the complaining party that the information in the notice is accurate and, under penalty of perjury, that the complainant is the owner, or authorized to act on behalf of the owner, of an exclusive right under the copyright that is allegedly infringed; and</li>
            <li>Contain a physical or electronic signature of the owner or the person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
          </ul>
          <div className='text-[18px] text-white flex flex-col font-gilroy mt-[30px] gap-[15px]'>
            <p>If Crypto Labs receives a written communication that does not comply substantially with all six requirements above, but the notice does substantially comply with requirements 1, 2, and 3 above, we will promptly attempt to contact the complainant to seek the complainant’s compliance with all six requirements. Exhibit A discusses review of notifications for compliance and correspondence to complainants about defective communications.</p>
            <p>For notifications of claimed infringement relating to our referring or linking users to online locations containing infringing material or infringing activity, the same six requirements above apply, except that a notification must identify the reference or link to the material or activity that is claimed to be infringing and contain information reasonably sufficient to permit Crypto Labs to locate that reference or link.</p>
            <p>We may, at our discretion, decide to remove allegedly infringing material, or references or links to material or activity that is claimed to be infringing, even if the notification of claimed infringement does not meet the requirements.</p>
            <p>When Crypto Labs receives a notification of claimed copyright infringement that substantially complies with the statutory requirements for notifications, we will respond expeditiously to remove, or disable access to, the material or the reference or link to material or activity that is claimed to be infringing. We consider it a Crypto Labs best practice to remove or disable access to this material, or the reference or link to this material or activity, no later than one U.S. business day after the valid and complete notification of claimed infringement is received, although a variety of circumstances may call for a longer time.</p>
          </div>
          <p className='text-[36px] text-white font-gilroy font-semibold mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
            C. Notification of User
          </p>
          <div className='text-[18px] text-white flex flex-col font-gilroy mt-[30px] gap-[15px]'>
            <p>Following removal of, or disabling access to, material or the reference or link to material under Section B, we will take reasonable steps promptly to send an email notice to the user who submitted the removed or disabled material or reference or link. The notice for initial and later claims of infringement is set forth in Exhibit B and the notice for termination of users is set forth in Exhibit C.</p>
            <p>If Crypto Labs receives a substantially compliant counter notification from the user who submitted the removed or disabled material or reference or link, we will promptly provide the complainant with an email in the form of Exhibit D, along with a copy of the counter notification. The 3 39032/00100/FW/13746334.2 email informs the copyright owner that we will restore or cease disabling access to the material or the reference or link in ten to fourteen business days of Crypto Labs’ receipt of the counter notice. After that time, we may (at our option) restore the material or reference or link to our service unless Crypto Labs receives a notification from the complainant that the copyright owner filed a legal action seeking a court order to restrain the allegedly infringing activity within 14 business days of Crypto Labs’ receipt of the counter notification. If Crypto Labs receives no notification of a lawsuit by the copyright owner after Crypto Labs received a counter notification, we will not consider the notification of claimed infringement in applying our repeat infringer termination policy.</p>
            <p>To be valid, a counter notification must substantially include the following information:</p>
          </div>
          <ul className='mt-[30px] text-white font-gilroy flex flex-col text-[18px] gap-[15px] list-decimal pl-7'>
            <li>Identification of the material or the reference or link to the material that has been removed or to which access has been disabled and the location at which the material or reference or link appeared before it was removed or access to it was disabled;</li>
            <li>A statement from the user under penalty of perjury that the user has a good faith belief that the material or reference or link to the material was removed or disabled because of mistake or misidentification of the material or reference or link to the material to be removed or disabled;</li>
            <li>The user’s name, address, and telephone number, and a statement that the user consents to the jurisdiction of the Federal District Court of the United States for the judicial district in which the submitter’s address is located, or if outside of the United States, for any judicial district in which Crypto Labs may be found, and that the user will accept service of process from the complainant who provided Crypto Labs with notification of the alleged infringing nature of the removed materials or reference or links or an agent of such complaining party; and</li>
            <li>The physical or electronic signature of the user.</li>
          </ul>
          <p className='text-[18px] text-white font-gilroy mt-[30px]'>
            If Crypto Labs receives a counter notification that does not substantially comply with the above requirements, Crypto Labs may, in its discretion, contact the user or to take other steps to assist in the receipt of a valid counter notification, but it need not do so.
          </p>
          <p className='text-[36px] text-white font-gilroy font-semibold mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
            D. Record Keeping
          </p>
          <p className='text-[18px] text-white font-gilroy mt-[30px]'>
            The Designated Agent will maintain (1) copies of all notifications of claimed copyright infringement and counter notifications received by Crypto Labs; (2) records of the dates of receipt of such notifications and counter notifications, the senders, the identified materials or references or links to materials, the action(s) taken in response to the notifications and counter notifications, and the dates of those actions; (3) an index or database linking the information to specific users, specific copyright claimants, and specific copyright owner agents; (4) records of actions to remove or disable access to material or activities for other reasons; and (5) records of terminations of users for copyright-related reasons.
          </p>
          <p className='text-[36px] text-white font-gilroy font-semibold mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
            E. Removal of Materials without Dedicated Notice
          </p>
          <p className='text-[18px] text-white font-gilroy mt-[30px]'>
            We may also make an administrative decision to remove material (including removal of certain categories or types of material) even if we have no specific indications that infringement is present, especially when we believe that removal may reduce the potential for controversy.
          </p>
          <p className='text-[36px] text-white font-gilroy font-semibold mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
            F. Repeat Infringer Termination Policy
          </p>
          <div className='text-[18px] text-white flex flex-col font-gilroy mt-[30px] gap-[15px]'>
            <p>It is Crypto Labs’ policy to terminate the users whose actions or material have been the subject of numerous notifications of claimed infringement that suggest a persistent disregard of copyright rights. Crypto Labs is not in a position to adjudicate claims of infringement; that requires investigation and legal analysis (which are not part of our business) and knowledge of facts that are rarely available to us. We cannot easily articulate in advance what evidences a pattern of behavior that suggests persistent disregard of copyright law, and some complainants use strategies to exaggerate claims. Nevertheless, we will not require strict proof of copyright infringement before we take action: it will be enough for us if we determine that a user has caused an inordinate amount of controversy involving copyright infringement accusations against the user.</p>
            <p>We will consider the source of the accusation (both the claimant of the copyright rights and any agent transmitting the complaint) for credibility, taking into account public information about the source of the complaint and the context of the complaint. For example, a major motion picture studio is likely to be considered credible. On the other hand, a government official complaining about a user of a political campaign or a dissident organization may not be considered credible. We will tend to act on complaints from credible sources, and we may not act on complaints from sources that lack credibility.</p>
            <p>We will look at the facts in the accusation to determine whether they suggest a pattern of repeated conduct evidencing violations of, or disregard of, copyright law. It is also our policy to provide the user notice before terminating a user. Our considerations and practices may include:</p>
          </div>
          <ul className='mt-[30px] text-white font-gilroy flex flex-col text-[18px] gap-[15px] list-disc pl-7'>
            <li>Dif erent alleged infringements occurring at dif erent times spaced apart may suggest a pattern of repeated conduct.
              Accusations of copyright violations from passive behavior or from a static condition likely do not suggest a persistent disregard of copyright rights.</li>
            <li>Responses by a user that call into question the accuracy or good faith of a notification of claimed infringement, whether or not the responses are formal counter notifications, may be taken into account.</li>
            <li>First action: Where we receive a complaint that reasonably alleges an episode of infringement, we will notify the individual about the complaint, remind the person that we have a policy of terminating repeat infringers, and demand that the person halt, and avoid in the future, all actions that infringe upon others’ rights. This is a “first warning.”</li>
            <li>Termination after a further complaint regarding continuing alleged misconduct: Where we receive a further complaint that reasonably alleges a new episode of infringement more than 14 days after the date of our “first warning” resulting from an earlier complaint, we will terminate the user without further warning. This provision applies independently of other warning provisions below; in other words, this may be stricter than other provisions.</li>
            <li>Our policy allows a user 14 days from the date of a warning to “clean up” any activities that have prompted an accusation, because multiple complaints regarding a single 14-day period may really pertain to a single episode of behavior and do not necessarily suggest repeated and persistent wrongdoing.</li>
            <li>Further complaints regarding new misconduct: Where we receive a further complaint that reasonably alleges new and different episode of infringement by the same user occurring more than 14 days, but less than 180 days, after the date of a “first warning,” we will issue a “second warning.”</li>
            <li>Termination after a further complaint regarding new alleged misconduct. Where we receive a further complaint that reasonably alleges new and different episode of infringement by the same user occurring more than 14 days, but less than 180 days, after the date of our second warning, we will terminate the user without further warning.
              180-day “lifetime” of warnings: Where we receive no complaint about activities of a user for a 166-day period that begins 14 days after a warning, the process restarts.</li>
            <li>Our focus is on the dates that the episode of infringement occurred, not necessarily on the reporting date or date of detection. This prevents complainants from gaming the system to create the illusion of repeated and persistent alleged infringements.</li>
          </ul>
          <p className='text-[18px] text-white font-gilroy mt-[30px]'>
            Crypto Labs informs users through its Copyright Information Page that it may terminate the users repeatedly accused of infringement.
          </p>
          <p className='text-[36px] text-white font-gilroy font-semibold mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
            G. Responding to Subpoenas
          </p>
          <div className='text-[18px] text-white flex flex-col font-gilroy mt-[30px] gap-[15px]'>
            <p>If any employee of Crypto Labs receives a subpoena regarding a user or activity or material associated with that user, the employee should forward the subpoena to the Designated Agent.</p>
            <p>The Designated Agent will review the subpoena and will consult with counsel if necessary regarding the validity of the subpoena.</p>
            <p>While Crypto Labs cooperates fully with any intellectual property owner seeking to enforce its intellectual property rights, we also recognize that there are user privacy issues involved. Accordingly, upon receipt of a subpoena, Crypto Labs will notify the user prior to responding that we have received the subpoena and let them know that we will respond by the due date unless we receive a valid court order instructing us not to respond.</p>
          </div>
          <p className='text-[36px] text-white font-gilroy font-semibold mt-[40px] lg:mt-[60px] leading-[40px] md:leading-[65px]'>
            H. Informing Users
          </p>
          <div className='text-[18px] text-white flex flex-col font-gilroy mt-[30px] gap-[15px]'>
            <p>It is Crypto Labs’ policy to inform users regarding their obligations to comply with copyright law and our policy of terminating repeat infringers in appropriate circumstances. To that end, we have implemented the following steps:</p>
          </div>
          <ul className='mt-[30px] text-white font-gilroy flex flex-col text-[18px] gap-[15px] list-decimal pl-7'>
            <li>Posted our Copyright Information on a page that can be found through the Legal link included in the footer of every page of the websites.</li>
            <li>Included language in the terms and conditions, which must be accepted to use Crypto Labs’ Services, that the user indicates that she or he has all necessary rights, including copyrights, to use in Crypto Labs’ services, system, or network and recognizes our policy of terminating repeat infringers in appropriate circumstances and in our discretion.</li>
            <li>Communicate through Crypto Labs’ Community Forums in a manner that discourages posting of materials that infringe others’ copyrights and reminds users about the Copyright information Page. Crypto Labs cannot monitor all user postings or its Global Customer Care, Support Forums, or Support Community Forums to ensure that non-conforming postings or discussions do not take place. Crypto Labs cannot guarantee that non-conforming matter does not appear.</li>
          </ul>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default CopyrightPolice;