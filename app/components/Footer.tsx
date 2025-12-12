import Image from "next/image";

const quickLinks = [
  "About Us",
  "Support Center",
  "Domain Search",
  "My Account",
  "Contact Us",
];

const usefulLinks = [
  "Cloud Hosting",
  "VPS Hosting",
  "Shared Hosting",
  "WP Hosting",
  "Web Hosting",
];

export default function Footer() {
  return (
    <footer className="text-gray-600 bg-gray-100 rounded-t-2xl mt-6 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        {/* LEFT SECTION */}
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <div className="logo">
              <Image
                src="/images/footer-logo1.png"
                width={101}
                height={101}
                alt="HOSTC"
              />
            </div>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Take control of your online presence with top-tier web hosting
            solutions. Whether you&apos;re launching your first.
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left">
          {/* QUICK LINKS */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="h5 text-gray-900 tracking-widest text-sm mb-3">
              Quick Links
            </h2>
            <nav className="list-none mb-10 flex flex-col gap-4">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </nav>
          </div>

          {/* USEFUL LINKS */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="h5 text-gray-900 tracking-widest text-sm mb-3">
              Useful Links
            </h2>
            <nav className="list-none mb-10 flex flex-col gap-4">
              {usefulLinks.map((item) => (
                <li key={item}>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </nav>
          </div>

          {/* NEWSLETTER */}
          <div className="lg:w-1/2 md:1/2 w-full px-4">
            <h2 className="h5 text-gray-900 tracking-widest text-sm mb-3">
              Newsletter
            </h2>

            <p>Subscribe to our newsletter</p>
            <div className="my-3 bg-primary-light p-2 rounded-full text-lg flex items-center w-full justify-center">
              <input
                type="text"
                placeholder="Enter Email Address"
                className="text-lg outline-none text-white placeholder:text-white px-3 w-full border-none font-semibold"
              />
              <button className="btn-primary bg-secondary text-black">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="bg-gray-300 p-3 mx-auto">
        <p className="text-center mx-auto">Frontend Project By Farhan</p>
      </div>
    </footer>
  );
}
