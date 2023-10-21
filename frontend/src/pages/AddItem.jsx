import { toast } from "sonner";
import CreateItem from "../components/CreateITem";

const AddItem = () => {
  return (
    <div className="mt-5 ml-3">
      <h4 className="my-2">
        Add new Product
      </h4>
      <CreateItem />
    </div>
  );
};

export default AddItem;
