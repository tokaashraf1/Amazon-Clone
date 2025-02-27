export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-screen flex justify-center ">
      <button
        onClick={scrollToTop}
        className="w-full bg-gray-700 text-white px-6 py-4 border-none hover:bg-gray-800 transition duration-300 font-light rounded-none"
      >
        Back to Top
      </button>
    </div>
  );
}
