'use client'
import styles from '@/components/product.module.css'
import { FaWhatsapp } from "react-icons/fa";
import convertToRupiah from '@/utils/ConvertRupiah'
import Image from 'next/image';
import ProductDetail from '@/components/productDetail';
import ProductSpecs from '@/components/productSpecs';
import ProductBeliMobile from "@/components/productBeliMobile";
import { useRef, useState } from 'react';
import { FaCaretUp } from "react-icons/fa"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, FreeMode } from 'swiper/modules';
import { useStore } from '@/zustand/zustand';
import { useRouter } from 'next/navigation';
import { useSession, signIn, signOut } from "next-auth/react"

export default function Product({ data }) {
    const router = useRouter()
    const dataku = data?.data
    const isIntersecting = useStore((state) => state.isIntersecting)

    const { data: session } = useSession()
    console.log(session);

    const handleBeliSekarang = async () => {
        await signIn("google", {
            redirect: false,  // Disable automatic redirect
            callbackUrl: "/", // URL tujuan setelah login berhasil
        });
    }

    const handleWhatsapp = async () => {

        // router.push('https://wa.me/+628971041460?text=halooo%20selamat%20pagi%2C%20')
    }

    const [pilihan, setPilihan] = useState('detail')

    const handlePilihBawah = (e) => {
        e == 'detail' && setPilihan('detail')
        e == 'specs' && setPilihan('specs')
    }

    // SWIPEER
    const swiperRef = useRef(null);
    // const goNext = () => {
    //     if (swiperRef.current && swiperRef.current.swiper) {
    //         swiperRef.current.swiper.slideNext();
    //     }
    // };
    // const goPrev = () => {
    //     if (swiperRef.current && swiperRef.current.swiper) {
    //         swiperRef.current.swiper.slidePrev();
    //     }
    // };
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    // const { height, width } = useWindowDimensions()
    // const kondisiLebarTumb = width <= 1133 && width - 607
    // const hasWindow = typeof window !== 'undefined';
    // const [kondisiLebar, setKondisiLebar] = useState('')

    // const mediaMatch = hasWindow ? window.matchMedia('(max-width: 768px)').matches : null

    return (
        <div className={styles.container}>
            <div className={styles.dalamcontainer}>

                <div className={styles.atas}>
                    <div className={styles.swipperexluar}>
                        <div className={styles.swipperex}>

                            <Swiper
                                modules={[FreeMode, Thumbs, Pagination]}
                                thumbs={{ swiper: thumbsSwiper }}
                                pagination={{
                                    type: 'fraction',
                                }}
                                ref={swiperRef}
                                loop={true}
                                zoom={true}
                                className='mySwipper2'
                                id='mysW'
                            >

                                {dataku?.productImages?.map((data, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <Image
                                                src={data?.image}
                                                width={500}
                                                height={500}
                                                alt={data?.id}>
                                            </Image>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>

                            {/* BAWAH DESKTOP GAMBAR */}
                            <div className={styles.bawahsildder}>
                                <Swiper
                                    loop={false}
                                    onSwiper={setThumbsSwiper}
                                    spaceBetween={5}
                                    slidesPerView={'auto'}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Thumbs]}
                                    className='mySwipper'
                                // style={{ width: kondisiLebarTumb }}
                                >
                                    {dataku?.productImages.map((data, i) => {
                                        return (
                                            <SwiperSlide key={i}><Image src={data?.image} width={500} height={500} alt={data?.id}></Image></SwiperSlide>
                                        )
                                    })}

                                </Swiper>
                                {/* <div className={styles.tombolnextprev}>
                                <div onClick={goPrev}><IoIosArrowBack className={styles.logo} /></div>
                                <div onClick={goNext}><IoIosArrowForward className={styles.logo} /></div>
                            </div> */}
                            </div>

                        </div>
                    </div>

                    <div className={styles.review}>
                        <div className={styles.judul}>
                            {dataku?.name}
                        </div>

                        <div className={styles.price}>
                            {convertToRupiah(dataku?.price)}
                        </div>
                        <div className={styles.buu}>
                            <div className={styles.stock}>
                                Stock:  {dataku?.stock}
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
                        {pilihan == 'detail' && <ProductDetail data={dataku?.desc} />}
                        {pilihan == 'specs' && <ProductSpecs data={dataku?.features_by_category} />}
                    </div>
                </div>
                {!isIntersecting &&
                    <ProductBeliMobile
                        handleBeliSekarang={handleBeliSekarang}
                        handleWhatsapp={handleWhatsapp}
                        price={convertToRupiah(dataku?.price)}
                        stock={dataku?.stock}
                    />}

            </div>
        </div >
    )
}
