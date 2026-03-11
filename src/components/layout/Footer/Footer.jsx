function Footer() {
  return (
    <footer className="py-6 border-t border-border dark:border-border-dark">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <p className="text-center text-sm text-stone-500 dark:text-stone-400">
          © {new Date().getFullYear()} Samuel Untu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;