'use client'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useRouter } from 'next/navigation'
import { useStore } from "@/zustand/zustand";

const CustomLink = ({ href, arialabel, children, back }) => {
    const router = useRouter()
    const setProductMelayangHeader = useStore((state) => state.setProductMelayangHeader)

    const HandleKlik = () => {
        NProgress.configure({
            showSpinner: false,
            speed: 2000,
            template: `
                <div class="bar" role="bar">
                    <div class="peg"></div>
                </div>
                <div class="custom-background"></div>
            `
        }).start()
        back == 'back' ? router.back() : router.push(href)
        setProductMelayangHeader(false)
        NProgress.done().configure({
            showSpinner: false,
            minimum: 0.7,
            easing: 'ease',
            speed: 1000,
            template: `
                <div class="bar" role="bar">
                    <div class="peg"></div>
                </div>
                <div class="custom-background"></div>
            `
        })
    }
    return (
        <div
            style={{ cursor: 'pointer' }}
            aria-label={arialabel ? arialabel : 'no-label'}
            onClick={HandleKlik}>
            {children}
        </div>
    )
}

export default CustomLink;