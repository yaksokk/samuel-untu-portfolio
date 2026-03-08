import { Navbar } from "../";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
    </>
  );
}

export default Layout;