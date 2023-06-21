const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

// Example usage inside an API route
export default async function handler(req, res) {
  try {
    await client.connect();
    const database = client.db("<your-database-name>");
    const collection = database.collection("<your-collection-name>");

    // Perform database operations using the collection

    // Example: Fetch all documents from the collection
    const documents = await collection.find({}).toArray();

    res.status(200).json(documents);
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    res.status(500).json({ error: "Failed to connect to MongoDB" });
  } finally {
    await client.close();
  }
}
