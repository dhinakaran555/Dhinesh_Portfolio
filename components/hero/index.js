import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-white flex flex-col items-center justify-center py-8 text-center bg-[#2b3984]">
      <h1 className="text-5xl font-bold">Hi, I'm a Front-End Developer</h1>
      <p className="mt-4 text-lg ">
        I build modern, responsive web applications with React & Next.js.
      </p>
      <a
        href="/projects"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:border border-[#eab308]"
      >
        View My Work
      </a>
    </section>
  );
}
