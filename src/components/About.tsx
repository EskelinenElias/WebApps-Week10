import { useState, useEffect } from "react"; 

function About() {
  
  // State for storing data
  const [data, setData] = useState([]);

  // Function for fetching data
  useEffect(() => {
    const address = 'https://jsonplaceholder.typicode.com/posts'
    fetch(address)
      .then(response => response.json())
      .then(data => setData(data));
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