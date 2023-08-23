import Logo from "./../assets/logo-bar.png";

const Navbar = () => {
  return (
    <>
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">AnimaCare</span>
              <img className="h-8 w-auto" src={Logo} alt="AnimaCare" />
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="#"
              className="text-md font-semibold leading-6 text-gray-900"
            >
              Home
            </a>
            <a
              href="#"
              className="text-md font-semibold leading-6 text-gray-900"
            >
              Artikel
            </a>
            <a
              href="#"
              className="text-md font-semibold leading-6 text-gray-900"
            >
              Sharing
            </a>
            <a
              href="#"
              className="text-md font-semibold leading-6 text-gray-900"
            >
              Belanja
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-md font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>
      <hr />
    </>
  );
};

export default Navbar;
