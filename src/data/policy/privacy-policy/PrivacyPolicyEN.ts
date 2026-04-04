import {IPolicy} from "@/data/policy/model/IPolicy";

export const PrivacyPolicyEN: IPolicy = {
    title: "Privacy Policy",
    subTitle: "Introduction",
    description:
        "Chorn Planet respects privacy and follows a privacy-minimal approach by design. This Privacy Policy explains how information is handled in connection with the use of the Chorn Planet website, including the limited and consent-based use of cookies for analytical purposes. The Website does not collect personal data by default.",
    contents: [
        {
            title: "1. Information Collected",
            details: [
                {
                    title: "1.1 Personal Information",
                    description:
                        "Chorn Planet does not collect personally identifiable information from visitors as a default practice. No personal data such as names, contact details, or identifiers is requested or required to access the Website. Where analytics cookies are enabled with user consent, only anonymized and aggregated usage data may be processed."
                }
            ]
        },
        {
            title: "2. Cookies",
            description: "",
            details: [
                {
                    title: "2.1 Cookie Usage",
                    description:
                        "The Website uses cookies only where explicit consent is provided through the Cookie Consent Modal. Cookies are small text files stored on a user’s device and are used solely to support basic analytical understanding of Website usage and performance."
                },
                {
                    title: "2.2 Analytics Services",
                    description:
                        "Where consent is given, anonymized usage data may be collected through third-party analytics services such as Google Analytics. This data may include general information such as page views, navigation patterns, and approximate usage statistics. Chorn Planet does not use analytics data for profiling, marketing, or cross-site tracking, and no personally identifiable information is intentionally collected."
                },
                {
                    title: "2.3 User Choices",
                    description:
                        "Users may accept or decline cookies through the Cookie Consent Modal at any time. Cookie preferences may also be managed through browser settings. Declining cookies will not restrict access to the Website, but may limit the availability of aggregated usage insights."
                }
            ]
        },
        {
            title: "3. Data Security",
            description: "",
            details: [
                {
                    title: "3.1 Security Measures",
                    description:
                        "Appropriate technical and organizational measures are implemented to protect anonymized and non-personal data processed in connection with the Website. Chorn Planet does not store personal data unless explicitly required and consented to by the user."
                }
            ]
        },
        {
            title: "4. Third-Party Links",
            description: "",
            details: [
                {
                    title: "4.1 External Websites",
                    description:
                        "The Website may contain links to external or third-party websites. Chorn Planet is not responsible for the privacy practices, policies, or content of such external sites. Users are encouraged to review the privacy policies of any third-party websites they choose to visit."
                }
            ]
        },
        {
            title: "5. Changes to the Privacy Policy",
            description: "",
            details: [
                {
                    title: "5.1 Policy Updates",
                    description:
                        "This Privacy Policy may be updated from time to time to reflect changes in legal requirements or Website practices. Any updates will take effect upon publication on this page. Continued use of the Website following such updates constitutes acknowledgment of the revised Privacy Policy."
                }
            ]
        }
    ]
};
