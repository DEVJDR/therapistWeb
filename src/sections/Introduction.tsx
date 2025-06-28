"use client";

import Tag from "@/components/Tag";
import Image from "next/image";

const aboutText = `Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.`;

export default function Introduction() {
    return (
        <section id="about" className="scroll-mt-24 py-20 lg:py-1">
            <div className="container">
                {/* Section Tag */}
                <div className="flex justify-center mb-10">
                    <Tag>About Dr. Blake</Tag>
                </div>

                {/* Image and Text */}
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    
                    {/* Left: Image */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <Image
                            src="/therapist.jpg"
                            alt="Dr. Serena Blake"
                            width={500}
                            height={600}
                            className="rounded-xl shadow-lg object-cover"
                        />
                    </div>

                    {/* Right: Text */}
                  <div className="w-full lg:w-1/2 text-center lg:text-left">
    <h2 className="text-3xl md:text-4xl font-semibold mb-6">
        Meet Dr. Serena Blake
    </h2>
    <p className="text-lg md:text-2xl leading-relaxed text-white/80">
        {aboutText}
    </p>
</div>

                </div>
            </div>
        </section>
    );
}
