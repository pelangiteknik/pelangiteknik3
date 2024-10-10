'use client'
import { SignIn } from '@clerk/nextjs'
import HeaderFooter from "@/components/layout/headerFooter";
import { useState, useEffect } from 'react';

export default function Page() {
    const [url, setUrl] = useState()

    useEffect(() => {
        const urlPrev = localStorage.getItem("urlPrev");
        setUrl(urlPrev)
    }, [])
    return (
        <HeaderFooter>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '30px 0', fontSize: '100px!important' }}>
                <SignIn forceRedirectUrl={`${process.env.NEXT_PUBLIC_URL}/${url}`} />
            </div>
        </HeaderFooter>
    )
}