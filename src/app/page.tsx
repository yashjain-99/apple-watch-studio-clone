import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header>
        <Image
          src="/apple-watch-design-studio-logo.jpg"
          width={90}
          height={90}
          alt="Apple watch"
        />
      </header>
    </main>
  );
}
