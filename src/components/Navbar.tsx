import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="p-4  bg-black text-white">
      <div className="flex justify-between mx-6">
        <div className="">
          <Link href="/">Logo</Link>
        </div>
        <div className="">
          <ul className="flex gap-8 items-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/product">Product</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
