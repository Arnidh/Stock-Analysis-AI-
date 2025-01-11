import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Advisor", href: "/advisor" },
  { name: "SignUp", href: "/sign-up" },
  { name: "Login", href: "/login" },
  { name: "Contact", href: "https://linktr.ee/mehulg" },
];

export default function Navbar() {
  return (
    <nav>
      <ul className="flex justify-center items-center">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="link"> {link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}