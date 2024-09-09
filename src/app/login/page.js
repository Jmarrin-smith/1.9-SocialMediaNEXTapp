import styles from "./login.module.css";
import db from "@/lib/serveraction";
import Link from "next/link";

export default async function Loginpage(params) {
  async function handleaddpost(formData) {
    "use server";

    console.log("form submitted");

    const username = formData.get("username");
    console.log(username);

    await db.query(`INSERT INTO posts (user, bio) VALUES ($1, $2)`, [username]);
  }
  return (
    <>
      <h1>welcome to my login page</h1>
      <form action={handleaddpost}>
        <input name="username" placeholder="username" />
        <button>Submit</button>
      </form>
      <div className={styles.nav}>
        <Link href="/login/signup">
          <h3> sign up user </h3>
        </Link>
      </div>
    </>
  );
}
