import { useEffect, useState } from "react";
import Head from "next/head";

type size = Record<"width" | "height", string>;

export default function Home() {
  const [cricle, setCricle] = useState<Record<string, size>>({
    a: { width: "0", height: "0" },
    b: { width: "0", height: "0" },
    c: { width: "0", height: "0" },
  });

  const randomSize = (): size => {
    const size =
      Math.round((Math.random() * 6 + Number.EPSILON) * 100) / 100 + "rem";
    return { width: size, height: size };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCricle({ a: randomSize(), b: randomSize(), c: randomSize() });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-w-full min-h-screen bg-gray-50">
      <Head>
        <title>Next.js/TailwindCSS/TypeScript</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <div className="animate-bounce">
          <div className="flex gap-x-2 animate-spin">
            <div className="flex items-center justify-center w-24 h-24 rounded-full">
              <div
                className="bg-[#06B6D4] transition-all duration-150 rounded-full animate-bounce"
                style={{ width: cricle.a.width, height: cricle.a.width }}
              />
            </div>
            <div className="flex items-center justify-center w-24 h-24 rounded-full">
              <div
                className="bg-black transition-all duration-150 rounded-full animate-bounce"
                style={{ width: cricle.b.width, height: cricle.b.width }}
              />
            </div>
            <div className="flex items-center justify-center w-24 h-24 rounded-full">
              <div
                className="bg-[#3178C6] transition-all duration-150 rounded-full animate-bounce"
                style={{ width: cricle.c.width, height: cricle.c.width }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
