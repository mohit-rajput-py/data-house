import { Geist, Geist_Mono , Outfit} from "next/font/google";
import "./globals.css";
import ReloadOnHome from "@/components/ReloadOnHome";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outFit = Outfit({
  variable:"--font-outfit",
  subsets: ["latin"]
})

export const metadata = {
  title: "DataHouse",
  description: "You will get any kind of dataset here!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outFit.variable} antialiased`}
        style={ { fontFamily : "var(--font-outfit)" }}
      >
        <ReloadOnHome />
        {children}
      </body>
    </html>
  );
}
