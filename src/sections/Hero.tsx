"use client";

import Button from "@/components/Button";
import Image from "next/image";
import bgHero from "@/assets/images/therapist-hero-bg.jpg"; // Replace with your background image

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden ">
            {/* Background Image */}
         

            {/* Overlay Content */}
            <div className="relative z-10 px-4 max-w-4xl">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight">
                    Healing Begins with a Conversation
                </h1>
                <p className="mt-6 text-lg md:text-xl text-white/80">
                    Dr. Serena Blake,PsyD (Clinical Psychologist), Licensed Therapist — guiding you toward
                    clarity, confidence, and emotional well-being.
                </p>
                <div className="mt-8">
                    <Button
 
  variant="primary"
>
  Book a Free Consult
</Button>

                </div>
            </div>
        </section>
    );
}
