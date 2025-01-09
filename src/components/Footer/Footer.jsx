import "./Footer.css";

const Footer = () => {
  return (
    <footer className="mt-52 text-white bg-[#06091A]">
 
        <div className="-top-36 relative  bg-opacity-15 backdrop-blur-lg bg-white border-2 border-white container mx-auto p-6 rounded-xl">
          <div className="space-y-4 text-center bg-white text-black bg-[url(https://joynul2024.sirv.com/project-img/bg-shadow.png)] bg-cover bg-center py-20 rounded-xl">
            <h2 className="text-3xl font-bold">Subscribe to our Newsletter</h2>
            <p className="text-xl font-bold opacity-70">Get the latest updates and news right in your inbox!</p>
            <div className="flex justify-center mt-5">
              <input
                className="pl-7 outline-none text-black rounded-l-xl"
                type="text"
                placeholder="Enter your email"
              />
              <button className="btn-footer btn">Subscribe</button>
            </div>
          </div>
        </div>

      <div className="mb-16 flex justify-center">
        <img
          src="https://joynul2024.sirv.com/project-img/logo-footer.png"
          alt=""
        />
      </div>
      {/* footer content */}
      <div className="footer container mx-auto p-10">
        <nav>
          <h6 className="footer-title">About Us</h6>
          <p className="text-color">
            We are a passionate team <br /> dedicated to providing the best{" "}
            <br /> services to our customers.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover text-color">Home</a>
          <a className="link link-hover text-color">Services</a>
          <a className="link link-hover text-color">About</a>
          <a className="link link-hover text-color">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Subscribe</h6>
          <p className="text-color">
            Subscribe to our newsletter for the <br /> latest updates.
          </p>

          <div className="flex mt-5">
            <input
              className="pl-7 outline-none text-black rounded-l-xl"
              type="text"
              placeholder="Enter your email"
            />
            <button className="btn-footer btn">Subscribe</button>
          </div>
        </nav>
      </div>
      <hr className="opacity-70 mt-7" />
      <p className="text-center mt-8 pb-8 opacity-70">@2024 Your Company All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
