import Logo from "./../assets/logo-bar.png";
const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-100 text-base-content">
        <div>
          <img className="h-8 w-auto" src={Logo} alt="AnimaCare" />
          <p>
            Hadir untuk membantu animal lovers berkonsultasi dengan dokter hewan
            terpercaya!. <br /> Konsultasikan kesehatan hewan peliharaan
            kesayangan anda secara gratis hanya di AnimaCare!.
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Artikel</a>
          <a className="link link-hover">Sharing</a>
          <a className="link link-hover">Belanja</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
