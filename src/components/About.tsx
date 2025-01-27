import { useState, useEffect } from "react"; 
import '../styles/about.css';

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
      <div className="grid-container">
        {
          data.map((item) => {
            return (
              <div className="grid-item" key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            );
          })
        }
      </div>
      <p>This is About</p>
    </div>
  );
};

export default About;