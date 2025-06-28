"use client";

import { useState } from "react";
import Tag from "@/components/Tag";


type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  preferredTime?: string;
  agree?: string;
};

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredTime: "",
    agree: false,
  });

  //   FormErrors
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\+?[0-9]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number.";
    }
    if (!formData.message) newErrors.message = "Please tell us what brings you here.";
    if (!formData.preferredTime)
      newErrors.preferredTime = "Preferred time is required.";
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
        <section
            id="contact"
            className="scroll-mt-36 py-20 border-t border-white/10 bg-neutral-950 text-white"
        >
            <div className="container max-w-screen-lg mx-auto">
                <div className="flex justify-center mb-10">
                    <Tag>Contact Us</Tag>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="w-full bg-neutral-900 p-6 md:p-8 rounded-xl border border-white/10 mx-auto"
                >
                    <h3 className="text-2xl font-semibold mb-6 text-center">Get in touch</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block mb-1 text-sm">Name</label>
                            <input
                                id="name"
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
                                placeholder="Your mail Id"
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
                                name="phone"
                                placeholder="+123444435"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-neutral-800 text-white p-2 rounded"
                            />
                            {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                        </div>

                        <div>
                            <label htmlFor="preferredTime" className="block mb-1 text-sm">Preferred time to reach you</label>
                            <input
                                id="preferredTime"
                                name="preferredTime"
                                placeholder="e.g. 10am - 12pm IST"
                                value={formData.preferredTime}
                                onChange={handleChange}
                                className="w-full bg-neutral-800 text-white p-2 rounded"
                            />
                            {errors.preferredTime && <p className="text-red-400 text-sm mt-1">{errors.preferredTime}</p>}
                        </div>
                    </div>

                    <div className="mt-6">
                        <label htmlFor="message" className="block mb-1 text-sm">What brings you here?</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Let us know what you're looking for..."
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full bg-neutral-800 text-white p-2 rounded"
                        />
                        {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                        <input
                            id="agree"
                            type="checkbox"
                            name="agree"
                            checked={formData.agree}
                            onChange={handleChange}
                        />
                        <label htmlFor="agree" className="text-sm">I agree to be contacted.</label>
                    </div>
                    {errors.agree && <p className="text-red-400 text-sm mt-1">{errors.agree}</p>}

                    <div className="mt-6 text-center">
                        <button
                            type="submit"
                            className="bg-lime-400 text-black font-semibold px-6 py-2 rounded hover:bg-lime-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
