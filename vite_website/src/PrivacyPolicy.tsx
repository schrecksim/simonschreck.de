import {useIntlayer} from "react-intlayer";
import HeaderSubpage from "./components/header/HeaderSubpage.tsx";
import Footer from "./components/footer/Footer.tsx";
import {useI18nHTMLAttributes} from "./hooks/useI18nHTMLAttributes.tsx";
import ResponsibleInstance from "./components/contact/ResponsibleInstance.tsx";
import ElectronicContact from "./components/contact/ElectronicContact.tsx";

const PrivacyPolicy = () => {
    useI18nHTMLAttributes();
    const content = useIntlayer("privacypolicy");
    return (
        <div>
            <HeaderSubpage/>
            <main>
                    <h1>{content.h1}</h1>
                    <p>{content.intro}</p>

                    <h2>{content.h_collection}</h2>
                    <p>{content.t1_collection}</p>
                    <p>{content.t2_collection}</p>
                    <p>{content.t3_collection}</p>
                    <p>{content.t4_collection}</p>
                    <p>{content.t5_collection}</p>
                    <p>{content.t6_collection}</p>

                    <h2>{content.h_hosting}</h2>
                    <p>{content.t1_hosting}</p>
                    <p>{content.t2_hosting}</p>
                    <p>{content.t3_hosting}</p>
                    <p>{content.t4_hosting}</p>
                    <p>{content.hoster_name}</p>
                    <p>{content.hoster_adress}</p>
                    <p>{content.hoster_area}</p>
                    <p>{content.country}</p>
                    <h3>{content.h_hosting_contract}</h3>
                    <p>{content.t_hosting_contract}</p>

                    <h2>{content.h_general}</h2>
                    <p>{content.t1_general}</p>
                    <p>{content.t2_general}</p>
                    <p>{content.t3_general}</p>
                    <h3>{content.h_responsible}</h3>
                    <p>{content.t1_responsible}</p>
                    <ResponsibleInstance/>
                    <ElectronicContact/>
                    <p>{content.t2_responsible}</p>
                    <h3>{content.h_saving}</h3>
                    <p>{content.t_saving}</p>
                    <h3>{content.h_legal_foundation}</h3>
                    <p>{content.t_legal_foundation}</p>
                    <h3>{content.h_reciever}</h3>
                    <p>{content.t_reciever}</p>
                    <h3>{content.h_right_to_object}</h3>
                    <p>{content.t1_right_to_object}</p>
                    <p>{content.t2_right_to_object}</p>
                    <h3>{content.h_right_complaint}</h3>
                    <p>{content.t_right_complaint}</p>
                    <h3>{content.h_right_portabolity}</h3>
                    <p>{content.t_right_portability}</p>
                    <h3>{content.h_are}</h3>
                    <p>{content.t_are}</p>
                    <h3>{content.h_restriction}</h3>
                    <p>{content.t1_restriction}</p>
                    <ul>
                            <li>{content.l1_restriction}</li>
                            <li>{content.l2_restriction}</li>
                            <li>{content.l3_restriction}</li>
                            <li>{content.l4_restriction}</li>
                    </ul>
                    <p>{content.t2_restriction}</p>
                    <h3>{content.h_encryption}</h3>
                    <p>{content.t_encryption}</p>

                    <h2>{content.h_collection}</h2>
                    <p>{content.t1c_collection}</p>
                    <p>{content.t2c_collection}</p>
                    <p>{content.t3c_collection}</p>
            </main>
            <Footer/>
        </div>
    );
};

export default PrivacyPolicy;