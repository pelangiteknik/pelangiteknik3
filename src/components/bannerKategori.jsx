import styles from '@/components/bannerKategori.module.css'
import Image from 'next/image'

export default function BannerKategori({ data }) {
    return (
        <div className={styles.container} >
            <div className={styles.dalamkontainer}>
                <div className={styles.banner}>
                    <div className={styles.text}>
                        <div className={styles.judul}>
                            {data?.category} by Pelangi Teknik
                        </div>
                        <div className={styles.desc}>
                            {data?.desc}
                        </div>
                    </div>

                    <div className={styles.gambar}>
                        <Image
                            src={data?.image}
                            width={1000}
                            height={550}
                            alt={data?.category}
                        ></Image>
                    </div>

                </div>
            </div>
        </div>

    )
}
