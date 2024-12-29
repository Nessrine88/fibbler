import { useEffect, useState } from "react";
import axios from "axios";

interface Image {
  url: string;
}

interface ElementData {
  title: string;
  description: string;
  button: string;
  jobTitle: string;
  image: Image[];
}

const usePost = (url: string, body: Record<string, any>) => {
  const [data, setData] = useState<ElementData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";

  useEffect(() => {
    const postData = async (): Promise<void> => {
      setLoading(true);

      try {
        if (!baseUrl) {
          setError("Base URL is not defined.");
          return;
        }

        const response = await axios.post(baseUrl + url, body);
        if (response.status >= 200 && response.status < 300) {
          setData(response.data);
        } else {
          setError(`HTTP error! status: ${response.status}`);
        }
      } catch (err: unknown) {
        console.error("Error posting data:", err);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    postData();

    return () => {
      setData(null);
      setError(null);
      setLoading(false);
    };
  }, [url, body, baseUrl]);

  return { data, error, loading, baseUrl };
};

export default usePost;
