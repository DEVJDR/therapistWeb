"use client";

import Image from "next/image";
import Tag from "@/components/Tag";
import siteLogo from "@/assets/images/logo.svg";
import { useState } from "react";

const footerLinks = [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        preferredTime: "",
        agree: false,
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        preferredTime: "",
        agree: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
        setFormData({ ...formData, [name]: val });
    };

    const validate = () => {
        const newErrors: any = {};
        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Valid email is required.";
        if (!formData.phone) newErrors.phone = "Phone number is required.";
        if (!formData.message) newErrors.message = "Please tell us what brings you here.";
        if (!formData.preferredTime) newErrors.preferredTime = "Preferred time is required.";
        if (!formData.agree) newErrors.agree = "You must agree to be contacted.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            alert("Form submitted successfully!");
        }
    };

    return (
        
        <section id="contact" className="scroll-mt-36 py-6">
              <div className="flex justify-center mb-10">
                    <Tag>About Dr. Blake</Tag>
                </div>
            <div className="container">
               
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                    <div>
                        <Image src={siteLogo} alt="Layers Logo" />
                        <nav className="flex gap-6 mt-6">
                            {footerLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-white/50 text-sm hover:text-white transition"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <form onSubmit={handleSubmit} className="w-full max-w-xl bg-neutral-900 p-6 rounded-xl border border-white/10">
                        <h3 className="text-xl font-semibold mb-4">Get in touch</h3>

                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-1 text-sm">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                    className="w-full bg-neutral-800 text-white p-2 rounded"
                                />
                                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1 text-sm">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="e.g. johndoe@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-neutral-800 text-white p-2 rounded"
                                />
                                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                            </div>
                            <div>
                                <label htmlFor="phone" className="block mb-1 text-sm">Phone Number</label>
                                <input
                                    id="phone"
                                    type="text"
                                    name="phone"
                                    placeholder="e.g. +1 234 567 8901"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-neutral-800 text-white p-2 rounded"
                                />
                                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-1 text-sm">What brings you here?</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Let us know what you're looking for..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full bg-neutral-800 text-white p-2 rounded"
                                />
                                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="preferredTime" className="block mb-1 text-sm">Preferred time to reach you</label>
                                <input
                                    id="preferredTime"
                                    type="text"
                                    name="preferredTime"
                                    placeholder="e.g. 10am - 12pm IST"
                                    value={formData.preferredTime}
                                    onChange={handleChange}
                                    className="w-full bg-neutral-800 text-white p-2 rounded"
                                />
                                {errors.preferredTime && <p className="text-red-400 text-sm mt-1">{errors.preferredTime}</p>}
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    id="agree"
                                    type="checkbox"
                                    name="agree"
                                    checked={formData.agree}
                                    onChange={handleChange}
                                />
                                <label htmlFor="agree" className="text-sm">
                                    I agree to be contacted.
                                </label>
                            </div>
                            {errors.agree && <p className="text-red-400 text-sm">{errors.agree}</p>}

                            <button type="submit" className="bg-lime-400 text-black font-semibold px-4 py-2 rounded hover:bg-lime-300">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
