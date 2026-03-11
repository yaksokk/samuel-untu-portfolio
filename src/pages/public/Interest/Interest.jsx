import { Carousel } from "@/components/common";
import richDad from "@/assets/img/books/rich-dad-poor-dad.jpg";
import filosofiTeras from "@/assets/img/books/filosofi-teras.jpg";
import goodVibes from "@/assets/img/books/good-vibes-good-life.jpg";
import psychologyOfMoney from "@/assets/img/books/the-psychology-of-money.jpg";

import active1 from "@/assets/img/nature1.jpg";

const BOOKS = [
  {
    img: richDad,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    quote: "The poor and the middle class work for money. The rich have money work for them.",
  },
  {
    img: filosofiTeras,
    title: "Filosofi Teras",
    author: "Henry Manampiring",
    quote: "Kita tidak bisa mengontrol apa yang terjadi, tapi kita selalu bisa mengontrol respons kita.",
  },
  {
    img: goodVibes,
    title: "Good Vibes, Good Life",
    author: "Vex King",
    quote: "You can't live a positive life with a negative mind.",
  },
  {
    img: psychologyOfMoney,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    quote: "Wealth is what you don't see. It's the cars not purchased, the clothes not bought.",
  },
];

const ACTIVE_LIFE = [
    { img: active1, name: "Hiking" },
    { img: active1, name: "Badminton" },
    { img: active1, name: "Running" },
];

const BOOKS_LOOP = [...BOOKS, ...BOOKS, ...BOOKS, ...BOOKS];
const ACTIVE_LOOP = [...ACTIVE_LIFE, ...ACTIVE_LIFE, ...ACTIVE_LIFE, ...ACTIVE_LIFE];

function Interests() {
    return (
        <section id="interests" className="min-h-screen flex items-center p-6 md:px-12">
            <div className="mx-auto max-w-7xl w-full space-y-20">

                <div className="animate-slide-up">
                    <span className="text-xs font-medium tracking-widest uppercase text-primary dark:text-primary-dark">
                        Beyond Code
                    </span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100">
                        Interests & Hobbies
                    </h2>
                    <p className="mt-3 text-stone-500 dark:text-stone-400 italic text-sm md:text-base">
                        "The more that you read, the more things you will know." — Dr. Seuss
                    </p>
                </div>

                <div className="animate-slide-up animation-delay-200 space-y-4">
                    <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                        📚 Books I've Read
                    </h3>
                    <Carousel
                        items={BOOKS_LOOP}
                        speed="25s"
                        renderItem={(book, i) => (
                            <div
                                key={i}
                                className="shrink-0 w-36 rounded-2xl overflow-hidden
    bg-surface dark:bg-surface-dark
    border border-border dark:border-border-dark
    hover:border-primary dark:hover:border-primary-dark
    transition-all duration-300 group"
                            >
                                <img
                                    src={book.img}
                                    alt={book.title}
                                    className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="p-3 space-y-1">
                                    <p className="text-sm font-semibold text-stone-900 dark:text-stone-100 leading-tight">
                                        {book.title}
                                    </p>
                                    <p className="text-xs text-primary dark:text-primary-dark">
                                        {book.author}
                                    </p>
                                    <p className="text-xs text-stone-500 dark:text-stone-400 italic leading-relaxed pt-1">
                                        "{book.quote}"
                                    </p>
                                </div>
                            </div>
                        )}
                    />
                </div>

                <div className="animate-slide-up animation-delay-400 space-y-4">
                    <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                        🌿 Active Life
                    </h3>
                    <Carousel
                        items={ACTIVE_LOOP}
                        speed="20s"
                        renderItem={(item, i) => (
                            <div
                                key={i}
                                className="shrink-0 w-36 rounded-2xl overflow-hidden relative group"
                            >
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-3">
                                    <span className="text-white text-sm font-semibold">
                                        {item.name}
                                    </span>
                                </div>
                            </div>
                        )}
                    />
                </div>

            </div>
        </section>
    );
}

export default Interests;
