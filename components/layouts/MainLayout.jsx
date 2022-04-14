import Head from "next/head";
import Nav from "../Nav";

export default function MainLayout({ children }) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Lora&family=Oxygen+Mono&family=Oxygen:wght@300&family=Righteous&display=swap" rel="stylesheet" />
      </Head>
      <Nav />
    
      {children}
    </div>
  );
}
