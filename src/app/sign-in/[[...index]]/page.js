'use client'
import { SignIn } from '@clerk/nextjs'
import HeaderFooter from "@/components/layout/headerFooter";
import { useState, useEffect } from 'react';
import { GetListKategori } from "@/service/userNew";

export default async function Page() {
    const [url, setUrl] = useState()

    useEffect(() => {
        const urlPrev = localStorage.getItem("urlPrev");
        setUrl(urlPrev)
    }, [])

    const [dataKategori] = await Promise.all([
        GetListKategori()
    ])
    return (
        <HeaderFooter data={dataKategori}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '30px 0', fontSize: '100px!important' }}>
                <SignIn forceRedirectUrl={`${process.env.NEXT_PUBLIC_URL}/${url}`} />
            </div>
        </HeaderFooter>
    )
}