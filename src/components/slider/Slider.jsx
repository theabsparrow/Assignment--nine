import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import PropTypes from 'prop-types';
import { Navigation, Pagination,EffectFade } from 'swiper/modules';
import { useState } from 'react';

const Slider = ({ threeCard }) => {
const [slider, setSlider] = useState(null)
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination,EffectFade]}
                effect={'fade'}
                navigation={{ clickable: true }}
                pagination={{ clickable: true }}
                onSlideChange={() => setSlider('slide change')}
                onSwiper={(swiper) => setSlider(swiper)}
            >
                {
                    threeCard.map((singleCard) => <SwiperSlide key={singleCard.id}>
                        <img className='w-[100vw] h-[80vh] rounded-xl' src={singleCard.image} alt={singleCard.estate_title} />
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

Slider.propTypes = {
    threeCard: PropTypes.array
}
export default Slider;