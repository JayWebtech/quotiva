import client from "@/lib/appwrite_client"
import { Databases, ID } from "appwrite"

const database = new Databases(client)

async function CreateQuote({data}) {
    try {
        const response = await database.createDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID, "66dd7adc00033abbb7e2", ID.unique(), data)
        return response;
    } catch (error) {
        console.error(error)
    }
}

async function FetchQuote() {
    try {
        const response = await database.listDocuments(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID, "66dd7adc00033abbb7e2", [Query.orderDesc("$createdAt")])
        return response.documents;
    } catch (error) {
        console.error(error)
    }
}