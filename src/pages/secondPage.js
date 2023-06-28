import styles from "@/styles/SecondPage.module.css";

export default function SecondPage() {
  return (
    <>
      <p className={styles.secondPage}>
        I created a second page just by creating a new file in the pages folder
      </p>
      <p>I also created another css module for this page (red text)</p>
      <p>
        This is just a standalone page. I also created an index page for parks:
        parks directory containing index.js
      </p>
      <p>
        ...and a dynamic route [params].js to create show pages for each park.
        The brackets make the route dynamic.
      </p>
    </>
  );
}
