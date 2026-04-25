import { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiBookOpen, FiActivity, FiMessageSquare } from "react-icons/fi";

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

function PhotoCarousel({ photos }) {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % photos.length);
    const prev = () => setCurrent((prev) => (prev - 1 + photos.length) % photos.length);

    return (
        <div className="relative group">
            {/* Main Image */}
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-surface-elevated dark:bg-surface-elevated-dark">
                <img
                    src={photos[current]}
                    alt={`Photo ${current + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark/40 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-dark/60 backdrop-blur-sm text-white text-xs font-medium">
                    {current + 1} / {photos.length}
                </div>
            </div>

            {photos.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface/90 dark:bg-surface-dark/90 border border-border dark:border-border-dark text-text dark:text-text-dark flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary"
                    >
                        <FiChevronLeft size={20} />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface/90 dark:bg-surface-dark/90 border border-border dark:border-border-dark text-text dark:text-text-dark flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary"
                    >
                        <FiChevronRight size={20} />
                    </button>
                </>
            )}

            {/* Thumbnails */}
            <div className="flex gap-2 mt-3 justify-center">
                {photos.map((photo, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-16 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                            i === current
                                ? "ring-2 ring-primary dark:ring-primary-dark ring-offset-2 ring-offset-bg dark:ring-offset-bg-dark"
                                : "opacity-50 hover:opacity-80"
                        }`}
                    >
                        <img src={photo} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>
        </div>
    );
}

function BookCard({ book, index }) {
    return (
        <div
            className="group relative p-6 rounded-2xl bg-surface dark:bg-surface-dark border border-border dark:border-border-dark hover:border-primary dark:hover:border-primary-dark card-lift transition-all duration-500"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary/10 dark:bg-primary-dark/10 flex items-center justify-center">
                <FiMessageSquare size={14} className="text-primary dark:text-primary-dark" />
            </div>

            {/* Title & Author */}
            <div className="mb-4">
                <h4 className="text-base font-bold text-text dark:text-text-dark leading-tight group-hover:text-primary dark:group-hover:text-primary-dark transition-colors duration-300">
                    {book.title}
                </h4>
                <p className="text-xs text-primary dark:text-primary-dark mt-1 font-medium">
                    {book.author}
                </p>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-border dark:bg-border-dark mb-4" />

            {/* Takeaway */}
            <p className="text-sm text-text-muted dark:text-text-muted-dark leading-relaxed italic">
                "{book.takeaway}"
            </p>
        </div>
    );
}

function Interests() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="interests" className="py-24 px-6 md:px-12">
            <div className="max-w-6xl mx-auto space-y-20">

                {/* Section Header */}
                <div className="text-center md:text-left">
                    <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/10 dark:bg-accent-dark/10 text-accent dark:text-accent-dark text-xs font-semibold tracking-wider uppercase">
                        Beyond Code
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-text dark:text-text-dark">
                        Interests & <span className="text-gradient">Hobbies</span>
                    </h2>
                    <p className="mt-4 text-text-muted dark:text-text-muted-dark max-w-xl text-base">
                        What I do when I'm not coding. Keeping balance between screen time and real life.
                    </p>
                </div>

                {/* Active Life Section */}
                <div className="space-y-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-success-soft dark:bg-success-soft-dark flex items-center justify-center">
                            <FiActivity size={20} className="text-success dark:text-success-dark" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-text dark:text-text-dark">
                            Active Life
                        </h3>
                    </div>

                    {/* Tab Buttons */}
                    <div className="flex gap-3">
                        {ACTIVITIES.map((activity, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTab(i)}
                                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                                    activeTab === i
                                        ? "bg-primary dark:bg-primary-dark text-white shadow-lg shadow-primary/25 dark:shadow-primary-dark/25"
                                        : "bg-surface dark:bg-surface-dark text-text-muted dark:text-text-muted-dark border border-border dark:border-border-dark hover:border-primary dark:hover:border-primary-dark hover:text-primary dark:hover:text-primary-dark"
                                }`}
                            >
                                {activity.label}
                            </button>
                        ))}
                    </div>

                    {/* Carousel */}
                    <PhotoCarousel photos={ACTIVITIES[activeTab].photos} />
                </div>

                {/* Books Section */}
                <div className="space-y-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary-glow/50 dark:bg-primary-glow-dark/50 flex items-center justify-center">
                            <FiBookOpen size={20} className="text-primary dark:text-primary-dark" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-text dark:text-text-dark">
                            Books & Takeaways
                        </h3>
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