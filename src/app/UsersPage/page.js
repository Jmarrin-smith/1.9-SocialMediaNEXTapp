import { currentUser } from "@clerk/nextjs/server";
import db from "@/lib/serveraction";
import styles from "./UsersPage.module.css";

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
      <div className={styles.userscontainer}>
        <div className={styles.userbox}>
          <h1>users</h1>
        </div>
      </div>
    </>
  );
}
