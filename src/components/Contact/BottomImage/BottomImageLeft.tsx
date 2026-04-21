import React from "react";
import Image from "next/image";
import { ImageUrl } from "@/image/ImageUrl";

export default function BottomImageLeft() {
  return (
    <div className="social-left">
      <div className="left-row">
        <div className="about-icon-symbol">
          <a href="https://chornplanet.com" className="chorn" target="_self">
            <Image
              src={ImageUrl.logo.rec.sm.path}
              alt={ImageUrl.logo.rec.sm.title}
              width={30}
              height={30}
              style={{ width: "auto", height: "auto" }}
            />
          </a>
        </div>
        <div className="chorn-text">
          <a href="https://chornplanet.com" target="_self">
            www.chornplanet.com
          </a>
        </div>
      </div>
    </div>
  );
}
