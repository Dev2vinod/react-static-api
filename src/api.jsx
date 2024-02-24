import { useState, useEffect } from "react";
import "../src/appa.css";
import axios from "axios";

//  const [data,setData] =useState([]);

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        // handle success
        console.log("response", response.data);
        setPosts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log("error", error);
      });
  }, []);

  return (
    <div>
      {posts.map((eachPost) => (
        <div className="post">
          <p> id: {eachPost.id} </p>
          <p> name: {eachPost.name} </p>
          <h6> username: {eachPost.username} </h6>
          <p>eamil : {eachPost.email}</p>
          <p>street: {eachPost.address.street}</p>
          <p>suite: {eachPost.address.suite}</p>
          <p>city: {eachPost.address.city}</p>
          <p>zipcode {eachPost.address.zipcode}</p>
          <p>lat: {eachPost.address.geo.lat}</p>
          <p>lng: {eachPost.address.geo.lng}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
