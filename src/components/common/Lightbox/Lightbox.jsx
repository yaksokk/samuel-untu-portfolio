import { useEffect } from "react";
import { FiX } from "react-icons/fi";

function Lightbox({ src, alt, onClose }) {
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [onClose]);

    useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
        document.body.style.overflow = "";
    };
}, []);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 pt-20"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-20 right-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
            >
                <FiX size={18} />
            </button>

            <img
                src={src}
                alt={alt}
                className="max-w-full max-h-[80vh] rounded-2xl object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    );
}

export default Lightbox;