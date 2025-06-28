"use client";

import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import Image from "next/image";
import { motion } from "framer-motion";
import traumaImage from "@/assets/images/trauma.webp";
import counImage from "@/assets/images/coun.jpg";
import anxiety from "@/assets/images/traumaa.jpg";


const parentVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.7,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function Features() {
    return (
        <section  id="features" className=" py-24 scroll-mt-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Services & Specialties</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl m-auto">
                    Personalized care for{" "}
                    <span className="text-lime-400">your well-being</span>
                </h2>

                <motion.div
                    variants={parentVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Anxiety Management */}
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <FeatureCard
                                title="Anxiety & Stress Management"
                                description="Learn tools to manage overwhelming thoughts, reduce daily stress, and regain control. Sessions focus on CBT techniques, mindfulness, and coping strategies."
                            >
                                <div className="relative h-60 w-full overflow-hidden rounded-lg">
                                    <Image
                                       src={anxiety}
                                        alt="Anxiety Therapy"
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                            </FeatureCard>
                        </motion.div>

                        {/* Relationship Counseling */}
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <FeatureCard
                                title="Relationship Counseling"
                                description="Improve communication, resolve conflict, and strengthen emotional connection. Ideal for couples and individuals navigating relationship dynamics."
                            >
                                <div className="relative h-60 w-full overflow-hidden rounded-lg">
                                    <Image
                                        src={counImage}
                                        alt="relationship"
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                            </FeatureCard>
                        </motion.div>

                        {/* Trauma Recovery */}
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <FeatureCard
                                title="Trauma 
                                Recovery"
                                description="Supportive therapy for processing trauma and PTSD. Evidence-based methods help you heal, rebuild trust, and regain a sense of safety.therapy for processing trauma and PTSDtherapy for processing trauma ."
                            >
                                <div className="relative h-60 w-full overflow-hidden rounded-lg">
                                    <Image
                                         src={traumaImage}
                                        alt="Trauma Recovery"
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                            </FeatureCard>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Session Fees */}
                <div className="text-center mt-16 text-white/80 text-lg">
                    <p>
                        <strong className="text-white">$200</strong> / Individual Session &nbsp; | &nbsp;
                        <strong className="text-white">$240</strong> / Couples Session
                    </p>
                </div>
            </div>
        </section>
    );
}
