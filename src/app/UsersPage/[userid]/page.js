import styles from "./userid.module.css";
import { db } from "@/lib/serveraction";
import { currentUser } from "@clerk/nextjs/dist/types/server";

export default async function Userspage() {
  const user = await currentUser();

  // check the database to see if there is a profile with this clerk_id
  const response = await db.query(
    `SELECT * FROM profiles WHERE clerk_id = $1`,
    [user.id]
  );

  // if we don't have a profile, give the form to add one
  if (response.rowCount === 0) {
    return <ProfileForm />;
  }

  // if we DO have a profile, show the details
  const profile = response.rows[0];
  return (
    <>
      <div className={styles.username}>
        <h1>user</h1>
      </div>
      <div className={styles.postcontainer}>
        <div className={styles.postbox}>
          <h1>user</h1>
          <div className={styles.postcontent}>
            <p>content</p>
          </div>
          <div className={styles.like}>
            <button>like</button>
          </div>
        </div>
      </div>
    </>
  );
}
