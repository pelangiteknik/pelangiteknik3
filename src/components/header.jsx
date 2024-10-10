'use client'
import styles from "@/components/header.module.css"
import Image from "next/image"
import Search from "@/components/search";
import { IoIosArrowForward } from "react-icons/io";
import { BsFillTriangleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useStore } from "@/zustand/zustand";
import ProductHeaderMelayang from "./productHeaderMelayang";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton, useAuth } from '@clerk/nextjs'
import Skeleton from 'react-loading-skeleton'
import { PiNotepadBold } from "react-icons/pi";
import Link from "next/link";

export default function Header({ data }) {

  const { isLoaded, userId, sessionId, getToken } = useAuth()

  console.log(isLoaded);
  console.log(userId);
  console.log(sessionId);

  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(isLoaded)
  }, [])


  const searchTermClose = useStore((state) => state.searchTermClose)
  const setSearchTermClose = useStore((state) => state.setSearchTermClose)

  const productMelayangHeader = useStore((state) => state.productMelayangHeader)
  const setProductMelayangHeader = useStore((state) => state.setProductMelayangHeader)


  const HandlePilihProduct = () => {
    setProductMelayangHeader(true)
  }

  const handlePencarian = () => {
    setSearchTermClose()
  }


  return (
    <header className={styles.header}>
      <div className={styles.atas}>
        <div className={styles.container}>
          <Link href={'/'}>
            <div className={styles.gambar}>
              <Image src={`${process.env.NEXT_PUBLIC_URL}/logo.png`} height={80} width={400} alt="logo" />
            </div>
          </Link>
          <div className={styles.text1}
            onClick={() => HandlePilihProduct()}
            style={productMelayangHeader ? { background: ' var(--colorthrid)' } : {}}
          >
            {productMelayangHeader && <div className={styles.ikon}>
              <BsFillTriangleFill color="var(--colorbggreyutama)" />
            </div>}
            PRODUK
          </div>
          <a className={styles.text2}>BLOG</a>
          <div className={styles.text3}>
            <Link href={`/about`}>
              <div className={styles.about} > ABOUT </div>
            </Link>
          </div>

          <div className={styles.pencariandeskop}>
            <div className={styles.deskop}>
              <Search />
            </div>
          </div>
          <div className={styles.text4}  >
            <div className={styles.pencarianmobile} onClick={handlePencarian}>
              <div className={styles.mobile}>
                <FaSearch color="white" size={27} />
              </div>
            </div>
            <div className={styles.cartdesktop}>
              <Link href={`/cart`}>
                <FaShoppingCart size={27} />
              </Link>
            </div>
            <div className={styles.note}>
              <Link href={`/order`}>
                <PiNotepadBold size={27} />
              </Link>
            </div>
            <div className={styles.profil}>
              {userId ? <UserButton /> :
                <Link href={`/sign-in`}>
                  <div><FaUser size={27} /></div>
                </Link>
              }
              {userId ? !isLoading && <Skeleton width={40} height={40} borderRadius={50} /> : <div></div>}
            </div>

          </div>

          {searchTermClose &&
            <div className={styles.pencarianklik}>
              <Search />
            </div>}
        </div>
        {
          productMelayangHeader &&
          <ProductHeaderMelayang
            data={data}
          />
        }
      </div>
      <div className={styles.notifikasi} >
        <div className={styles.lebarnotif}>
          <div className={styles.text}>
            ⛈️Dukungan obrolan langsung tersedia. Untuk bantuan swalayan, kunjungi:
          </div>
          <div className={styles.klik}> <a href="">Help Center <IoIosArrowForward /></a>
          </div>
        </div>
      </div>
    </header>


  )
}
