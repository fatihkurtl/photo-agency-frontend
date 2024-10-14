"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import type { ISeoData } from "@/interfaces/general";


export default function SeoComp() {

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [seoData, setSeoData] = useState<ISeoData[]>([]);

    return (
        <Head>
            <title>{seoData[0]?.title || "aaaaaaaa"}</title>
            <meta name="description" content={seoData[0]?.description || "aaaaaaaaaaaaa"} />
            <meta name="keywords" content={seoData[0]?.keywords || ""} />
            <meta name="author" content={seoData[0]?.author || ""} />
            <meta property="og:title" content={seoData[0]?.ogTitle || ""} />
            <meta property="og:description" content={seoData[0]?.ogDescription || ""} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={seoData[0]?.ogUrl || ""} />
            <meta property="og:image" content={seoData[0]?.ogImage || ""} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seoData[0]?.twitterTitle || ""} />
            <meta name="twitter:description" content={seoData[0]?.twitterDescription || ""} />
            <meta name="twitter:image" content={seoData[0]?.twitterImage || ""} />
            <link rel="icon" href={`${seoData[0]?.favicon || ""}?v=${new Date().getTime()}`} type="image/x-icon" />
        </Head>
    )
}