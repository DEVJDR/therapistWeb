"use client";

import Tag from "@/components/Tag";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const faqs = [
    {
        question: "Do you accept insurance?",
        answer: "No, but a superbill is provided for self-submission.",
    },
    {
        question: "Are online sessions available?",
        answer: "Yes—all virtual sessions via Zoom.",
    },
    {
        question: "What is your cancellation policy?",
        answer: "24-hour notice required to avoid a fee.",
    },
    {
        question: "What are your working hours?",
        answer: "Monday–Friday, 10 AM to 6 PM .",
    },
    {
        question: "How do I schedule a session?",
        answer: "Use the 'Book a Free Consult' button or email directly at serena@blakepsychology.com.",
    },
   
];

export default function Faqs() {
    const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set()); 

    const toggleIndex = (index: number) => {
        const newSet = new Set(openIndexes);
        if (newSet.has(index)) {
            newSet.delete(index);
        } else {
            newSet.add(index);
        }
        setOpenIndexes(newSet);
    };

    return (
        <section id="faqs" className="py-24 scroll-mt-30">
            
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Faqs</Tag>
                </div>
                <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
                    Questions? We&apos;ve got{" "}
                    <span className="text-lime-400">answers</span>
                </h2>

                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndexes.has(index);
                        return (
                            <div
                                key={faq.question}
                                onClick={() => toggleIndex(index)}
                                className="bg-neutral-900 rounded-2xl border border-white/10 p-6 cursor-pointer transition duration-300"
                            >
                                <div className="flex justify-between items-start">
                                    <h3 className="font-medium text-base md:text-lg m-0">
                                        {faq.question}
                                    </h3>
                                    <Plus
                                        size={30}
                                        className={twMerge(
                                            "text-lime-400 flex-shrink-0 transition-transform duration-300",
                                            isOpen && "rotate-45"
                                        )}
                                    />
                                </div>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{
                                                height: 0,
                                                marginTop: 0,
                                            }}
                                            animate={{
                                                height: "auto",
                                                marginTop: 16,
                                            }}
                                            exit={{
                                                height: 0,
                                                marginTop: 0,
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-white/50">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
