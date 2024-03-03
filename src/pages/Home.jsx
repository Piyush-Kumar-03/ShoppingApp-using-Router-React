import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductDate(){
    setLoading(true);
    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    }
    catch(error){
      console.log("Error comes..")
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchProductDate();
  },[])

  return (
    <div>
      {
        loading ? 
        (<div className="w-[100vw] h-[80vh] flex justify-center items-center text-lg">
          <Spinner/>
        </div>) : 
        posts.length > 0 ? 
        (<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            posts.map( (post) => (
              <Product key = {post.id} post={post}/>
            ))
          }
        </div>) : 
        <div className="flex justify-center items-center">
          <p>No data found</p>
        </div>
      }
    </div>
  );
};

export default Home;
