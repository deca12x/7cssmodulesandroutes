import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Learning Nextjs</title>
        <meta name="description" content="I'm just trying things out" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.background}>
        <div>
          <p>This is my home page in the index file</p>
          <p>
            It gets the global styles automatically plus it imports the Home
            module styles (the green background).
          </p>
          <p>I also started dabbling with routes. Go to localhost:3000/cars</p>
        </div>
      </main>
    </>
  );
}
