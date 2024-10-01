'use client'
import styles from "@/components/header.module.css"
import Image from "next/image"
import Search from "@/components/search";
import { IoIosArrowForward } from "react-icons/io";
import { BsFillTriangleFill } from "react-icons/bs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useStore } from "@/zustand/zustand";
import ProductHeaderMelayang from "./productHeaderMelayang";
import { FaRegUserCircle } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react"
import { IoCartOutline } from "react-icons/io5";

import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";


import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
export default function Header() {
  const [data, setData] = useState([])
  const searchTermClose = useStore((state) => state.searchTermClose)
  const setSearchTermClose = useStore((state) => state.setSearchTermClose)

  const productMelayangHeader = useStore((state) => state.productMelayangHeader)
  const setProductMelayangHeader = useStore((state) => state.setProductMelayangHeader)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/category.json`)
        const data = await res.json()
        setData(data?.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData()
  }, [])

  const HandlePilihProduct = () => {
    setProductMelayangHeader()
  }

  const handlePencarian = () => {
    setSearchTermClose()
  }

  const handleLogin = async () => {
    await signIn("google", {
      redirect: false,  // Disable automatic redirect
      callbackUrl: "/", // URL tujuan setelah login berhasil
    });
  }

  const { data: session } = useSession()
  console.log(session?.user?.image);


  return (
    <header className={styles.header}>
      <div className={styles.atas}>
        <div className={styles.container}>
          <Link href={'/'} className={styles.gambar}>
            <Image src={`${process.env.NEXT_PUBLIC_URL}/logo.png`} height={80} width={400} alt="logo" />
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


            <Link className={styles.about} href={`/about`}> ABOUT </Link>
            <div className={styles.cartmobile}> <IoCartOutline /> </div>
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
            <div className={styles.cartdesktop}> <FaShoppingCart size={27} /> </div>
            <div className={styles.profil}>
              {session ? <Link href={`/datapesanan`}>
                <Image
                  style={{ borderRadius: '50%' }}
                  src={session?.user?.image}
                  alt={session?.user?.name}
                  width={27}
                  height={27}
                ></Image>
              </Link> : <div onClick={handleLogin}><FaUser size={27} /></div>}
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
