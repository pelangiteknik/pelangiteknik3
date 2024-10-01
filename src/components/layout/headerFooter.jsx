import Footer from "@/components/footer";
import Header from "@/components/header";
import styles from "@/components/layout/headerFooter.module.css"
import FormData from "@/components/formData";
import { useStore } from "@/zustand/zustand";
export default function HeaderFooter({ children }) {
  const openFormData = useStore((state) => state.openFormData)

  return (
    <>
      <main className={styles.container} >
        <Header />
        <div className={styles.main}>
          {children}
        </div>
        <Footer />
      </main>
      {openFormData && <FormData />}
    </>
  )
}
