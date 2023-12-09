import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  //Não consegui estilizar o botão, então coloquei <p>
  return (
    <>
      <div className="container">
        <h1>404</h1>
        <div className="card">
          <p>Page Not Found</p>
          <div>
            <img src="notFound/src/img/Icon1.svg" alt="" />
          </div>
          <div className="button">
            <p>Voltar</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
