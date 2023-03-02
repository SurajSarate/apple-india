import React from "react";
import Hero from '../components/comman/hero/Hero';
import HeroBanner from '../components/comman/hero/HeroBanner'
import NewIos from '../components/comman/hero/NewIos'
import Advertise from "../components/comman/hero/Advertise";
import Footer from '../components/comman/Footer'

function Home() {
  return (
    <>
      <Hero
        deviceName={"iPhone 12 Pro"}
        altImg={"mobile"}
        deviceTag={"It's a leap year."}
        devicePriceTag1={"From ₹10900.00/mo. for 24 mo. or ₹125900.00 before trade‑in."}
        devicePriceTag2={
          " Buy directly from Apple with special carrier offers."
        }
        deviceImg={"https://cdn.devdojo.com/images/april2021/iphone-12.jpg"}
      />
      <HeroBanner customClass={'bg-white '}/>
      <NewIos
        iosVersion={"iOS 15"}
        iosTagLine1={"Looks brand new."}
        iosTagLine2={"Feels like home."}
        img={"https://cdn.devdojo.com/images/april2021/iphone-images.jpg"}
      />
      <Advertise />
      <Footer customStyle={'bg-white'}/>
    </>
  );
}

export default Home;
