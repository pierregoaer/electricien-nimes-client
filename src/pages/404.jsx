import React, {useState, useEffect} from 'react';

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
        <div>
            Oops cette page n'éxiste pas!
        </div>
    );
}
