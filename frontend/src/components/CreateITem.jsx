import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { createRequest } from "../utils";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { addProductSchema } from "../utils/inputValidation";
import ErrorMsg from "./ErrorMsg";
import { useCreateProduct } from "../controllers/productController";

const CreateItem = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [newProductData, setNewProductData] = useState({
    name: "",
    price: "",
    img: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    nameError: "",
    priceError: "",
    imgError: "",
  });

  const setInputValue = ({ property, value }) => {
    setNewProductData((prevData) => ({
      ...prevData,
      [property]: value,
    }));
    validateInput(property, value);
  };

  const validateInput = (property, value) => {
    addProductSchema
      .validateAt(property, { [property]: value })
      .then(() => {
        setErrorMessage((prevData) => ({
          ...prevData,
          [`${property}Error`]: "",
        }));
      })
      .catch((validationError) => {
        setErrorMessage((prevData) => ({
          ...prevData,
          [`${property}Error`]: validationError.message,
        }));
      });
  };

  const { mutate, isSuccess, isError } = useCreateProduct();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Product created successfully!");
      queryClient.invalidateQueries();
      setTimeout(() => {
        navigate("/store");
      }, 1000);
    }

    if (isError) {
      toast.error("An error occurred while adding a product");
    }
  }, [isSuccess, isError, navigate, queryClient]);

  const submitHandler = (e) => {
    e.preventDefault();
    const validationPromises = Object.keys(newProductData).map((inputName) =>
      addProductSchema.validateAt(inputName, newProductData)
    );

    Promise.all(validationPromises)
      .then(() => {
        mutate(newProductData);
      })
      .catch(() => {
        toast.error("Please fill the form with valid inputs");
      });
  };

  return (
    <form onSubmit={submitHandler} className="bg-[#F1F3F2] py-5 px-5 max-w-lg">
      {["name", "price", "img"].map((field) => (
        <div className="mb-6" key={field}>
          <label
            htmlFor={field}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input
            type={field === "price" ? "number" : "text"}
            id={field}
            placeholder={field === "price" ? "$99.00" : `Product ${field}`}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e) =>
              setInputValue({ property: field, value: e.target.value })
            }
          />
          {errorMessage[`${field}Error`] && (
            <ErrorMsg message={errorMessage[`${field}Error`]} />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="text-white mt-8 bg-[#B3D7C9] hover:bg-[#8ee8c6] focus:ring-4 focus:outline-none focus:ring-[#8ee8c6] font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center"
      >
        Create
      </button>
    </form>
  );
};

export default CreateItem;
