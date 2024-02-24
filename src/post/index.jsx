import "./post.css";

const Card = ({ name, heading, text, img, like, bookmark }) => (
  <div>
    <div className="main">
      <div className="name">
        {name}
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>

      <div>
        <img src={img} alt="" className="img" />
      </div>

      <div className="footer">
        <span>{like}</span>

        <span>{bookmark}</span>
      </div>
    </div>
  </div>
);

const Page = () => (
  <div>
    <Card
      name="India News"
      heading="Cops and farmer fight"
      text="lets see how to deal this problem"
    />
  </div>
);

export default Page;

// // const axios = require('axios').default;
// import axios from "axios";
// import { useEffect } from "react";

// function Post() {
//   useEffect(() => {
//     axios
//       .get(" https://jsonplaceholder.typicode.com/posts")
//       .then(function (response) {
//         // handle success
//         console.log("response", response);
//       })
//       .catch(function (error) {
//         // handle error
//         console.log("error", error);
//       });
//   });
// }
