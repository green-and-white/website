import React, { useCallback, useEffect, useState } from 'react'

import styles from '../../home.module.css'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './CarouselButtons'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Modulo-based color selection
  const getSlideColor = (index) => {
    const colors = [
      { bg: 'bg-retro-green', text: 'text-retro-green' },     // 0
      { bg: 'bg-retro-orange', text: 'text-retro-orange' },   // 1
      { bg: 'bg-retro-purple', text: 'text-retro-purple' }    // 2
    ];
    return colors[index % 3];
  };

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  return (
    <section className="embla">
      <div className="flex items-center gap-4">
        {/* Previous Button - hidden on small screens, on the left on md+ */}
       <div className={`hidden lg:block ${styles.glassCardCarousel}`}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        </div>

        {/* Carousel Viewport */}
        <div className="embla__viewport flex-1" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                <div className='flex flex-col sm:flex-row items-stretch justify-center'>
                      <img src={slide.img} alt={slide.title} className={`${styles.image} w-full sm:w-1/3 h-auto sm:h-full max-h-[300px] object-fill rounded-t-md sm:rounded-l-md sm:rounded-tr-none aspect-4/5`} />
                      <div className={`${getSlideColor(index).bg} sm:w-1/2 flex flex-col flex-1 justify-center px-4 py-6 rounded-b-md sm:rounded-r-md sm:rounded-bl-none text-white text-center`}>
                          <h2 className={`font-libre-caslon text-3xl`}>{slide.title}</h2>
                          <br />
                          <p className={`font-helvetica text-sm`}>{slide.desc}</p>
                          {slide.url && (
                            <div className="mt-4">
                              <a 
                                href={slide.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={`inline-block bg-white font-helvetica ${getSlideColor(index).text} font-bold px-6 py-2 rounded-full hover:bg-retro-yellow hover:text-black transition-colors duration-200`}
                              >
                                {slide.buttonText || "Learn More"}
                              </a>
                            </div>
                          )}
                      </div>
                    
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button - hidden on small screens, on the right on md+ */}
        <div className={`hidden lg:block ${styles.glassCardCarousel}`}>
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>

  

      {/* Slide Indicators */}
      <div className="embla__dots w-full flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`embla__dot ${index === selectedIndex ? 'embla__dot--selected' : ''}`}
            type="button"
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default EmblaCarousel
