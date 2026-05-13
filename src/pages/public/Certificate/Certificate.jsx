import { FiAward, FiCalendar, FiX, FiZoomIn } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

const CERTIFICATES = [
    {
        img: "https://res.cloudinary.com/ddim50bkl/image/upload/v1777170547/Dicoding_DevOps_tzhoxv.jpg",
        name: "Belajar Dasar-Dasar DevOps",
        issuer: "Dicoding Indonesia",
        date: "Agustus 2023",
        category: "DevOps",
    },
    {
        img: "https://res.cloudinary.com/ddim50bkl/image/upload/v1777170545/sertifikat_dicoding-web-basic_ypg9e5.jpg",
        name: "Belajar Dasar Pemrograman Web",
        issuer: "Dicoding Indonesia",
        date: "Januari 2025",
        category: "Web",
    },
    {
        img: "https://res.cloudinary.com/ddim50bkl/image/upload/v1777170544/sertifikat_dicoding-Prompt_Engineering_untuk_Software_Developer_ncamdg.jpg",
        name: "Prompt Engineering untuk Software Developer",
        issuer: "Dicoding Indonesia",
        date: "April 2026",
        category: "AI",
    },
    {
        img: "https://res.cloudinary.com/ddim50bkl/image/upload/v1777170544/sertifikat_dicoding-Belajar_Membuat_Front-End_Web_untuk_Pemula_fdvqmh.jpg",
        name: "Belajar Membuat Front-End Web untuk Pemula",
        issuer: "Dicoding Indonesia",
        date: "April 2026",
        category: "Frontend",
    },
    {
        img: "https://res.cloudinary.com/ddim50bkl/image/upload/v1777170545/sertifikat_dicoding-AI_yiwwbr.jpg",
        name: "Belajar Dasar AI",
        issuer: "Dicoding Indonesia",
        date: "April 2026",
        category: "AI",
    },
    {
        img: "https://res.cloudinary.com/ddim50bkl/image/upload/v1777170546/sertifikat_dicoding-Belajar_Membuat_Aplikasi_Web_dengan_React_hd7sqi.jpg",
        name: "Belajar Membuat Aplikasi Web dengan React",
        issuer: "Dicoding Indonesia",
        date: "April 2026",
        category: "Frontend",
    },
    {
        img: "https://res.cloudinary.com/ddim50bkl/image/upload/v1777170545/sertifikat_dicoding-Belajar_Dasar_Data_Science_jqqjcq.jpg",
        name: "Belajar Dasar Data Science",
        issuer: "Dicoding Indonesia",
        date: "April 2026",
        category: "Data",
    },
    {
        img: "https://res.cloudinary.com/ddim50bkl/image/upload/v1777170543/Sertifikat_FGA-samuel_jaaywx.jpg",
        name: "Artificial Intelligence for Junior Developer",
        issuer: "Digital Talent Scholarship",
        date: "Oktober 2023",
        category: "AI",
    },
    {
        img: "https://res.cloudinary.com/ddim50bkl/image/upload/v1777170549/Huawe_HCAI-AI3.5_jzenek.png",
        name: "HCIA-AI",
        issuer: "Huawei ICT Academy",
        date: "Juli 2025",
        category: "AI",
    },
    {
        img: "https://res.cloudinary.com/ddim50bkl/image/upload/v1777170545/Sertifikat_PMM3_fg8m7t.jpg",
        name: "Pertukaran Mahasiswa Merdeka Batch 3",
        issuer: "Kemdikbudristek",
        date: "2023",
        category: "Exchange",
    },
];

const CATEGORY_COLORS = {
    DevOps: "bg-orange-500/10 text-orange-400",
    Web: "bg-blue-500/10 text-blue-400",
    AI: "bg-purple-500/10 text-purple-400",
    Frontend: "bg-cyan-500/10 text-cyan-400",
    Data: "bg-green-500/10 text-green-400",
    Exchange: "bg-yellow-500/10 text-yellow-400",
};

function CertificateModal({ cert, onClose }) {
    useEffect(() => {
        const handleEscape = (e) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pt-20" onClick={onClose}>
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <div className="relative z-10 max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-surface-dark border border-border-dark text-text-dark flex items-center justify-center hover:bg-primary-dark hover:text-white transition-all duration-300 z-10"
                >
                    <FiX size={18} />
                </button>
                <div className="rounded-2xl overflow-hidden bg-surface-dark border border-border-dark shadow-2xl">
                    <img src={cert.img} alt={cert.name} className="w-full h-auto max-h-[70vh] object-contain" loading="lazy" />
                </div>
                <div className="mt-4 text-center">
                    <h3 className="text-lg font-bold text-text-dark">{cert.name}</h3>
                    <p className="text-sm text-text-muted-dark mt-1">{cert.issuer} · {cert.date}</p>
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
            ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
            { threshold: 0.1 }
        );
        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    const categoryColor = CATEGORY_COLORS[cert.category] || "bg-primary-dark/10 text-primary-dark";

    return (
        <div
            ref={cardRef}
            className={`group relative bg-surface-dark rounded-2xl border border-border-dark overflow-hidden card-lift transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="relative aspect-video overflow-hidden cursor-pointer" onClick={() => onView(cert)}>
                <img
                    src={cert.img}
                    alt={cert.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-dark/80 border border-border-dark text-text-dark text-sm font-medium backdrop-blur-sm">
                        <FiZoomIn size={16} />
                        View
                    </span>
                </div>
                <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium ${categoryColor}`}>
                    {cert.category}
                </div>
            </div>

            <div className="p-4">
                <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary-dark/10 flex items-center justify-center shrink-0 mt-0.5">
                        <FiAward size={18} className="text-primary-dark" />
                    </div>
                    <div className="min-w-0">
                        <h3 className="text-sm font-bold text-text-dark leading-tight group-hover:text-primary-dark transition-colors duration-300 line-clamp-2">
                            {cert.name}
                        </h3>
                        <p className="text-xs text-text-muted-dark mt-1">{cert.issuer}</p>
                        <div className="flex items-center gap-1.5 mt-1.5 text-xs text-text-subtle-dark">
                            <FiCalendar size={11} />
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
            ([entry]) => { if (entry.isIntersecting) { setTitleVisible(true); observer.unobserve(entry.target); } },
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
                    className={`mb-16 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary-dark/10 text-primary-dark text-xs font-semibold tracking-wider uppercase">
                        Certificates
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-text-dark">
                        My <span className="text-gradient">Credentials</span>
                    </h2>
                    <p className="mt-4 text-text-muted-dark max-w-xl text-base">
                        Certificates and certifications I have obtained during my learning journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {CERTIFICATES.map((cert, index) => (
                        <CertificateCard key={cert.name} cert={cert} index={index} onView={setSelectedCert} />
                    ))}
                </div>
            </div>

            {selectedCert && <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />}
        </section>
    );
}

export default Certificate;
