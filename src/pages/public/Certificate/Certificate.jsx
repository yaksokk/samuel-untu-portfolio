import { FiAward, FiExternalLink, FiCalendar, FiX, FiZoomIn } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

import cert1 from "@/assets/img/sertifikat/Sertifikat_BasicJS.jpg";
import cert2 from "@/assets/img/sertifikat/Sertifikat_DevOps.jpg";
import cert3 from "@/assets/img/sertifikat/Sertifikat_FGA_samuel.jpg";
import cert4 from "@/assets/img/sertifikat/sertifikat_PMM3.jpg";

const CERTIFICATES = [
    {
        img: cert1,
        name: "Basic JavaScript",
        issuer: "Dicoding Indonesia",
        date: "Jan 2025",
        category: "Programming",
    },
    {
        img: cert2,
        name: "DevOps",
        issuer: "Dicoding Indonesia",
        date: "Agu 2023",
        category: "DevOps",
    },
    {
        img: cert3,
        name: "Fresh Graduate Academy",
        issuer: "Digital Talent Scholarship",
        date: "Okt 2023",
        category: "AI",
    },
    {
        img: cert4,
        name: "PMM 3",
        issuer: "Kampus Merdeka",
        date: "2024",
        category: "Exchange",
    },
];


function CertificateModal({ cert, onClose }) {
    // Tutup modal saat klik backdrop atau tekan Escape
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEscape);
        // Lock scroll body
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    return (
        <div
            className="fixed mt-15 inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-dark/90 backdrop-blur-sm transition-opacity" />

            {/* Modal Content */}
            <div
                className="relative z-10 max-w-2xl w-full animate-scale-in"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute -top-5 z-50 -right-10 w-10 h-10 rounded-full bg-surface-dark/80 border border-border-dark text-text-dark flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                    <FiX size={20} />
                </button>

                {/* Certificate Image */}
                <div className="relative rounded-2xl overflow-hidden bg-surface-dark border border-border-dark shadow-2xl">
                    <img
                        src={cert.img}
                        alt={cert.name}
                        className="w-full h-auto max-h-[70vh] object-contain"
                    />
                </div>

                {/* Certificate Info */}
                <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold text-white">{cert.name}</h3>
                    <p className="text-sm text-text-muted-dark mt-1">
                        {cert.issuer} · {cert.date}
                    </p>
                </div>
            </div>
        </div>
    );
}

function CertificateCard({ cert, index, onView }) {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            className={`group relative bg-surface dark:bg-surface-dark rounded-2xl border border-border dark:border-border-dark overflow-hidden card-lift transition-all duration-700 ${
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            {/* Image Container */}
            <div className="relative aspect-4/3 overflow-hidden cursor-pointer">
                <img
                    src={cert.img}
                    alt={cert.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <button
                        onClick={() => onView(cert)}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-dark/80 border border-border-dark text-text-dark text-sm font-medium hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 backdrop-blur-sm"
                    >
                        <FiZoomIn size={16} />
                        View Certificate
                    </button>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-dark/70 backdrop-blur-sm border border-border-dark/50 text-xs font-medium text-text-dark dark:text-text-subtle-dark">
                    {cert.category}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary-dark/10 flex items-center justify-center shrink-0 mt-0.5">
                        <FiAward size={20} className="text-primary dark:text-primary-dark" />
                    </div>
                    <div className="min-w-0">
                        <h3 className="text-base font-bold text-text dark:text-text-dark leading-tight group-hover:text-primary dark:group-hover:text-primary-dark transition-colors duration-300">
                            {cert.name}
                        </h3>
                        <p className="text-sm text-text-muted dark:text-text-muted-dark mt-1">
                            {cert.issuer}
                        </p>
                        <div className="flex items-center gap-1.5 mt-2 text-xs text-text-subtle dark:text-text-subtle-dark">
                            <FiCalendar size={12} />
                            <span>{cert.date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Certificate() {
    const [selectedCert, setSelectedCert] = useState(null);
    const [titleVisible, setTitleVisible] = useState(false);
    const titleRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTitleVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (titleRef.current) observer.observe(titleRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="certificate" className="py-24 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">

                <div
                    ref={titleRef}
                    className={`mb-16 transition-all duration-700 ${
                        titleVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark text-xs font-semibold tracking-wider uppercase">
                        Certificates
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-text dark:text-text-dark">
                        My <span className="text-gradient">Credentials</span>
                    </h2>
                    <p className="mt-4 text-text-muted dark:text-text-muted-dark max-w-xl text-base">
                        Sertifikat dan sertifikasi yang telah saya peroleh selama perjalanan belajar dan berkarir.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CERTIFICATES.map((cert, index) => (
                        <CertificateCard
                            key={cert.name}
                            cert={cert}
                            index={index}
                            onView={setSelectedCert}
                        />
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedCert && (
                <CertificateModal
                    cert={selectedCert}
                    onClose={() => setSelectedCert(null)}
                />
            )}
        </section>
    );
}

export default Certificate;