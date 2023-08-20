function Footer() {
  return (
    <footer className="bg-[#272525] text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Footer Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-[#f2ee1b]" href="#about">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-[#f2ee1b]" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="hover:text-[#f2ee1b]" href="#contact">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="hover:text-[#f2ee1b]" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#f2ee1b]">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="text-white hover:text-[#f2ee1b]">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-white hover:text-[#f2ee1b]">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" className="text-white hover:text-[#f2ee1b]">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border border-gray-400 px-4 py-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f2ee1b]"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border border-gray-400 px-4 py-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f2ee1b]"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="border border-gray-400 px-4 py-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f2ee1b] h-24"
                  placeholder="Write your message here"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-white text-black px-6 py-2 rounded-md hover:bg-[#f2ee1b] focus:outline-none focus:ring-2 focus:ring-[#f2ee1b]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#3c3939] py-4 text-center">
        <p className="text-white text-sm">
          <span className="text-[#f2ee1b] text-lg"> &copy; </span>
          {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;