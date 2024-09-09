import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./pagecomponants/nav/nav";
import { NoUser } from "@/componants/NoUser";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "hpphar",
  description: "totally not named google with the letters keyboard shifted",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Navbar />
          <SignedOut>
            <NoUser />
          </SignedOut>
          <SignedIn>
            {" "}
            <div className="wrappercontent">
              <div className="container">{children}</div>
            </div>
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
