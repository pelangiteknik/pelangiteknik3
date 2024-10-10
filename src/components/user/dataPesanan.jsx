'use client'
import HeaderFooter from "@/components/layout/headerFooter";
import styles from '@/components/user/dataPesanan.module.css'
import convertToRupiah from "@/utils/ConvertRupiah";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { PiCodesandboxLogoDuotone } from "react-icons/pi";
import { IoChevronBack } from "react-icons/io5";
import { PiSignOut } from "react-icons/pi";
import CustomLink from "@/lib/CustomLink";


export default function DataPesanan() {
    const { data: session } = useSession()

    const orders = [
        {
            id: "ORD001",
            product: "Genset Portable 1000W",
            quantity: 1,
            status: "Delivered",
            image: "/genset-1000w.jpg?height=80&width=80",
            price: 500.00
        },
        {
            id: "ORD002",
            product: "Genset Diesel 5000W",
            quantity: 1,
            status: "Processing",
            image: "/genset-diesel-5000w.jpg?height=80&width=80",
            price: 1200.00
        },
        {
            id: "ORD003",
            product: "Genset Solar 3000W",
            quantity: 2,
            status: "Shipped",
            image: "/genset-solar-3000w.jpg?height=80&width=80",
            price: 900.00
        },
        {
            id: "ORD004",
            product: "Genset Mini Portable 500W",
            quantity: 1,
            status: "Delivered",
            image: "/genset-mini-500w.jpg?height=80&width=80",
            price: 200.00
        },
        {
            id: "ORD005",
            product: "Genset Gasoline 2000W",
            quantity: 1,
            status: "Processing",
            image: "/genset-gasoline-2000w.jpg?height=80&width=80",
            price: 600.00
        }
    ]

    const router = useRouter()
    return (
        <HeaderFooter >
            <div className={styles.container}>
                <div className={styles.dalamcontainer}>
                    <div className={styles.atassendiri}>
                        <CustomLink back={'back'}>
                            <div className={styles.kiri}>
                                <IoChevronBack />Back
                            </div>
                        </CustomLink>
                        {/* <div className={styles.kanan} onClick={handleSignOut} >Sign Out<PiSignOut /></div> */}
                        <h1>Orderan</h1>
                    </div>
                    <div className={styles.listorder}>
                        {orders?.map((data) => {
                            return (
                                <div className={styles.kotak}>
                                    <div className={styles.atas}>
                                        <div className={styles.gambar}></div>
                                        <div className={styles.text}>
                                            <div className={styles.judul}>{data?.product}</div>
                                            <div className={styles.idorder}>#{data?.id}</div>
                                        </div>
                                    </div>
                                    <div className={styles.bawah}>
                                        <div className={styles.kiri}>
                                            <PiCodesandboxLogoDuotone /> &nbsp; Qty: {data?.quantity}
                                        </div>
                                        <div className={styles.kanan}>
                                            <div className={styles.status} style={data?.status != "Delivered" ? { background: 'var(  --colorsekunder)', color: 'var(--colorthrid)' } : {}}>
                                                {data?.status}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.bawah}>
                                        <div className={styles.kiri}>
                                            <div className={styles.harga}>
                                                {convertToRupiah(data?.price * data?.quantity)}
                                            </div>
                                        </div>
                                        <div className={styles.kanan}>
                                            <div className={styles.hargaori}>
                                                {convertToRupiah(data?.price)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </HeaderFooter >
    )
}
