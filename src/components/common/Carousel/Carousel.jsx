function Carousel({ items, renderItem, speed = "15s" }) {
  return (
    <div className="marquee-wrapper overflow-hidden w-full">
      <div
        className="animate-marquee flex gap-4"
        style={{ animationDuration: speed }}
      >
        {items.map((item, i) => renderItem(item, i))}
      </div>
    </div>
  );
}

export default Carousel;