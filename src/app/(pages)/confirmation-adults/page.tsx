import { TicketCheck } from "lucide-react";
import Image from "next/image";

export default function ConfirmationAdults() {
  return (
    <div className="relative w-screen h-screen">
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
                  Para finalizar a inscrição, é necessário realizar o pagamento
                  de <b>R$ 30,00</b>
                </h3>
                <div className="mt-2">
                  <p className="text-base text-gray-500">
                    Copie o <b>PIX copie e cola</b> abaixo e cole no aplicativo
                    do seu banco. Após finalizar o pagamento, envie o
                    comprovante para o número <b>81 9700-0458</b>.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6 bg-gray-100 p-4 rounded-lg break-all w-full">
              <div className="flex justify-center">
                <div className="flex flex-col items-center justify-center shrink w-full">
                  <h3 className="text-lg font-semibold text-black">
                    Pix copia e cola
                  </h3>
                  <div className="mt-2 text-center w-full">
                    <p className="text-sm text-gray-500 break-all">
                      00020126580014br.gov.bcb.pix0136382f5525-bc1d-4588-94d3-2765cccd2c3c520400005303986540530.005802BR5924Marcone
                      Verissimo da
                      Sil6006Brasil62290525202406081508QA9AC1F5SJQ0C63047E1B
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
