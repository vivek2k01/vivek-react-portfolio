const Footer = () => {
  return (
    <footer className="bg-[#020617] border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-1 sm:py-4 text-center">
        <p className="text-[11px] sm:text-sm text-gray-400 leading-relaxed">
          © {new Date().getFullYear()}{" "}
          <span className="text-gray-300 font-medium">
            Vivek Kumar Yadav
          </span>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
