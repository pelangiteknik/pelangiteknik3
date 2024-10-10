'use client'

import styles from '@/components/user/cart.module.css'
import { FiTrash2 } from "react-icons/fi";

import { useStore } from "@/zustand/zustand";
import convertToRupiah from "@/utils/ConvertRupiah";

export default function Carts() {
  const setOpenFormData = useStore((state) => state.setOpenFormData)
  const openFormData = useStore((state) => state.openFormData)

  const initialCartItems = [
    { id: 1, name: 'Genset Silent 5000 Watt', price: 10000000, quantity: 1, image: '/placeholder.svg?height=80&width=80' },
    { id: 2, name: 'Genset Portable 1000 Watt', price: 3500000, quantity: 1, image: '/placeholder.svg?height=80&width=80' },
    { id: 3, name: 'Genset Diesel 10000 Watt', price: 15000000, quantity: 2, image: '/placeholder.svg?height=80&width=80' },
    { id: 4, name: 'Genset Bensin 3000 Watt', price: 5000000, quantity: 1, image: '/placeholder.svg?height=80&width=80' },
    { id: 5, name: 'Genset Silent 7500 Watt', price: 12500000, quantity: 1, image: '/placeholder.svg?height=80&width=80' },
    { id: 6, name: 'Genset Solar 8000 Watt', price: 17000000, quantity: 1, image: '/placeholder.svg?height=80&width=80' },
    { id: 7, name: 'Genset Inverter 2500 Watt', price: 4500000, quantity: 2, image: '/placeholder.svg?height=80&width=80' },
    { id: 8, name: 'Genset Diesel 15000 Watt', price: 20000000, quantity: 1, image: '/placeholder.svg?height=80&width=80' },
  ];


  return (
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
                  </div>

                  <div className={styles.kananproduct}>
                    <div className={styles.text}>
                      <div className={styles.judulproduct}>{data.name}</div>
                      <div className={styles.harga}>{convertToRupiah(data.price)}</div>
                    </div>
                    <div className={styles.text2}>
                      <div className={styles.count}>
                        <button>-</button>
                        <div className={styles.angka}>3</div>
                        <button>+</button>
                      </div>
                      <div className={styles.sampah}><FiTrash2 /></div>
                    </div>
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
                <div className={styles.texttotal}>{convertToRupiah(400000)}</div>
              </div>
              <button >
                Proses untuk checkout
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
