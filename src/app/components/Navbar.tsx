import Image from "next/image";
import Link from "next/link";
import FontSelect from "./FontSelect";
import Divider from "./Divider";
import ThemeSwitcher from "./ThemeSelect";

export default function Navbar() {
  return (
    <nav className="mt-14 flex w-full justify-between">
      {/* Logo */}
      <div className="relative h-9 w-8">
        <Image src="/images/logo.svg" alt="App logo" fill priority />
      </div>

      <div className="flex items-center gap-5">
        {/* Font selector */}
        <FontSelect />
        {/* Theme toggler */}
        <Divider />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
