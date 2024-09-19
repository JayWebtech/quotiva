import client from "@/lib/appwrite_client";
import { Databases, ID } from "appwrite";
import { NextResponse } from "next/server";

const database = new Databases(client);

async function CreateQuote({ data }) {
  try {
    const response = await database.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
      "66dd7adc00033abbb7e2",
      ID.unique(),
      data
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function FetchQuote() {
  try {
    const response = await database.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
      "66dd7adc00033abbb7e2",
      [Query.orderDesc("$createdAt")]
    );
    return response.documents;
  } catch (error) {
    console.error(error);
  }
}

export async function POST(req) {
  try {
    const { user_name, theme } = await req.json();
    const data = { user_name, theme };
    const response = await CreateQuote(data);
    return NextResponse.json({ message: "Quote added successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add" }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const quotes = await FetchQuote();
    return NextResponse.json(quotes);
  } catch (error) {
    return NextResponse.json({ error: "Failed to get" }, { status: 500 });
  }
}
