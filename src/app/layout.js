import "./globals.css";


export const metadata = {
  title: "Quotiva",
  description: "Quotiva is a personalized quote generator that allows you to create inspiring, customized quotes with your name and favorite themes or colors. Design unique, motivational messages tailored just for you!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      className="homescreen"
      >
        {children}
      </body>
    </html>
  );
}
