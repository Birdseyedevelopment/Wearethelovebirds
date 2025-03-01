
import "./globals.css";
import Monogram from "./components/monogram";
import Header from "./components/header";



export const metadata = {
  title: "WeAreTheLoveBiRDs",
  description: "Gerard and Bria are getting married heres what you need to know",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  >
      <meta name="viewport" content="width=device width, initial-scale=1.0"></meta>
      <body >
      <Header/>
        
        {children}
        <Monogram/>
        <footer>This website and it's contents were created by BIRDS EYE WEB DEVELOPMENT</footer>
      </body>
    </html>
  );
}
