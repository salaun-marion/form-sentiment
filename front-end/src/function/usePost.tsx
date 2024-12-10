import { useEffect, useState } from 'react';

export const usePost = (options: any, username: string, text: string) => {
  //const [name, setName] = useState('');

  useEffect(() => {
    fetch(options.url, {
      method: 'POST',
      body: JSON.stringify({
        username,
        text,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json());
  }, []);
};
