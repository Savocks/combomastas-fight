import Image from 'next/image';
import { useRouter } from 'next/router';

function Logo() {
  const router = useRouter();

  return (
    <div className="mx-auto cursor-pointer" onClick={() => router.push('/')}>
      <Image src="/images/fight.png" alt="Fight Logo" layout="fill" />
    </div>
  );
}

export default Logo;
