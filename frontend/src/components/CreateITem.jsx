import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { createRequest } from "../utils";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { addProductSchema } from "../utils/inputValidation";
import ErrorMsg from "./ErrorMsg";

const CreateItem = () => {
  const navigate = useNavigate();
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

  function setInputValue({ property, value }) {
    setNewProductData((prevData) => ({
      ...prevData,
      [property]: value,
    }));
    // newProductData[property] = value;
    addProductSchema
      .validateAt(property, newProductData)
      .then(() => {
        setErrorMessage((prevData) => ({
          ...prevData,
          [property + "Error"]: "",
        }));
      })
      .catch((validationError) => {
        setErrorMessage((prevData) => ({
          ...prevData,
          [property + "Error"]: validationError.message,
        }));
      });
  }

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: () => createRequest("items", newProductData),
    onSuccess: () => {
      toast.success("Product created successfully!");
      queryClient.invalidateQueries(),
        setTimeout(() => {
          navigate("/store");
        }, 1000);
    },
    onError: () => {
      toast.error("An error occured while adding a product");
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const validationPromises = [];
    for (const inputName in newProductData) {
      if (Object.hasOwnProperty.call(newProductData, inputName)) {
        const validationPromise = addProductSchema
          .validateAt(inputName, newProductData)
        validationPromises.push(validationPromise);
      }
    }
    Promise.all(validationPromises)
    .then(() => {
      mutate()
    })
    .catch((validationError) => {
      toast.error('Please fill the form with valid inputs');
    });
  };
  return (
    <form onSubmit={submitHandler} className="bg-[#F1F3F2] py-5 px-5 max-w-lg">
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Product name"
          onChange={(e) =>
            setInputValue({ property: "name", value: e.target.value })
          }
        />
        {errorMessage?.nameError && (
          <ErrorMsg message={errorMessage?.nameError} />
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="price"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Price
        </label>
        <input
          type="number"
          id="price"
          placeholder="$99.00"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) =>
            setInputValue({ property: "price", value: e.target.value })
          }
        />
        {errorMessage?.priceError && (
          <ErrorMsg message={errorMessage?.priceError} />
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="image"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Image
        </label>
        <input
          type="url"
          id="image"
          placeholder=" image url"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          // required
          onChange={(e) =>
            setInputValue({ property: "img", value: e.target.value })
          }
        />
        {errorMessage?.imgError && (
          <ErrorMsg message={errorMessage?.imgError} />
        )}
      </div>

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
