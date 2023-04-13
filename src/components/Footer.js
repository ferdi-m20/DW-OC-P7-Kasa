import logoFooter from "../assets/logo_footer.svg";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <img src={logoFooter} alt="Kasa, location d'appartement" />
        <p className="copyright">© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
}

export default Footer;
