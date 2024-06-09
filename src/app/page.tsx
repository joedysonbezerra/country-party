import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-screen h-screen bg-yellow-500">
      <Image
        alt="background"
        src="/background.png"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <div className="w-screen md:w-[800px]">
          <Image
            alt="header logo"
            src="/header2.0.png"
            layout="responsive"
            width={1500}
            height={200}
            quality={100}
          />
        </div>
      </div>

      <div className="mt-10 md:mt-48 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-2xl flex justify-center items-center">
        <Link
          href={"registration"}
          className="rounded-md text-lg md:text-xl lg:text-2xl bg-red-600 px-10 py-4 md:px-20 md:py-6 font-bold text-white shadow- hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 whitespace-nowrap"
        >
          Garanta Sua Vaga!
        </Link>
      </div>
    </div>
  );
}
