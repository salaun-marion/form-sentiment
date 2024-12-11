import { useEffect, useState } from 'react';

export const useFetch = (options: any) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(options.url)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [data, options.url]);

  return { data };
};
