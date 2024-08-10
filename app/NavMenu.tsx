import Link from 'next/link';
import styles from './NavMenu.module.css';
import Image from 'next/image';
import { SignInButton, SignOutButton } from '../components/buttons';
import AuthCheck from '@/components/AuthCheck';

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <Link href={'/'}>
        <Image
          src="/logo.svg" // Route of the image file
          width={216}
          height={30}
          alt="Ars Magica Logo"
        />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={'/characters'}>Characters</Link>
        </li>
        <li>
          <Link href={'/sagas'}>Sagas</Link>
        </li>
        <li>
          <Link href={'/rules'}>Spells</Link>
        </li>
        <li>
          <Link href={'/tools'}>Tools</Link>
        </li>
        <li>
          <Link href={'/sources'}>Sources</Link>
        </li>
        <li>
          <SignInButton />
        </li>

        <li>
        <AuthCheck>
            <SignOutButton />
          </AuthCheck>
        </li>
      </ul>
    </nav>
  );
}
