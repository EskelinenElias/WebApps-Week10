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
  const [numVisibleItems, setNumVisibleItems] = useState(12);

  // Function for fetching data
  useEffect(() => {
    const address = 'https://jsonplaceholder.typicode.com/posts'
    fetch(address)
      .then(response => response.json())
      .then((data: Post[]) => setData(data));
  }, []);
  
  // Function to show more items
  function showMore() {
    setNumVisibleItems((previousNumVisibleItems) => previousNumVisibleItems + 12);
  }

  // Component
  return (
    <div>
      <div className="grid-container">
        {
          data.slice(0, numVisibleItems).map((item) => {
            return (
              <div className="grid-item" key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            );
          })
        }
      </div>
      {numVisibleItems < data.length && (
        <button onClick={showMore} className="show-more-button">Show More</button>
      )}
      <p>This is About</p>
    </div>
  );
};

export default About;