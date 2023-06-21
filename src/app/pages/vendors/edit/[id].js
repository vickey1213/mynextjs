import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function EditVendor() {
  const [vendor, setVendor] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // Call an API endpoint to fetch the vendor details from MongoDB
    fetch(`/api/vendors/${id}`)
      .then((response) => response.json())
      .then((data) => setVendor(data))
      .catch((error) => console.error("Failed to fetch vendor:", error));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call an API endpoint to update the vendor details in MongoDB
    const response = await fetch(`/api/vendors/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vendor),
    });

    if (response.ok) {
      router.push("/vendors");
    } else {
      console.error("Failed to update vendor");
    }
  };

  const handleChange = (e) => {
    setVendor((prevVendor) => ({
      ...prevVendor,
      [e.target.name]: e.target.value,
    }));
  };

  if (!vendor) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Edit Vendor</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Vendor Name:
          <input
            type="text"
            name="name"
            value={vendor.name}
            onChange={handleChange}
            required
          />
        </label>
        {/* Add similar input fields for other vendor properties */}
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
