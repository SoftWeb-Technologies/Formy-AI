import Head from "next/head";
import Image from "next/image";
import HomePage from "./home/home";

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>FormyAI</title>
        <meta
          name="description"
          content="FormyAI which generates shareable forms based on users input"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
}
