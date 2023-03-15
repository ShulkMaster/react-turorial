import { useEffect, useState } from 'react';

interface PostData {
  title: string;
  body: string;
}

export type UserListProps = {
  id: number;
}

export function UserList(props: UserListProps): JSX.Element {
  const id = props.id;
  const [data, setData] = useState<PostData | null>(null);

  useEffect(() => {
    // This function will run after the component has mounted
    // (i.e., after the first render)

    // Use the fetch() method to make a GET request to an API
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(response => response.json())
      .then((data: PostData) => setData(data));
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>{props.id}</p>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}