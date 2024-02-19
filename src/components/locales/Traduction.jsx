import React, { Suspense } from "react";

// import "./App.css";

import  "../../i18n.js";

import Introduction from "./Introduction";

import Advantages from "./Advantages";

import LanguageSelector from "./LanguageSelector";


const Traduction = () => {

  return (

    <div>

      <Suspense fallback={null}>

        <LanguageSelector />

        <Introduction />

        <Advantages />

      </Suspense>

    </div>

  );

};


export default Traduction;