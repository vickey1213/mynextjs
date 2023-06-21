import { useState } from "react";
import { useRouter } from "next/router";

export default function CreateVendor() {
  const [vendor, setVendor] = useState({
    name: "",
    bankAccountNo: "",
    bankName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    country: "",
    zipCode: "",
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/vendors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vendor),
    });

    if (response.ok) {
      router.push("/vendors");
    } else {
      console.error("Failed to create vendor");
    }
  };

  const handleChange = (e) => {
    setVendor((prevVendor) => ({
      ...prevVendor,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <h1>Create Vendor</h1>
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
