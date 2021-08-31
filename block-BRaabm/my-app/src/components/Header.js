function Header() {
  return (
    <header className="header">
      <div className="container flex">
        <a className="brand" href="#">
          <img
            src="https://launchpad.altcampus.school/images/altcampus-logo.svg"
            alt="altcampus-logo"
          ></img>
        </a>

        <nav>
          <a href="#">
            <img src="assets/icons/bell.svg" alt="bell" />
          </a>

          <a href="#">
            <span>Sarah Jone</span>
            <img src="assets/icons/user.svg" alt="user" />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
