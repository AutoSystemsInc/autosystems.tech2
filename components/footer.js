import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="my-14">
      <p className="flex justify-center gap-16">
        <small className="block text-sm">© 2023 AutoSystems,Inc.</small>
        <small className="block text-sm">〒107-0062 東京都港区南青山2-2</small>
      </p>
    </footer>
  );
};

export default Footer;