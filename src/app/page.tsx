"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Loader from "@/components/Loader";
import { stopLoading } from "@/redux/loadingSlice";
import Hero from "@/components/Hero";
import LightBox from "@/components/LightBox";
import BluePresentation from "@/components/BluePresentation";
import BackgroundPresentation from "@/components/BackgroundPresentation";
import Bienvenue from "@/components/Bienvenue";
import Footer from "@/components/Footer";

export default function Home() {

  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  useEffect(() => {
    if(isLoading){
      setTimeout(() => {
        dispatch(stopLoading()) 
      }, 2000)
    }
  },[])

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <main>
        <Hero />
        <LightBox />
        <BluePresentation navTitle="Oléron, l’île aux parfums" navPourcentage={32} title="Jetez l’ancre sur l’île aux parfums, paradis de l’atlantique" susTitle="L’océan vous invite à embarquer sur l’Île d’Oléron. Alors commence le plus beau des voyages, le vôtre." list={["Un ensoleillement digne des rivages méditerranéens pour la lumineuse, aussi surnommée l’île aux parfums par Pierre Loti", "2 729 ha d’environnement naturel préservé (forêts, côtes rocheuses, marais, flore et espèces d’oiseaux protégés…)", "_ Le charme authentique de petits villages et hameaux aux ruelles  fleuries de roses trémières", "60 km de plages de sable fin"]} button="En savoir plus" src="oleron.jpg" />
        <BackgroundPresentation />
        <BluePresentation navTitle="Oléron, l’île aux parfums" navPourcentage={64} title="Grands volumes baignés de lumière et prestations à la carte" susTitle="« Un environnement de vie exceptionnel qui respire l’élégance et le confort. »" list={["Jusqu’à 156 m2 habitables pour des villas de 5 à 6 pièces", "Grandes terrasses avec vue imprenable sur l’océan", "Vaste salon / séjour baigné de lumière naturelle", "2 à 3 stationnements et 1 local à vélos sécurisés par maison", "Magnifiques suites parentales dotées d’un grand dressing", "etc..."]} button="Découvrir toutes les prestations" src="interieur.jpg" />
        <Bienvenue />
      </main>
      <Footer />
    </>
  );
}
