import Link from "next/link";
import styles from "./nav.module.css";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.navitemscontainer}>
        <div className={styles.placeholder}>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <div className={styles.home}>
          <Link href="/">
            <h1>week 9 social media app</h1>
          </Link>
        </div>
        <div className={styles.links}>
          <Link href="/posts">
            <h3>posts</h3>
          </Link>
          <Link href="/UsersPage">
            <h3>Users</h3>
          </Link>
          <Link href="/newpost">
            <h3>New Post</h3>
          </Link>
          <Link href="/login">
            <h3>login user</h3>
          </Link>
        </div>
      </div>
    </nav>
  );
}
