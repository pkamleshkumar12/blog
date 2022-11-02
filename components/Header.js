import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <Link href="/" passHref>
          <h2>Kamlesh&apos;s blog</h2>
        </Link>

        <Link href="/about" passHref>
          <a>About</a>
        </Link>
        <Link href="/downloadResume" passHref>
          <a>Download Resume</a>
        </Link>
      </div>
    </header>
  );
}
