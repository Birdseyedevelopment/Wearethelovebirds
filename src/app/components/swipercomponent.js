'use client';
import styles from './swiper.module.css'; 
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:

const SwiperComponent = () => {
    return(
      <div className={styles.Swiper}>
        <Swiper
        spaceBetween ={50}
        slidesperview={4}
        navigation={true}
        pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
        loop={true}
        modules = {[Pagination, Navigation]}>
        <SwiperSlide className={styles.swiperslide}><Image src = "/images/our_first_photo.jpeg" alt='our first photo' width={400} height={200}  ></Image></SwiperSlide>
        <SwiperSlide className={styles.swiperslide}><Image src = "/images/intimatemoment.jpg" alt='intimate shot photo' width={400} height={400} ></Image></SwiperSlide>
       <SwiperSlide className={styles.swiperslide}><Image src = "/images/briagraduation.jpg" alt='bria graduation photo' width={400} height={200} ></Image></SwiperSlide>
        <SwiperSlide className={styles.swiperslide}><Image src = "/images/gerardgraduation.jpg" alt='gerardgraduation photo' width={400} height={200}  ></Image></SwiperSlide>
        <SwiperSlide className={styles.swiperslide}><Image src = "/images/theparty.jpg" alt= 'theparty photo' width={400} height={200} ></Image></SwiperSlide>
        <SwiperSlide className={styles.swiperslide}><Image src = "/images/homephoto.jpeg" alt='homephoto photo' width={400} height={200} ></Image></SwiperSlide>
        <SwiperSlide className={styles.swiperslide}><Image src = "/images/axethrowingchair.jpg" alt='axethrowingchair photo' width={400} height={200} ></Image></SwiperSlide>
        <SwiperSlide className={styles.swiperslide}><Image src = "/images/lustfulgaze.jpg" alt='lustfulgaze photo' width={400} height={200} ></Image></SwiperSlide>
        <SwiperSlide className={styles.swiperslide}><Image src = "/images/outerworld.jpg" alt='outerworld photo' width={400} height={200} ></Image></SwiperSlide>
        <SwiperSlide className={styles.swiperslide}><Image src = "/images/streetview.jpg" alt='streetview photo' width={400} height={200} ></Image></SwiperSlide>
        <SwiperSlide className={styles.swiperslide}><Image src = "/images/countryclub.jpg" alt='countryclub photo' width={400} height={200} ></Image></SwiperSlide>
        <SwiperSlide className={styles.swiperslide}><Image src = "/images/thering.jpg" alt='the ring photo' width={400} height={200} ></Image></SwiperSlide>
        <SwiperSlide className={styles.swiperslide}><Image src = "/images/theentrance.jpg" alt='theentrance photo' width={400} height={200} ></Image></SwiperSlide>
        <SwiperSlide className={styles.swiperslide}><Image src = "/images/funtimeshot.jpg" alt='cake cutting photo' width={400} height={200} ></Image></SwiperSlide>
        <SwiperSlide className={styles.swiperslide}><Image src = "/images/engagmentshoot.jpg" alt='cake cutting photo' width={400} height={200} ></Image></SwiperSlide>
        
        <SwiperSlide className={styles.swiperslide}><Image src = "/images/cakecutting.jpg" alt='cake cutting photo' width={400} height={200} ></Image></SwiperSlide>
        
        </Swiper>
        </div>
    )
}
export default SwiperComponent