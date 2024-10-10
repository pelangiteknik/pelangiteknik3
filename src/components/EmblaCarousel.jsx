import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
// import { Thumb } from './EmblaCarouselThumbsButton'
import Image from 'next/image'
import styles from '@/components/EmblaCarousel.module.css'

import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from '@/components/EmblaCarouselArrowButtons'


const EmblaCarousel = ({ data }) => {
    // const { slides, options } = props


    const options = {}
    const SLIDE_COUNT = 5
    const slides = Array.from(Array(SLIDE_COUNT).keys())

    const [selectedIndex, setSelectedIndex] = useState(0)
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true
    })

    const onThumbClick = useCallback(
        (index) => {
            if (!emblaMainApi || !emblaThumbsApi) return
            emblaMainApi.scrollTo(index)
        },
        [emblaMainApi, emblaThumbsApi]
    )

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return
        setSelectedIndex(emblaMainApi.selectedScrollSnap())
        emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
    }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaMainApi) return
        onSelect()

        emblaMainApi.on('select', onSelect).on('reInit', onSelect)
    }, [emblaMainApi, onSelect])



    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaMainApi)


    return (
        <div className={styles.embla}>
            <div className={styles.emblaViewport} ref={emblaMainRef}>
                <div className={styles.emblaContainer}>
                    {data?.map((data, i) => {
                        return (
                            <div className={styles.emblaSlide} key={i}>
                                <div className={styles.emblaSlideNumber}>
                                    <div className={styles.gambaratas}>
                                        <Image
                                            src={data?.secure_url}
                                            width={300}
                                            height={300}
                                            alt={data?.asset_id}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.emblaButtons}>
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
                <div className={styles.number}>
                    {selectedIndex + 1} / {data?.length}
                </div>
            </div>

            <div className={styles.emblaThumbs}>
                <div className={styles.emblaThumbsViewport} ref={emblaThumbsRef}>
                    <div className={styles.emblaThumbsContainer}>
                        {data?.map((data, index) => {
                            return (
                                <div
                                    key={index}
                                    className={
                                        styles.emblaThumbsSlide.concat(
                                            index === selectedIndex ? ` ${styles.emblaThumbsSlideSelected}` : ''
                                        )
                                    }
                                >
                                    <button
                                        onClick={() => onThumbClick(index)}
                                        type="button"
                                        className={styles.emblaThumbsSlideNumber}
                                    >
                                        <Image
                                            src={data?.secure_url}
                                            width={80}
                                            height={80}
                                            alt={data?.asset_id}
                                        />
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel
