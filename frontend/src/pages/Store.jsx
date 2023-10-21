import Card from "../components/Card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { fetchRequest } from "../utils";

const Store = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchRequest("items"),
  });
  return (
    <div className="flex w-full flex-wrap">
      {data?.map((item) => (
        <Card item={item} key={item?.id} />
      ))}
    </div>
  );
};

export default Store;
