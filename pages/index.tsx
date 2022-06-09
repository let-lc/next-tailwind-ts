import { useEffect, useState } from 'react';
import Head from 'next/head';

type size = Record<'width' | 'height', string>;

export default function Home() {
  const [cricle, setCricle] = useState<Record<string, size>>({
    a: { width: '0', height: '0' },
    b: { width: '0', height: '0' },
    c: { width: '0', height: '0' },
  });

  const randomSize = (): size => {
    const size = Math.round((Math.random() * 6 + Number.EPSILON) * 100) / 100 + 'rem';
    return { width: size, height: size };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCricle({ a: randomSize(), b: randomSize(), c: randomSize() });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen min-w-full flex-col bg-gray-50">
      <Head>
        <title>Next.js/TailwindCSS/TypeScript</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="animate-bounce">
          <div className="flex animate-spin gap-x-2">
            <div className="flex h-24 w-24 items-center justify-center rounded-full">
              <div
                className="animate-bounce rounded-full bg-[#06B6D4] transition-all duration-150"
                style={{ width: cricle.a.width, height: cricle.a.width }}
              />
            </div>
            <div className="flex h-24 w-24 items-center justify-center rounded-full">
              <div
                className="animate-bounce rounded-full bg-black transition-all duration-150"
                style={{ width: cricle.b.width, height: cricle.b.width }}
              />
            </div>
            <div className="flex h-24 w-24 items-center justify-center rounded-full">
              <div
                className="animate-bounce rounded-full bg-[#3178C6] transition-all duration-150"
                style={{ width: cricle.c.width, height: cricle.c.width }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
