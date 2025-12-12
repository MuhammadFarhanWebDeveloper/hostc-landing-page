export default function CTA() {
  return (
    <div className="w-full rounded-2xl bg-blue-600 p-10 flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
      {/* LEFT CONTENT */}
      <div className="max-w-xl text-white space-y-4 z-20">
        <h1 className="text-4xl md:text-5xl font-bold">Hosting Flash Sale</h1>
        <p className="text-white/80 text-lg leading-relaxed">
          Hosting Flash Sale! Save up to 50% on all plans limited time only. Get
          blazing-fast for speeds
        </p>

        {/* INPUT */}
        <div className="flex items-center bg-white rounded-full overflow-hidden max-w-md mt-6">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="px-4 py-3 w-full outline-none text-gray-700"
          />
          <button className="bg-yellow-400 px-6 py-3 font-semibold text-black">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* RIGHT CIRCLES */}
      <div className="flex items-center justify-center gap-10 relative mt-10 md:mt-0">
        {/* First Circle */}
        <div className="relative w-52 h-52 bg-blue-500/60 backdrop-blur-md rounded-full flex flex-col items-center justify-center space-y-3 text-white">
          <div className="bg-blue-500 px-3 py-1 rounded-md text-sm opacity-90">
            For Limited Time
          </div>
          <h2 className="text-5xl font-bold text-yellow-400">
            68% <br /> Off
          </h2>
          <div className="bg-blue-500 px-3 py-1 rounded-md text-sm opacity-90">
            Hostings
          </div>
        </div>

        {/* Second Circle */}
        <div className="relative w-52 h-52 bg-blue-500/60 backdrop-blur-md rounded-full flex flex-col items-center justify-center space-y-3 text-white">
          <div className="bg-blue-500 px-3 py-1 rounded-md text-sm opacity-90">
            For Limited Time
          </div>
          <h2 className="text-5xl font-bold text-yellow-400">
            95% <br /> Off
          </h2>
          <div className="bg-blue-500 px-3 py-1 rounded-md text-sm opacity-90">
            Domain
          </div>
        </div>

        {/* Curved Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
          viewBox="0 0 400 400"
          fill="none"
          stroke="white"
          strokeWidth="3"
        >
          <path d="M20 200 C150 50, 250 350, 380 180" />
          <path d="M20 250 C160 80, 260 380, 380 230" />
          <path d="M20 150 C140 40, 240 330, 380 120" />
        </svg>
      </div>
    </div>
  );
}
