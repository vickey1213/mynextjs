import { connectToDatabase } from "../../utils/db";

export default async function handler(req, res) {
  try {
    const client = await connectToDatabase();
    const database = client.db("<your-database-name>");
    const collection = database.collection("<your-collection-name>");

    // Perform database operations using the collection

    // Example: Fetch all documents from the collection
    const documents = await collection.find({}).toArray();

    res.status(200).json(documents);
  } catch (error) {
    console.error("Failed to handle request:", error);
    res.status(500).json({ error: "Failed to handle request" });
  } finally {
    await client.close();
  }
}
