import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks";

const MPass = () => {
  const { setUser } = useAuth();
  const { push } = useRouter();
  const [img, setImg] = useState("/images/mpass-screen.png");

  const handleClick = () => {
    if (img === "/images/mpass-screen-filled.png") {
      // TODO: add  axios login
      setUser({ name: "MPass", id: 123 });
      push("/profile/complete");
    } else {
      setImg("/images/mpass-screen-filled.png");
    }
  };

  return (
    <>
      <Head>
        <title>MPass - Autentificare</title>
        <link rel="icon" href="/images/mpass.png" />
      </Head>
      <div onClick={handleClick}>
        <img src={img} alt="MPass" width="100%" />
      </div>
    </>
  );
};

export default MPass;
