import { useState, useEffect } from "react";

export const useFetch = (url: string) => {
  const [res, setRes] = useState<object | undefined>();
  const [err, setErr] = useState<object | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const executeAsyncEffect = async () => {
      const response = await fetch(url);

      setIsLoading(false);

      if (!response.ok) {
        const { status, statusText } = response;
        setErr({ status, statusText });
      } else {
        const resJson = await response.json();
        setRes(resJson);
      }
    };

    executeAsyncEffect();
  }, []);

  return { res, err, isLoading };
};
