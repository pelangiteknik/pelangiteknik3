'use client'
import styles from '@/components/product.module.css'
import { FaWhatsapp } from "react-icons/fa";
import convertToRupiah from '@/utils/ConvertRupiah'
import ProductDetail from '@/components/productDetail';
import ProductSpecs from '@/components/productSpecs';
import ProductBeliMobile from "@/components/productBeliMobile";
import { useState, useEffect } from 'react';
import { FaCaretUp } from "react-icons/fa"
import { useStore } from '@/zustand/zustand';
import { useAuth } from '@clerk/nextjs'
import { usePathname, useRouter } from 'next/navigation';
import EmblaCarousel from '@/components/EmblaCarousel'

export default function Product({ data }) {
    const pathname = usePathname()

    const router = useRouter()
    const { isLoaded, userId, sessionId, getToken } = useAuth()

    const isIntersecting = useStore((state) => state.isIntersecting)

    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(isLoaded)
    }, [])


    const handleBeliSekarang = async () => {
        if (userId) {
            alert('okkokokko')
        } else {
            localStorage.setItem("urlPrev", pathname);
            router.push('/sign-in')
        }
    }


    const handleWhatsapp = async () => {

        // router.push('https://wa.me/+628971041460?text=halooo%20selamat%20pagi%2C%20')
    }

    const [pilihan, setPilihan] = useState('detail')

    const handlePilihBawah = (e) => {
        e == 'detail' && setPilihan('detail')
        e == 'specs' && setPilihan('specs')
    }


    const dataGambarUtama = [data.imageProductUtama]
    const dataListGambar = data?.url_image_product

    const GabungDataGambar = [...dataGambarUtama, ...dataListGambar]

    return (
        <div className={styles.container}>
            <div className={styles.dalamcontainer}>

                <div className={styles.atas}>
                    <div className={styles.swipperexluar}>
                        <div className={styles.swipperex}>
                            <EmblaCarousel data={GabungDataGambar} />
                        </div>
                    </div>

                    <div className={styles.review}>
                        <div className={styles.judul}>
                            {data?.productName}
                        </div>

                        <div className={styles.price}>
                            {convertToRupiah(Number(data?.productPriceFinal))}
                        </div>
                        <div className={styles.buu}>
                            <div className={styles.stock}>
                                Stock:  {data?.stockProduct}
                            </div>
                            <button onClick={handleBeliSekarang}>
                                Beli Sekarang
                            </button>
                            <button onClick={handleWhatsapp} className={styles.whatsapp}>
                                <FaWhatsapp /> &nbsp; Whatsapp
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles.bawah}>
                    <div className={styles.bawahjudul}>
                        <div
                            className={styles.detailjudul}
                            style={pilihan == 'detail' ? { background: 'var(--colorthrid)', color: 'var(--colorsekunder)' } : {}}
                            onClick={() => handlePilihBawah('detail')}
                        >
                            Detail
                            {pilihan == 'detail' && <div className={styles.ikon}><FaCaretUp size={30} /></div>}
                        </div>

                        <div
                            className={styles.detailjudul}
                            onClick={() => handlePilihBawah('specs')}
                            style={pilihan == 'specs' ? { background: 'var(--colorthrid)', color: 'var(--colorsekunder)' } : {}}
                        >
                            Specs
                            {pilihan == 'specs' && <div className={styles.ikon}><FaCaretUp size={30} /></div>}
                        </div>
                    </div>
                    <div className={styles.bawahpilihan}>
                        {pilihan == 'detail' && <ProductDetail data={data?.descProduct} />}
                        {pilihan == 'specs' && <ProductSpecs data={data?.spec_product} />}
                    </div>
                </div>
                {!isIntersecting &&
                    <ProductBeliMobile
                        handleBeliSekarang={handleBeliSekarang}
                        handleWhatsapp={handleWhatsapp}
                        price={convertToRupiah(Number(data?.productPriceFinal))}
                        stock={data?.stockProduct}
                    />}

            </div>
        </div >
    )
}
