import { NextPage } from "next";
import Link from "next/link";

const Nav: NextPage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/Projects">PROJECTS</Link>
        </li>
        <li>
          <Link href="/Tech">TECH</Link>
        </li>
        <li>
          <Link href="/About">ABOUT</Link>
        </li>
        <li>
          <Link href="/Contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
