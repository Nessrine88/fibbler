import { useEffect, useState } from "react";

interface Image {
  url: string;
}

interface ElementData {
  title: string;
  description: string;
  button: string;
  image: Image[];
  page1:any
}

const useFetch = (url: string) => {
  const [data, setData] = useState<ElementData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const getData = async (): Promise<void> => {
      try {
        const response = await fetch(`${baseUrl}${url}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const fetchedData = await response.json();
        console.log(fetchedData);
        
        setData(fetchedData.data);
      } catch (error) {
        console.error("Error fetching data", error);
        setError("Failed to fetch data");
      }
    };
    getData();
  }, [url, baseUrl]);

  return { data, error, baseUrl };
};

export default useFetch;
