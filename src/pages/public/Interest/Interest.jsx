import { useState, useEffect } from "react";
import { FiX, FiBookOpen, FiActivity, FiMessageSquare, FiZoomIn } from "react-icons/fi";

const badminton1 = "https://res.cloudinary.com/ddim50bkl/image/upload/v1776968476/IMG_20230427_002044_489_as9z97.webp";
const badminton2 = "https://res.cloudinary.com/ddim50bkl/image/upload/v1776968476/1710189474607_p1u1rj.jpg";
const badminton3 = "https://res.cloudinary.com/ddim50bkl/image/upload/v1776968476/IMG-20221212-WA0019_fuz3nz.jpg";

const hiking1 = "https://res.cloudinary.com/ddim50bkl/image/upload/v1776968843/1747031271793_ydp8qw.jpg";
const hiking2 = "https://res.cloudinary.com/ddim50bkl/image/upload/v1776968842/1733049891082_oicrot.jpg";
const hiking3 = "https://res.cloudinary.com/ddim50bkl/image/upload/v1776968844/1733049891344_y9vsjm.jpg";

const ACTIVITIES = [
    { label: "Badminton", photos: [badminton1, badminton2, badminton3] },
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

function Lightbox({ src, onClose }) {
    useEffect(() => {
        const handleKey = (e) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", handleKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pt-20" onClick={onClose}>
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface-dark border border-border-dark text-text-dark flex items-center justify-center hover:bg-primary-dark hover:text-white transition-all duration-300 z-10">
                <FiX size={18} />
            </button>
            <img
                src={src}
                alt="Preview"
                className="relative z-10 max-w-full max-h-[80vh] rounded-2xl object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    );
}

function PhotoGrid({ photos }) {
    const [lightboxSrc, setLightboxSrc] = useState(null);

    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-7">
                {photos.map((photo, i) => (
                    <div
                        key={i}
                        className="group relative aspect-square rounded-xl overflow-hidden cursor-zoom-in bg-surface-dark border border-border-dark hover:border-primary-dark transition-all duration-300 card-lift"
                        onClick={() => setLightboxSrc(photo)}
                    >
                        <img
                            src={photo}
                            alt={`photo-${i}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <FiZoomIn size={24} className="text-white" />
                        </div>
                    </div>
                ))}
            </div>
            {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
        </>
    );
}

function BookCard({ book, index }) {
    return (
        <div
            className="group relative p-6 rounded-2xl bg-surface-dark border border-border-dark hover:border-primary-dark card-lift transition-all duration-500"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary-dark/10 flex items-center justify-center">
                <FiMessageSquare size={14} className="text-primary-dark" />
            </div>
            <div className="mb-4">
                <h4 className="text-base font-bold text-text-dark leading-tight group-hover:text-primary-dark transition-colors duration-300">
                    {book.title}
                </h4>
                <p className="text-xs text-primary-dark mt-1 font-medium">{book.author}</p>
            </div>
            <div className="h-px w-full bg-border-dark mb-4" />
            <p className="text-sm text-text-muted-dark leading-relaxed italic">"{book.takeaway}"</p>
        </div>
    );
}

function Interests() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="interests" className="py-24 px-6 md:px-12">
            <div className="max-w-6xl mx-auto space-y-20">

                <div>
                    <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary-dark/10 text-primary-dark text-xs font-semibold tracking-wider uppercase">
                        Beyond Code
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-text-dark">
                        Interests & <span className="text-gradient">Hobbies</span>
                    </h2>
                    <p className="mt-4 text-text-muted-dark max-w-xl text-base">
                        What I do when I'm not coding keeping balance between screen time and real life.
                    </p>
                </div>

                {/* Active Life */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-success-soft-dark flex items-center justify-center">
                            <FiActivity size={20} className="text-success-dark" />
                        </div>
                        <h3 className="text-xl font-bold text-text-dark">Active Life</h3>
                    </div>

                    <div className="flex gap-3">
                        {ACTIVITIES.map((activity, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTab(i)}
                                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === i
                                    ? "bg-primary-dark text-white shadow-lg shadow-primary-dark/25"
                                    : "bg-surface-dark text-text-muted-dark border border-border-dark hover:border-primary-dark hover:text-primary-dark"}`}
                            >
                                {activity.label}
                            </button>
                        ))}
                    </div>

                    <div className="max-w-2xl mx-auto flex gap-3">
                        <PhotoGrid photos={ACTIVITIES[activeTab].photos} key={activeTab} />
                    </div>
                </div>

                {/* Books */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary-dark/10 flex items-center justify-center">
                            <FiBookOpen size={20} className="text-primary-dark" />
                        </div>
                        <h3 className="text-xl font-bold text-text-dark">Books & Takeaways</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {BOOKS.map((book, i) => (
                            <BookCard key={i} book={book} index={i} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Interests;