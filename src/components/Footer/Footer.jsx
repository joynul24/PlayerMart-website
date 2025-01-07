import './Footer.css'

const Footer = () => {
  return (
    <footer className="mt-28 bg-[#06091A]">
      <div className="mb-16 flex justify-center">
        <img
          src="https://joynul2024.sirv.com/project-img/logo-footer.png"
          alt=""
        />
      </div>
      {/* footer content */}
      <div className="footer container mx-auto text-white  p-10">
        <nav>
          <h6 className="footer-title">About Us</h6>
          <p className='text-color'>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
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
          <p className='text-color'>Subscribe to our newsletter for the <br /> latest updates.</p>

          <div className='flex mt-5'>
            <input className='pl-7 outline-none text-black rounded-l-xl' type="text" placeholder='Enter your email'/>
            <button className='btn-footer btn'>Subscribe</button>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
