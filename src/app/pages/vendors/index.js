import { useEffect, useState } from "react";
import Link from "next/link";

export default function VendorList() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetch("/api/vendors")
      .then((response) => response.json())
      .then((data) => setVendors(data))
      .catch((error) => console.error("Failed to fetch vendors:", error));
  }, []);

  return (
    <div>
      <h1>Vendor List</h1>
      <ul>
        {vendors.map((vendor) => (
          <li key={vendor._id}>
            {vendor.name}, {vendor.bankAccountNo}, {vendor.bankName}{" "}
            <Link href={`/vendors/edit/${vendor._id}`}>Edit</Link> |{" "}
            <Link href={`/vendors/delete/${vendor._id}`}>Delete</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
