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

const certPhotos = CERTIFICATES.map((c) => c.img);

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

                <Carousel items={CERTIFICATES} aspect="aspect-video" cols={4} />

            </div>
        </section>
    );
}

export default Certificate;