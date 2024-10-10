import styles from '@/components/productHeaderMelayang.module.css'
import Image from 'next/image';
import { useRouter } from 'nextjs-toploader/app';
import { useStore } from "@/zustand/zustand";
import { useLockBodyScroll } from "@uidotdev/usehooks";

export default function ProductHeaderMelayang({ data }) {
    useLockBodyScroll();
    const router = useRouter()
    const setProductMelayangHeader = useStore((state) => state.setProductMelayangHeader)

    const handleKlikProduct = (e) => {
        router.push(`/category/` + e)
        setProductMelayangHeader()
    }

    return (
        <>
            <div className={styles.melayang}
                onClick={() => setProductMelayangHeader(false)}></div>
            <div className={styles.isimelayang}>
                <div className={styles.isimelayangdalam}>
                    <div className={styles.dalamkontainer}>
                        {data?.map((data, i) => {
                            return (
                                <div className={styles.kotak}
                                    key={i}
                                    onClick={() => handleKlikProduct(data?.slugCategory)}
                                >
                                    <Image
                                        src={data?.icon}
                                        alt={data?.category}
                                        width={100}
                                        height={100}
                                    />
                                    {data?.category}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
