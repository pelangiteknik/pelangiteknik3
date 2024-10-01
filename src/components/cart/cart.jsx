'use client'

import HeaderFooter from "@/components/layout/headerFooter";
import styles from '@/components/cart/cart.module.css'
import { FiTrash2 } from "react-icons/fi";

import { useStore } from "@/zustand/zustand";

export default function Carts() {
  const setOpenFormData = useStore((state) => state.setOpenFormData)
  const openFormData = useStore((state) => state.openFormData)

  const initialCartItems = [
    { id: 1, name: 'Wireless Earbuds', price: 99.99, quantity: 1, image: '/placeholder.svg?height=80&width=80' },
    { id: 2, name: 'Smart Watch', price: 199.99, quantity: 1, image: '/placeholder.svg?height=80&width=80' },
    { id: 3, name: 'Bluetooth Speaker', price: 79.99, quantity: 2, image: '/placeholder.svg?height=80&width=80' },
  ]

  return (
    <HeaderFooter >
      <div className={styles.container}>
        <div className={styles.dalamcontainer}>

          <div className={styles.judul}>
            Daftar Keranjang
          </div>
          <div className={styles.content}>
            <div className={styles.kiri}>
              {initialCartItems.map((data) => {
                return (
                  <div className={styles.product}>
                    <div className={styles.kiriproduct}>
                      <div className={styles.gambar}></div>
                      <div className={styles.text}>
                        <div className={styles.judulproduct}>{data.name}</div>
                        <div className={styles.harga}>{data.price}</div>
                      </div>
                    </div>

                    <div className={styles.kananproduct}>
                      <div className={styles.count}>
                        <button>-</button>
                        <div className={styles.angka}>3</div>
                        <button>+</button>
                      </div>
                      <div className={styles.sampah}><FiTrash2 /></div>
                    </div>
                  </div>
                )
              })}


            </div>
            <div className={styles.kanan}>

              <div className={styles.dalamkanan} style={{ cursor: 'pointer' }} onClick={setOpenFormData}>
                <div className={styles.judulringkasan}>Pesanan di kirim</div>
                <div className={styles.namapengiriman}>
                  di kirim ke Natanael Rio Wijaya
                </div>
                <div className={styles.alamatpengiriman}>Jalan Raya No. 45, Kelurahan Cibubur, Kecamatan Ciracas, Jakarta Timur, 13720, Indonesia</div>
                <div className={styles.edit}>edit</div>
              </div>

              <div className={styles.dalamkanan}>
                <div className={styles.judulringkasan}>Ringkasan Pesanan</div>

                <div className={styles.subjudul}>
                  <div className={styles.textkiri}>Subtotal</div>
                  <div className={styles.textkanan}>Rp. 250.000,00</div>
                </div>

                <div className={styles.subjudul}>
                  <div className={styles.textkiri}>Pengiriman</div>
                  <div className={styles.textkanan} style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={setOpenFormData}>cek disini</div>
                </div>

                <div className={styles.total}>
                  <div className={styles.texttotal}>Total</div>
                  <div className={styles.texttotal}>Rp. 400.000</div>
                </div>
                <button >
                  Proses untuk checkout
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </HeaderFooter >
  )
}
