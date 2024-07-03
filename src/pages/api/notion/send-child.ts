// pages/api/submit.js
import { Client } from "@notionhq/client";
import { CreatePageResponse } from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({
  auth: "secret_3ML9hf0HLMKHtYdpyF9RFEvHosghzJpy8H3QJsHjpkh",
});

export default async function handler(
  req: {
    method: string;
    body: { name: any; accountable: any; phone: any; age: any };
  },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: {
        (arg0: {
          message: string;
          response?: CreatePageResponse;
          error?: unknown;
        }): void;
        new (): any;
      };
    };
  }
) {
  if (req.method === "POST") {
    const { name, accountable, phone, age } = req.body;
    try {
      const response = await notion.pages.create({
        parent: { database_id: "f3cb8a3f76914d438ac791b63d2bbac5" },
        properties: {
          Nome: {
            title: [
              {
                text: {
                  content: name,
                },
              },
            ],
          },
          "Nome do Responsável": {
            rich_text: [
              {
                text: {
                  content: accountable,
                },
              },
            ],
          },
          Telefone: {
            rich_text: [{ text: { content: phone } }],
          },
          Idade: {
            rich_text: [{ text: { content: age } }],
          },
        },
      });
      res.status(200).json({ message: "Success! Entry added.", response });
    } catch (error) {
      res.status(500).json({ message: "Error adding entry to Notion", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
