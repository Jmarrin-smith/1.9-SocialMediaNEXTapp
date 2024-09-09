import styles from "./posts.module.css";

export default function Userspage() {
  return (
    <>
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
