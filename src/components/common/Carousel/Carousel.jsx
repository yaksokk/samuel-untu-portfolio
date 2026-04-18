import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Carousel({ items, aspect = "aspect-square", cols = 3 }) {
  const [current, setCurrent] = useState(0);
  const total = items.length;
  const canPrev = current > 0;
  const canNext = current < total - cols;
  const gap = 16;
  const itemWidth = `calc(${100 / cols}% - ${gap * (cols - 1) / cols}px)`;

  return (
    <div className="space-y-4">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            gap: `${gap}px`,
            transform: `translateX(calc(-${current} * (${itemWidth} + ${gap}px)))`,
          }}
        >
          {items.map((item, i) => (
            <div key={i} className="shrink-0 rounded-2xl overflow-hidden bg-surface dark:bg-surface-dark border border-border dark:border-border-dark hover:border-primary dark:hover:border-primary-dark transition-all duration-300 group" style={{ width: itemWidth }}>
              <div className={`w-full overflow-hidden ${aspect}`}>
                <img
                  src={item.img ?? item}
                  alt={item.name ?? `photo-${i}`}
                  className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${item.name ? "object-contain p-2" : "object-cover"}`}
                />
              </div>
              {item.name && (
                <div className="p-3">
                  <p className="text-sm font-medium text-stone-900 dark:text-stone-100 text-center">{item.name}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {total > cols && (
        <div className="flex items-center justify-center gap-3 pt-2">
          <button onClick={() => setCurrent((p) => p - 1)} disabled={!canPrev} className="w-8 h-8 rounded-full flex items-center justify-center border border-border dark:border-border-dark text-stone-500 dark:text-stone-400 hover:border-primary dark:hover:border-primary-dark hover:text-primary dark:hover:text-primary-dark disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200">
            <FiChevronLeft size={16} />
          </button>
          <div className="flex gap-1.5">
            {Array.from({ length: total - cols + 1 }).map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-4 bg-primary dark:bg-primary-dark" : "w-1.5 bg-stone-300 dark:bg-stone-700"}`} />
            ))}
          </div>
          <button onClick={() => setCurrent((p) => p + 1)} disabled={!canNext} className="w-8 h-8 rounded-full flex items-center justify-center border border-border dark:border-border-dark text-stone-500 dark:text-stone-400 hover:border-primary dark:hover:border-primary-dark hover:text-primary dark:hover:text-primary-dark disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200">
            <FiChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}

export default Carousel;