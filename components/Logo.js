import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <Link href="/">
      <a>
        <Image
          src="/images/fight.png"
          className="object-contain"
          alt="Fight Logo"
          layout="fill"
        />
      </a>
    </Link>
  );
}

export default Logo;
