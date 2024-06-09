import { TicketCheck } from "lucide-react";
import Image from "next/image";

export default function ConfirmationChild() {
  return (
    <div className="relative w-screen h-screen">
      <Image
        alt="background"
        src="/background2.0.png"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <div className="w-screen md:w-[800px]">
          <Image
            alt="header logo"
            src="/header.png"
            layout="responsive"
            width={1500}
            height={200}
            quality={100}
          />
        </div>
      </div>

      <div className="md:mt-28 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-2xl flex justify-center items-center break-words w-full">
        <div className="flex w-full md:max-w-lg min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all w-full">
            <div>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <TicketCheck
                  className="h-6 w-6 text-green-600"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-3 text-center sm:mt-5">
                <h3 className="text-2xl font-bold leading-6 text-gray-900">
                  Inscrição finalizada com sucesso!
                </h3>
                <div className="mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
