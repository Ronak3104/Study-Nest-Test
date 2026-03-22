const Footer = () => {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 text-center text-sm text-slate-600 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} StudyNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;