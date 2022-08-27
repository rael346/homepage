import { useTheme } from "next-themes";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";

type MainLayout = {
  children: React.ReactNode;
};

const Main: React.FC<MainLayout> = ({ children }) => {
  const router = useRouter();

  const meta = {
    title: "Duy Tran - Student Dev",
    description: `Duy Tran's Personal Website`,
    url: "https://duytran.me",
    image: "",
    type: "website",
  };

  return (
    <div className="bg-slate-200 dark:bg-slate-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Duy Tran's homepage" />
        <meta name="author" content="Duy Tran" />
        <meta content={meta.description} name="description" />
        <link rel="canonical" href={`${meta.url + router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Duy Tran" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:url" content={`${meta.url + router.asPath}`} />
      </Head>

      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Main;
