import { useMutation, useQuery } from "@tanstack/react-query";
import { createRequest, deleteRequest, fetchRequest } from "../utils";

// Fetch all products
export function useProducts() {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchRequest("items"),
  });
  return { data, isLoading, isSuccess };
}

export function useProductDetail(id) {
  const { data } = useQuery({
    queryKey: ["productDetail", id],
    queryFn: () => fetchRequest(`items/${id}`),
  });
  return { data };
}

export function useCreateProduct() {
  const { mutate, isSuccess, isError } = useMutation({
    mutationFn: (newProductData) => createRequest("items", newProductData),
  });

  return { mutate, isSuccess, isError };
}

export function useDeleteProduct() {
  const { mutate, data, isSuccess, isError } = useMutation({
    mutationFn: (id) => deleteRequest(`items/${id}`)
  });

  return { mutate, data, isSuccess, isError };
}
