import React from "react";
import HeroShakes from "../components/Shakes/Hero";
import ShakesPanel from "../components/Shakes/Shakes";
import DessertPanel from "../components/Shakes/Dessert";
import InquiryBanner from "../components/Shakes/InquiryBanner";
import ShopSection from "../components/Shakes/ShopSection";
import CafePromoBanner from "../components/Shakes/CafePromoBanner";

export default function Shakes() {
  return (
    <div className="font-sans">
      <HeroShakes />
      <ShakesPanel />
      <DessertPanel />
      <InquiryBanner />
      <ShopSection />
      <CafePromoBanner />
    </div>
  );
}
