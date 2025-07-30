import { GET } from "@/lib/http-methods";
import { ProductInResponseType } from "../../types/products";

interface Params {
  id: string | number;
}

export async function retrieveProductFromServerSide({
  id,
}: Params): Promise<ProductInResponseType | null> {
  try {
    console.log("🚗 Fetching product with ID:", id);
    console.log("🔗 API URL:", `http://localhost:3000/cars/${id}`);
    
    const res = await GET(`/cars/${id}`, {});
    console.log("✅ Product fetch successful:", res.data);
    return res.data as ProductInResponseType;
  } catch (error) {
    console.error("❌ Error fetching product:", error);
    console.error("📍 Failed for ID:", id);
    if (error instanceof Error) {
      console.error("📝 Error message:", error.message);
    }
    return null;
  }
}
