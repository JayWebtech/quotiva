import Navbar from "@/components/navbar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen mb-2 container mx-auto px-4 sm:px-10 md:px-8 lg:px-16">
      <Navbar />
      <main className="grow">{children}</main>
    </div>
  );
};

export default Layout;
