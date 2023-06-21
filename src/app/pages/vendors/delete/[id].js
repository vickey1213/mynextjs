import { useRouter } from "next/router";

export default function DeleteVendor() {
  const router = useRouter();
  const { id } = router.query;

  const handleDelete = async () => {
    // Call an API endpoint to delete the vendor from MongoDB
    const response = await fetch(`/api/vendors/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      router.push("/vendors");
    } else {
      console.error("Failed to delete vendor");
    }
  };

  return (
    <div>
      <h1>Delete Vendor</h1>
      <p>Are you sure you want to delete this vendor?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
