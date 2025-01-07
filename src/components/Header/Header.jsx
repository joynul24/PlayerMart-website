import './Header.css'

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between items-center">
        <div>
          <img src="https://joynul2024.sirv.com/project-img/logo.png" alt="" />
        </div>
        {/* nav-items */}
        <div className="flex gap-12 cursor-pointer opacity-70">
          <p>Home</p>
          <p>Fixture</p>
          <p>Teams</p>
          <p>Schedules</p>
          <p className='font-bold flex items-center gap-2'>0 Coin <img className='w-7' src="https://joynul2024.sirv.com/project-img/coin.png" alt="" /></p>
        </div>
      </nav>
      {/* Banner Section */}
      <div className="bg-[url(https://joynul2024.sirv.com/project-img/bg-shadow.png)] bg-black bg-cover bg-center rounded-xl mt-6 text-white text-center space-y-6 py-16">
        <div className="flex justify-center">
        <img src="https://joynul2024.sirv.com/project-img/banner-main.png" alt="" />
        </div>
        <h2 className="text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h2>
        <p className="text-2xl font-medium opacity-70">Beyond Boundaries Beyond Limits</p>
        <p><button className="btn banner-btn">Claim Free Credit</button></p>
      </div>
    </header>
  );
};

export default Header;
