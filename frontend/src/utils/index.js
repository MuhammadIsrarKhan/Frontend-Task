import axios from "axios";

const config = {
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-origin": "*",
  },
};

export const fetchRequest = async (endpoint) => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/${endpoint}`,
    config
  );
  return data;
};

export const createRequest = async (endpoint, newData) => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/${endpoint}`,
    JSON.stringify(newData),
    config
  );
  return data;
};

export function getImageSrc(imgUrl) {
  const baseUrl = import.meta.env.VITE_BASE_URL || "";
  if (imgUrl?.startsWith(".")) {
    return baseUrl + imgUrl.slice(1);
  } else {
    return imgUrl;
  }
}
