import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from "react";
import Section from "../../SectionLayout";
import cafeteira from "/assets/images/cafeteira.png";
import calendario from "/assets/images/calendario.png";
import losangulo from "/assets/images/grafismo_amarelo.png";


const Section5 = () => {

      React.useLayoutEffect(() => {
            gsap.registerPlugin(useGSAP, ScrollTrigger);

            gsap.to('.up-section-5', {
                  y: 0,
                  opacity: 1,
                  scrollTrigger: {
                        trigger: '.section-5',
                        start: "top bottom",
                        end: "90% 90%",
                        scrub: true,
                        // markers: true,
                  },
            })
            gsap.to('.right-section-5', {
                  x: 0,
                  opacity: 1,
                  scrollTrigger: {
                        trigger: '.section-5',
                        start: "top bottom",
                        end: "90% 90%",
                        scrub: true,
                        // markers: true,
                  },
            })
      }, [])

      return (
            <Section id="section-5" className="bg-table bg-right-bottom sm:bg-cover bg-no-repeat bg-blue-800 flex flex-col items-center sm:items-start justify-start sm:justify-center relative">
                  <img
                        src={calendario}
                        alt="calendário"
                        className="w-[23rem] pb-[2rem]"
                  />
                  <div className="section-5 flex gap-[1rem] relative">
                        <div className="flex flex-col gap-[1rem] sm:w-[20rem] up-section-5 translate-y-[50%] opacity-0 ease duration-200">
                              <div className="bg-white py-[2rem] rounded-3xl px-[0.5rem] sm:px-[1.5rem]">
                                    <p className="text-blue-800 font-title sm:text-xl">07 de setembro</p>
                                    <p className="text-gray-600 font-title sm:text-xl">9:00 am</p>
                              </div>
                              <div className="bg-yellow-500 py-[2rem] rounded-3xl px-[0.5rem] sm:px-[1.5rem]">
                                    <p className="text-blue-800 font-title sm:text-xl">07 de setembro</p>
                                    <p className="text-gray-600 font-title sm:text-xl">9:00 am</p>
                              </div>
                        </div>
                        <div className="flex flex-col gap-[1rem] sm:w-[20rem] up-section-5 translate-y-[50%] opacity-0 ease duration-200">
                              <div className="bg-yellow-500 py-[2rem] rounded-3xl px-[0.5rem] sm:px-[1.5rem]">
                                    <p className="text-blue-800 font-title sm:text-xl">07 de setembro</p>
                                    <p className="text-gray-600 font-title sm:text-xl">9:00 am</p>
                              </div>
                              <div className="bg-yellow-500 py-[2rem] rounded-3xl px-[0.5rem] sm:px-[1.5rem]">
                                    <p className="text-blue-800 font-title sm:text-xl">07 de setembro</p>
                                    <p className="text-gray-600 font-title sm:text-xl">9:00 am</p>
                              </div>
                        </div>
                        <img
                              src={losangulo}
                              className="w-[1.5rem] h-[1rem] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
                        />
                  </div>
                  <img
                        src={cafeteira}
                        className="right-section-5 ease duration-200 w-[10rem] sm:w-[25rem] absolute right-[50%] translate-x-1/2 sm:right-[5%] bottom-0 sm:bottom-[5%]"
                  />
            </Section>
      )
}

export default Section5