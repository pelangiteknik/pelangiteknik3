'use client'

import Image from "next/image";
import styles from '@/components/category.module.css'
import Link from "next/link";

export default function Category({ data }) {
    return (
        <div className={styles.container}>
            <div className={styles.dalamcontainer}>
                <div className={styles.grid}>
                    {data?.map((data, i) => {

                        return (
                            <Link
                                key={i}
                                // target="_blank"
                                href={`/category/` + data?.slugCategory}
                                className={styles.kotakisi}>
                                <div className={styles.gambar}>
                                    <Image
                                        src={data?.icon}
                                        alt={data?.category}
                                        width={200}
                                        height={200}
                                    ></Image>
                                </div>
                                <div className={styles.text}>{data?.category}</div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
