import React from "react";

export const SchemaMarkupHomePage: React.FC = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Chorn Planet",
        "url": "https://chornplanet.com",
        "logo": "https://chornplanet.com/images/logo-2025/chorn-logo-2025-circle-md.png",
        "sameAs": [
            "https://www.facebook.com/chorn",
            "https://twitter.com/chorn",
            "https://www.linkedin.com/company/chornplanet"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData)}}
        />
    );
};
