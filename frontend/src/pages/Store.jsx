import Card from "../components/Card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { fetchRequest } from "../utils";

const Store = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchRequest("items"),
  });

  console.log("====================================");
  console.log(data, isLoading);
  console.log("====================================");
  return (
    <div className="flex w-full flex-wrap">
      {data?.map((item) => (
        <Card item={item} />
      ))}
    </div>
  );
};

export default Store;
