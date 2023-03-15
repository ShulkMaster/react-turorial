import { useEffect, useState } from 'react';

interface PostData {
  title: string;
  body: string;
}

export function UserList(): JSX.Element {
  const [data, setData] = useState<PostData | null>(null);

  useEffect(() => {
    // This function will run after the component has mounted
    // (i.e., after the first render)

    // Use the fetch() method to make a GET request to an API
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then((data: PostData) => setData(data));
  }, []); // Add an empty dependency array to only run the effect once

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}