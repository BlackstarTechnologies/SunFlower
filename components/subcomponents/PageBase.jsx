import Link from "next/link";

function Header(props) {
  return (
    <div id="Header">
      {/* Profile Picture */}
      <div>Profile Picture</div>

      {/* Logo */}
      <div className="m-auto">Logo</div>

      {/* Menu Bar */}
      <div>Hamburger</div>
    </div>
  );
}

function Nav(props) {
  return (
    <div id="Nav">
      {/* Home Feed */}
      <Link href="/home">
        <i className="fa-solid fa-house"></i>
      </Link>

      {/* Search */}
      <Link href="/search">
        <i className="fa-solid fa-magnifying-glass"></i>
      </Link>

      {/* Notifications */}
      <Link href="/notifications">
        <i className="fa-regular fa-bell"></i>
      </Link>

      {/* Direct Messages */}
      <Link href="/message">
        <i className="fa-regular fa-envelope"></i>
      </Link>
    </div>
  );
}

export default function Page_({ children }) {
  return (
    <section className="w-full flex-center flex-col  ">
      <main className="App">
        <Header />
        <div className="Body">{children}</div>

        <Nav />
      </main>
    </section>
  );
}
