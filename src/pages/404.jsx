import React from 'react';
import Layout from "../components/Layout";

export function Head() {
    return (
        <>
            <title></title>
            <meta name="description" content=""/>
            <meta name="robots" content="index, follow"/>
            <meta property="og:url" content="https://eletricien-nimes.com"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content=""/>
            <meta property="og:description" content=""/>
            <meta property="og:image" content=""/>
        </>
    )
}

export default function Page404() {
    return (
        <Layout>
            <div>
                Cette page n'existe pas!
            </div>
        </Layout>
    );
}
