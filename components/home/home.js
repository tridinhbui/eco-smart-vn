
import React from "react";
import Image from 'next/image';
import logo from '../../public/images/ess_logo.jpg';
import { SLOGAN_TEXT } from '../../config/text';

export default function Slogan() {
  return (
    <div className = "slogan-area" >
      <div className="image">
        <Image src={logo} alt="ess-logo"/>
      </div>
      <div className="content">
        <h1 className="heading1">{SLOGAN_TEXT.name}</h1>
        <h2 className="heading2">{SLOGAN_TEXT.slogan1}</h2>

        <p className="heading3">
          {SLOGAN_TEXT.slogan2}
        </p>

      </div>
    </div>
  );
}