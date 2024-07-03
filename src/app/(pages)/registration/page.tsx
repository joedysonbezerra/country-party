"use client";
import InputMask from "react-input-mask";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { delay } from "@/app/utils/delay";

export default function Registration() {
  const router = useRouter();
  const [isExploding, setIsExploding] = useState(false);
  const [formData, setFormData] = useState<{
    [key: string]: string;
  }>({
    firstName: "",
    lastName: "",
    phone: "",
    age: "",
  } as { [key: string]: string });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const requiredFields = ["firstName", "lastName", "phone", "age"];
    const fieldNamesInPortuguese: { [key: string]: string } = {
      firstName: "Nome",
      lastName: "Sobrenome",
      phone: "Telefone",
      age: "Idade",
    };
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      const missingFieldsInPortuguese = missingFields.map(
        (field) => fieldNamesInPortuguese[field]
      );

      alert(
        `Por favor, preencha todos os campos obrigatórios: ${missingFieldsInPortuguese.join(
          ", "
        )}`
      );
      return;
    }

    try {
      const response = await fetch("/api/notion/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      await response.json();
      setIsExploding(true);
      await delay(500);
      setIsExploding(false);

      const age = parseInt(formData.age);
      if (age >= 6 && age <= 10) {
        router.push("/confirmation-child"); // Para crianças entre 6 e 10 anos
      } else if (age > 10) {
        router.push("/confirmation-adults"); // Para maiores de 10 anos
      } else {
        router.push("/confirmation"); // Para menores de 6 anos
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      {isExploding && <Fireworks autorun={{ speed: 3 }} />}
      <div className="bg-white min-h-screen">
        <form onSubmit={handleSubmit}>
          <div className="space-y-12 px-10 bg-white">
            <div className="border-b border-gray-300 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-800">
                Preencha seus dados para garantir sua vaga!
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Vamos utilizar essas informações somente para inscrição.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-800"
                  >
                    Primeiro nome(Obrigatório)
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="firstName"
                      id="first-name"
                      autoComplete="given-name"
                      className="pl-3 block w-full rounded-md bg-white py-1.5 text-gray-800 shadow-sm border border-gray-400 focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-800"
                  >
                    Sobrenome(Obrigatório)
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="lastName"
                      id="last-name"
                      autoComplete="family-name"
                      className="pl-3 block w-full rounded-md bg-white py-1.5 text-gray-800 shadow-sm border border-gray-400 focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-800"
                  >
                    Telefone(Obrigatório)
                  </label>
                  <div className="mt-2">
                    <InputMask
                      mask="(99) 99999-9999"
                      type="text"
                      name="phone"
                      id="phone"
                      className="pl-3 block w-full rounded-md bg-white py-1.5 text-gray-800 shadow-sm border border-gray-400 focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium leading-6 text-gray-800"
                  >
                    Idade(Obrigatório)
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      name="age"
                      id="age"
                      className="pl-3 block w-full rounded-md bg-white py-1.5 text-gray-800 shadow-sm border border-gray-400 focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      value={formData.age}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6 px-10">
            <button
              type="submit"
              className="mb-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
            >
              Enviar sua inscrição
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
