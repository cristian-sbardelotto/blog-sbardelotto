import { useEffect, useState } from 'react';

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const data = await response.json();

      setData(data);
    }

    getData();
  }, []);

  return { data };
}
