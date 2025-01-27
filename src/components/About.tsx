import { useState, useEffect } from "react"; 

interface Post {
  id: number;
  title: string;
  body: string;
}

function About() {
  
  // State for storing data
  const [data, setData] = useState<Post[]>([]);

  // Function for fetching data
  useEffect(() => {
    const address = 'https://jsonplaceholder.typicode.com/posts'
    fetch(address)
      .then(response => response.json())
      .then((data: Post[]) => setData(data));
  }, []);

  // Component
  return (
    <div>
      {
        data.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          );
        })
      }
      <p>This is About</p>
    </div>
  );
};

export default About;