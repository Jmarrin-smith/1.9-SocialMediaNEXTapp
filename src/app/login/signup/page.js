import styles from "./signup.module.css";
import Link from "next/link";

export default function signuppage() {
  async function handleaddpost(formData) {
    "use server";

    console.log("form submitted");

    const username = formData.get("username");
    const bio = formData.get("bio");
    console.log(username);
    console.log(bio);

    await db.query(`INSERT INTO posts (user, bio) VALUES ($1, $2)`, [
      username,
      bio,
    ]);
  }
  return (
    <>
      <h1>welcome to my sign up page</h1>
      <form action={handleaddpost}>
        <input name="username" placeholder="username" />
        <input name="bio" placeholder="bio" />
        <button>Submit</button>
      </form>
      <div className={styles.nav}>
        <Link href="/login">
          <h3>login user</h3>
        </Link>
      </div>
    </>
  );
}
