import React from "react";
import ContactLeft from "@/components/Contact/ContactLeft";
import ContactRight from "@/components/Contact/ContactRight";
import {ContactGalleryBottom} from "@/components/Contact/ContactGalleryBottom";
import {IContact, IContactSocialLink} from "@/lib/model/IContact";

export default function ContactContent({
    contact,
    socialLinks,
}: {
    contact: IContact;
    socialLinks: IContactSocialLink[];
}) {
    return (
        <>
            <div className="about-area pb-70">
                <div className="container">
                    <h1>{contact.contactInfo.title}</h1>
                    <div className="row">
                        <ContactLeft/>
                        <ContactRight contact={contact} socialLinks={socialLinks}/>
                    </div>
                </div>

                <ContactGalleryBottom/>
            </div>
        </>
    );
}
