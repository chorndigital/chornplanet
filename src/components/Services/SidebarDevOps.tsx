"use client";

import React from "react";
import Link from "next/link";
import {useEffect, useState} from 'react';
import {IDevOpsStack} from "@/lib/model/IDevOps";
import Image from "next/image";
import {IDevOps} from "@/lib/model/IDevOps";

export default function SidebarDevOps({lang, devOps}: { lang: string; devOps: IDevOps }) {
    const [currentUrl, setCurrentUrl] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentUrl(window.location.href);
        }
    }, [currentUrl]);

    return (
        <>
            <div className="services-details-information ml-10 border-top">
                <ul className="framework-list">
                    {devOps.stacks.map((item: IDevOpsStack, index: number) => {
                        if (currentUrl.includes(item.link)) {
                            return (
                                <li key={index}>
                                    <Link href={'/' + lang + item.link} className="active">
                                        <Image src={item.image} alt={item.alt} width="40" height="40"/>
                                        <span className="px-3">{item.features[0].title}</span>
                                    </Link>
                                </li>
                            )
                        }

                        return (
                            <li key={index}>
                                <Link href={'/' + lang + item.link}>
                                    <Image src={item.image} alt={item.alt} width="40" height="40"/>
                                    <span className="px-3">{item.features[0].title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
