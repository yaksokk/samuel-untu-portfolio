import { FiGithub, FiLinkedin, FiInstagram, FiSend } from "react-icons/fi";
import { useState } from "react";
import { Button } from "@/components/common";

const CONTACT_INFO = {
    email: "samueluntu7@gmail.com",
    socials: [
        { icon: FiGithub, label: "GitHub", href: "https://github.com/yaksokk" },
        { icon: FiLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/samuel-untu-0323783a5/" },
        { icon: FiInstagram, label: "Instagram", href: "https://instagram.com/samueluntu" },
    ],
};

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdjennd";

function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setStatus("success");
                setForm({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    const inputClass = "w-full rounded-xl px-4 py-2.5 text-sm bg-surface dark:bg-surface-dark border border-border dark:border-border-dark text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-600 focus:outline-none focus:border-primary dark:focus:border-primary-dark transition-colors duration-200";

    return (
        <section id="contact" className="min-h-screen flex items-center px-6 md:px-12 py-24">
            <div className="mx-auto max-w-7xl w-full">

                <div className="mb-16 animate-slide-up">
                    <span className="text-xs font-medium tracking-widest uppercase text-primary dark:text-primary-dark">
                        Contact
                    </span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100">
                        Get In Touch
                    </h2>
                    <p className="mt-3 text-stone-500 dark:text-stone-400 max-w-md">
                        Feel free to reach out for collaborations, opportunities, or just a friendly hello.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 md:gap-20">

                    <div className="animate-slide-right space-y-8">
                        <div>
                            <p className="text-xs font-medium tracking-widest uppercase text-stone-400 dark:text-stone-600 mb-2">
                                Email
                            </p>
                            <a href={`mailto:${CONTACT_INFO.email}`} className="text-stone-900 dark:text-stone-100 font-medium hover:text-primary dark:hover:text-primary-dark transition-colors duration-200">
                                {CONTACT_INFO.email}
                            </a>
                        </div>

                        <div>
                            <p className="text-xs font-medium tracking-widest uppercase text-stone-400 dark:text-stone-600 mb-4">
                                Social
                            </p>
                            <div className="flex flex-col gap-3">
                                {CONTACT_INFO.socials.map(({ icon: Icon, label, href }) => (
                                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-stone-500 dark:text-stone-400 hover:text-primary dark:hover:text-primary-dark transition-colors duration-200 group">
                                        <Icon size={18} />
                                        <span className="text-sm font-medium group-hover:underline underline-offset-4">
                                            {label}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="animate-slide-up animation-delay-200 space-y-4">
                        <div className="space-y-1">
                            <label className="text-xs font-medium tracking-widest uppercase text-stone-400 dark:text-stone-600">
                                Name
                            </label>
                            <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className={inputClass} />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-medium tracking-widest uppercase text-stone-400 dark:text-stone-600">
                                Email
                            </label>
                            <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className={inputClass} />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-medium tracking-widest uppercase text-stone-400 dark:text-stone-600">
                                Message
                            </label>
                            <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Your message..." className={`${inputClass} resize-none`} />
                        </div>

                        <Button variant="primary" onClick={handleSubmit} disabled={status === "sending"} className="w-full justify-center">
                            <FiSend size={15} />
                            {status === "sending" ? "Sending..." : "Send Message"}
                        </Button>

                        {status === "success" && (
                            <p className="text-sm text-green-500 text-center">✅ Message sent successfully!</p>
                        )}
                        {status === "error" && (
                            <p className="text-sm text-red-500 text-center">❌ Something went wrong. Please try again.</p>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Contact;