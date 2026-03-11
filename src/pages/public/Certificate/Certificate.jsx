import { Carousel } from "@/components/common";

import cert1 from "@/assets/img/sertifikat/Sertifikat_BasicJS.jpg";
import cert2 from "@/assets/img/sertifikat/Sertifikat_DevOps.jpg";
import cert3 from "@/assets/img/sertifikat/Sertifikat_FGA_samuel.jpg";
import cert4 from "@/assets/img/sertifikat/sertifikat_PMM3.jpg";

const CERTIFICATES = [
    { img: cert1, name: "Basic JavaScript" },
    { img: cert2, name: "DevOps" },
    { img: cert3, name: "Fresh Graduate Academy" },
    { img: cert4, name: "PMM 3" },
];

const CERTS_LOOP = [...CERTIFICATES, ...CERTIFICATES, ...CERTIFICATES, ...CERTIFICATES];

function Certificate() {
    return (
        <section id="certificate" className="flex items-center px-6 md:px-12 py-24">
            <div className="mx-auto max-w-7xl w-full">

                <div className="mb-12 animate-slide-up">
                    <span className="text-xs font-medium tracking-widest uppercase text-primary dark:text-primary-dark">
                        Certificates
                    </span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100">
                        My Credentials
                    </h2>
                </div>
                <div className="max-w-3xl mx-auto">
                    <Carousel
                        items={CERTS_LOOP}
                        speed="60s"
                        renderItem={(cert, i) => (
                            <div
                                key={i}
                                className="shrink-0 w-64 rounded-2xl overflow-hidden
                  bg-surface dark:bg-surface-dark
                  border border-border dark:border-border-dark
                  hover:border-primary dark:hover:border-primary-dark
                  transition-all duration-300 group"
                            >
                                <div className="w-full p-2">
                                    <img
                                        src={cert.img}
                                        alt={cert.name}
                                        className="w-full h-auto rounded-xl group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-3">
                                    <p className="text-sm font-medium text-stone-900 dark:text-stone-100 text-center">
                                        {cert.name}
                                    </p>
                                </div>
                            </div>
                        )}
                    />
                </div>

            </div>
        </section>
    );
}

export default Certificate;