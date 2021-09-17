import Link from "next/link";

const Nav = () => {
  return (
    <>
    <header className="bg-black text-white lg:px-32 px-8 bg-whitesmoke flex flex-wrap items-center py-2 shadow-md">
      <div className="flex-1 flex justify-between items-center">
        <Link href="/"><a className="text-xl">
          Portfolio
          </a>
        </Link>
      </div>

      <label for="menu-toggle" className="pointer-cursor md:hidden block">
        <svg className="fill-current text-white-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
          <ul className="md:flex items-center justify-between text-base text-white-700 pt-4 md:pt-0">
            <li>
              <Link href="/">
                <a className="md:p-4 py-3 px-0 block">About</a>
              </Link>
            </li>
            <li>
              <Link href="#project">
                <a className="md:p-4 py-3 px-0 block">Projects</a>
              </Link>
            </li>
            <li>
              <Link href="#skills">
                <a className="md:p-4 py-3 px-0 block">Skills</a>
              </Link>
            </li>
            <li>
              <Link href="#certificates">
                <a className="md:p-4 py-3 px-0 block">Certificates</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    
   </>
  );
};
export default Nav;