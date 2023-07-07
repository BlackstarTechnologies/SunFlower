function Header(props) {
  return <div id="Header">Header</div>;
}

function Nav(props) {
  return <div id="Nav">Nav</div>;
}

export function Page_({ children }) {
  return (
    <section className="w-full flex-center flex-col ">
      <main className="App">
        <Header />
        {children}
        <Nav />
      </main>
    </section>
  );
}
