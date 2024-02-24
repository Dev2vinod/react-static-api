// import "./post.css";
import "./App.css";

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

const App = () => (
  <div>
    <Card
      name="India News"
      heading="Cops and farmer fight"
      text="lets see how to deal this problem"
    />
  </div>
);

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// // }

// export default App;
