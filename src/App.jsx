import "./App.css";
import useCatImage from "./hooks/useCatImage";
import useCatFact from "./hooks/useCatFact";

export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  async function clickHandler() {
    refreshFact();
  }

  return (
    <main>
      <button onClick={clickHandler}>Click</button>
      <button>Theme</button>
      <h1>{fact}</h1>
      <img
        src={imageUrl}
        alt={`Image extracted using the first two words of ${fact}`}
      ></img>
    </main>
  );
}

///cat/1CF7xZmlX0t8QpgP/says/hello
//https://cataas.com/cat/cute/says/hello
