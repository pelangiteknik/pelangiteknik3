'use client'
import styles from '@/components/listProduct.module.css'
import convertToRupiah from '@/utils/ConvertRupiah'
import useWindowDimensions from '@/utils/getWindowDimensions'
import { useStore } from "@/zustand/zustand";
import Image from 'next/image'
import { useState } from 'react'
import { CiFilter } from "react-icons/ci";
import Judul from './judul';
import Link from 'next/link';

export default function ListProduct({ Listdata, FilterCategory, Lfilter, pencarian }) {
    const { width } = useWindowDimensions()
    const kondisiLebar = width <= 1000

    const [kategori, setKategori] = useState(!kondisiLebar)
    const handleKategori = () => {
        kondisiLebar ? setKategori(!kategori) : setKategori(true)
    }
    const searchTerm = useStore((state) => state.searchTerm)

    return (
        <div className={styles.container}>
            <div className={styles.dalamkontainer}>
                {pencarian && <Judul judul={searchTerm} />}
                <div className={styles.bawah}>
                    {Lfilter &&
                        <div className={styles.filter}>
                            <div className={styles.judul} onClick={handleKategori}>
                                <div className={styles.text}>Category</div>
                                <div className={styles.icon}><CiFilter /></div>
                            </div>

                            {kategori &&
                                <div className={styles.kategori}>
                                    {FilterCategory?.map((data, i) => {
                                        return (
                                            <Link href={`/category/` + data.slugCategory}>
                                                <div
                                                    key={i}
                                                    className={styles.list}>
                                                    <div className={styles.gambarikon}>
                                                        <Image
                                                            src={data.icon}
                                                            width={30}
                                                            height={30}
                                                            alt='ok'
                                                        ></Image>
                                                    </div>
                                                    <div className={styles.text}>
                                                        {data?.category}
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </div>
                            }
                        </div>
                    }
                    <div className={styles.listproduct}>
                        <div className={styles.grid}>
                            {Listdata?.map((data, i) => {

                                return (
                                    <div
                                        className={styles.kotak}
                                        key={i}>
                                        <Link href={`/product/${data?.slugProduct}`}>
                                            <div className={styles.gambarbawah}>
                                                <Image
                                                    src={data?.imageProductUtama?.secure_url}
                                                    alt={data?.productName}
                                                    width={250}
                                                    height={200}
                                                >
                                                </Image>
                                                <div className={styles.wm}>
                                                    <Image
                                                        src={`${process.env.NEXT_PUBLIC_URL}/wm.png`}
                                                        alt={'wm'}
                                                        width={250}
                                                        height={200}
                                                    >
                                                    </Image>
                                                </div>
                                            </div>
                                            <div className={styles.name}>
                                                {data?.productName}
                                            </div>

                                            <div className={styles.price}>
                                                {convertToRupiah(Number(data?.productPriceFinal))}
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
