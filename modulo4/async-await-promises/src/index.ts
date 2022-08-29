import express, { Express } from "express";
import cors from "cors";
import knex from "knex";
import dotenv from "dotenv";
import axios from "axios";
import { AddressInfo } from "net";
import { baseUrl } from "./baseUrl";
import { user } from "./data/type";

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});

const app: Express = express();
app.use(express.json());
app.use(cors());

const getSubscribers = async (): Promise<user[]> => {
  const response = await axios.get(`${baseUrl}/subscribers`);
  return response.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
};

async function createNews(
  title: string,
  content: string,
  date: number
): Promise<void> {
  await axios.put(`${baseUrl}/news`, {
    title: title,
    content: content,
    date: date,
  });
}

const sendNotifications = async (
  users: user[],
  message: string
): Promise<void> => {
  try {
    const promises = users.map((user) => {
      return axios.post(`${baseUrl}/notifications`, {
        subscriberId: user.id,
        message: message,
      });
    });

    await Promise.all(promises);
  } catch {
    console.log("Error");
  }
};

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
