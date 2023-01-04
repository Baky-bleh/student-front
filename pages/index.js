/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import {SliderData} from "../components/SliderData";
import Instagram from "../components/Instagram";
import Pages from "../layout/Pages";

export default function Home() {
  return (
    <>
        <Hero heading='Benkyou' message='Beebem' />
        <Slider slides={SliderData} />
        <Instagram />
    </>
  );
}

Home.layout = Pages
