'use server'
import { revalidatePath } from 'next/cache';

export const UpsertUser = async (data) => {
    try {
        await fetch(`${process.env.NEXT_PUBLIC_URL_API}/api/cart/createUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${process.env.NEXT_PUBLIC_SECREET}`
            },
            body: JSON.stringify(data),
            next: {
                revalidate: 0
            }

        });
    }
    catch (err) {
        console.log(err);
    }
    revalidatePath('/')
}


export const GetListKategori = async (data) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/api/p/listKategori`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${process.env.NEXT_PUBLIC_SECREET}`
            },
            next: {
                revalidate: 0
            }
        });
        const data = await res.json()
        return data.data
    }
    catch (err) {
        console.log(err);
    }
    revalidatePath('/')
}

export const GetListProduct = async (data) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/api/p/listProduct`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${process.env.NEXT_PUBLIC_SECREET}`
            },
            next: {
                revalidate: 0
            }
        });
        const data = await res.json()
        return data.data
    }
    catch (err) {
        console.log(err);
    }
    revalidatePath('/')
}


export const GetProduct = async (id) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/api/p/product?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${process.env.NEXT_PUBLIC_SECREET}`
            },
            next: {
                revalidate: 0
            }
        });
        const data = await res.json()
        return data.data
    }
    catch (err) {
        console.log(err);
    }
    revalidatePath('/')
}
export const GetKategori = async (id) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/api/p/kategori?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${process.env.NEXT_PUBLIC_SECREET}`
            },
            next: {
                revalidate: 0
            }
        });
        const data = await res.json()
        return data.data
    }
    catch (err) {
        console.log(err);
    }
    revalidatePath('/')
}


export const GetSearch = async (id) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/api/p/SProduct?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${process.env.NEXT_PUBLIC_SECREET}`
            },
            next: {
                revalidate: 0
            }
        });
        const data = await res.json()
        return data.data
    }
    catch (err) {
        console.log(err);
    }
    revalidatePath('/')
}
