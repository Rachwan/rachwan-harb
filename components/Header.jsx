import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { HiOutlineMail } from "react-icons/hi";

function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Rachwan<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>
              {/* <HiOutlineMail className="text-xl" /> */}
              Contact Me
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
