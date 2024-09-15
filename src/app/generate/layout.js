import Navbar from "@/components/navbar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen homescreen">
      <div className="container mx-auto px-4 sm:px-10 md:px-8 lg:px-16">
        <Navbar />
        <main className="grow">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
