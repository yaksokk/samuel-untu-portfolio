import { useState } from "react";
import { Carousel } from "../../../components/common";

import badminton1 from "@/assets/img/nature1.jpg";
import badminton2 from "@/assets/img/bg.jpg";
import badminton3 from "@/assets/img/nature1.jpg";
import badminton4 from "@/assets/img/bg.jpg";
import running1 from "@/assets/img/nature1.jpg";
import running2 from "@/assets/img/bg.jpg";
import running3 from "@/assets/img/nature1.jpg";
import hiking1 from "@/assets/img/nature1.jpg";
import hiking2 from "@/assets/img/bg.jpg";
import hiking3 from "@/assets/img/nature1.jpg";

const ACTIVITIES = [
    { label: "Badminton", photos: [badminton1, badminton2, badminton3, badminton4] },
    { label: "Running", photos: [running1, running2, running3] },
    { label: "Hiking", photos: [hiking1, hiking2, hiking3] },
];

const BOOKS = [
    {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        takeaway: "Opened my eyes to the importance of financial literacy and how to think about achieving financial freedom.",
    },
    {
        title: "Filosofi Teras",
        author: "Henry Manampiring",
        takeaway: "Taught me to focus only on what I can control and let go of the rest.",
    },
    {
        title: "Good Vibes, Good Life",
        author: "Vex King",
        takeaway: "Reminded me that self-growth starts with how I treat myself daily.",
    },
    {
        title: "The Psychology of Money",
        author: "Morgan Housel",
        takeaway: "Changed how I think about financial decisions it's more about behavior than knowledge.",
    },
];


function Interests() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="interests" className="min-h-screen flex items-center px-6 md:px-12 py-24">
            <div className="mx-auto max-w-7xl w-full space-y-20">

                <div className="animate-slide-up">
                    <span className="text-xs font-medium tracking-widest uppercase text-primary dark:text-primary-dark">
                        Beyond Code
                    </span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100">
                        Interests & Hobbies
                    </h2>
                </div>

                <div className="animate-slide-up animation-delay-200 space-y-6">
                    <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100">🌿 Active Life</h3>

                    <div className="flex gap-2">
                        {ACTIVITIES.map((activity, i) => (
                            <button key={i} onClick={() => setActiveTab(i)} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${activeTab === i ? "bg-primary dark:bg-primary-dark text-white" : "bg-surface dark:bg-surface-dark text-stone-500 dark:text-stone-400 border border-border dark:border-border-dark hover:border-primary dark:hover:border-primary-dark"}`}>
                                {activity.label}
                            </button>
                        ))}
                    </div>

                    <Carousel items={ACTIVITIES[activeTab].photos.map(p => ({ img: p }))} aspect="aspect-square" cols={3} />
                </div>

                <div className="animate-slide-up animation-delay-400 space-y-6">
                    <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100">📚 Books & Takeaways</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {BOOKS.map((book, i) => (
                            <div key={i} className="p-5 rounded-2xl bg-surface dark:bg-surface-dark border border-border dark:border-border-dark hover:border-primary dark:hover:border-primary-dark transition-all duration-300 space-y-3">
                                <div>
                                    <p className="text-sm font-semibold text-stone-900 dark:text-stone-100 leading-tight">{book.title}</p>
                                    <p className="text-xs text-primary dark:text-primary-dark mt-0.5">{book.author}</p>
                                </div>
                                <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed italic">"{book.takeaway}"</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Interests;