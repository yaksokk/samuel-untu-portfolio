const VARIANT_STYLES = {
  primary:
    "bg-primary dark:bg-primary-dark text-white border border-transparent hover:opacity-85 focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-primary-dark",
  transparent:
    "bg-transparent text-text dark:text-text-dark border border-transparent hover:bg-black/5 dark:hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-border dark:focus-visible:ring-border-dark",
  outline:
    "bg-transparent text-text dark:text-text-dark border border-border dark:border-border-dark hover:bg-black/5 dark:hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-border dark:focus-visible:ring-border-dark",
};

function Button({
  variant = "primary",
  onClick,
  children,
  type = "button",
  disabled = false,
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-1.5 rounded-md px-3.5 py-1.5 text-sm font-medium transition-all duration-200 outline-none focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${VARIANT_STYLES[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;