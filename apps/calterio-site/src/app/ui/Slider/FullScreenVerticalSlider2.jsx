'use client';
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Navigation } from "swiper/modules";
import Div from "../Div";
import Link from "next/link";

export default function FullScreenVerticalSlider({ data }) {
  const videoRefs = useRef([]);
  const [videoErrors, setVideoErrors] = React.useState({});

  useEffect(() => {
    // Ensure videos load and play
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.load();
        video.play().catch((error) => {
          console.log('Video autoplay prevented:', error);
        });
      }
    });
  }, []);

  const handleVideoError = (index, item, e) => {
    const video = e.target;
    if (video && video.error) {
      const errorCode = video.error.code;
      const errorMessage = video.error.message || 'Unknown error';
      
      setVideoErrors(prev => ({ ...prev, [index]: true }));
      
      console.error('Video error:', {
        code: errorCode,
        message: errorMessage,
        url: item.videoUrl,
        networkState: video.networkState,
        readyState: video.readyState
      });
      
      // Error code 4 = MEDIA_ERR_SRC_NOT_SUPPORTED
      if (errorCode === 4) {
        console.error('Video format not supported. Please ensure videos are in .mp4 format with H.264 codec for web compatibility.');
      }
    }
  };

  return (
    <>
      <Div className="cs-vertical_slider cs-swiper_arrow_style_1" style={{ height: '100vh', position: 'relative', width: '100%' }}>
        <Div className="cs-down_btn cs-swiper_button_next"></Div>

        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={0}
          mousewheel={true}
          pagination={false}
          speed={1000}
          loop={true}
          modules={[Mousewheel, Pagination, Navigation]}
          className="mySwiper"
          style={{ height: '100vh', width: '100%', position: 'relative' }}
          navigation={{
            nextEl: ".cs-swiper_button_next",
            prevEl: false,
            disabledClass: "swiper-button-disabled",
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} style={{ height: '100vh', width: '100%', position: 'relative' }}>
              <Div className="cs-hero cs-style5 cs_type_1" style={{ position: 'absolute', height: '100%', width: '100%', top: 0, left: 0, overflow: 'hidden', padding: 0, margin: 0 }}>
                {!videoErrors[index] ? (
                  <video 
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    onError={(e) => handleVideoError(index, item, e)}
                    onLoadedData={() => {
                      console.log('Video loaded successfully:', item.videoUrl);
                    }}
                    onCanPlay={() => {
                      console.log('Video can play:', item.videoUrl);
                    }}
                    style={{ 
                      position: 'absolute', 
                      height: '100%', 
                      width: '100%', 
                      left: 0, 
                      top: 0, 
                      objectFit: 'cover',
                      zIndex: 0,
                      pointerEvents: 'none',
                      backgroundColor: '#000'
                    }}
                  >
                    <source src={item.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag or the video format.
                  </video>
                ) : (
                  <div style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    left: 0,
                    top: 0,
                    backgroundColor: '#000',
                    zIndex: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff'
                  }}>
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                      <p>Video failed to load</p>
                      <p style={{ fontSize: '14px', opacity: 0.7 }}>Please ensure videos are in .mp4 format (H.264 codec)</p>
                    </div>
                  </div>
                )}
                <div className="cs-hero_text" style={{ position: 'absolute', zIndex: 2, padding: '80px 115px', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 className="cs-hero_intro_title">{item.introTitle}</h3>
                  <h2 className="cs-hero_title">{item.title}</h2>
                  <Link href={item.href} className="cs-hero_btn">
                    <svg
                      width={30}
                      height={30}
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.7019 3.25126C29.7019 1.87055 28.5826 0.751264 27.2019 0.751262L4.70186 0.751262C3.32115 0.751262 2.20186 1.87055 2.20186 3.25126C2.20186 4.63197 3.32115 5.75126 4.70186 5.75126L24.7019 5.75126L24.7019 25.7513C24.7019 27.132 25.8212 28.2513 27.2019 28.2513C28.5826 28.2513 29.7019 27.132 29.7019 25.7513L29.7019 3.25126ZM4.22089 29.7678L28.9696 5.01903L25.4341 1.4835L0.685358 26.2322L4.22089 29.7678Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                </div>
              </Div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Div>
    </>
  );
}
