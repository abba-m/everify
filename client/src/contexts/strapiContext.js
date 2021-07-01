import React from "react";
import Strapi from "strapi-sdk-javascript";

const StrapiContext = React.createContext();

function StrapiContextProvider(props) {
  const value = new Strapi("http://localhost:1337");

  return <StrapiContext.Provider value={value} {...props} />;
}

export { StrapiContext, StrapiContextProvider };
