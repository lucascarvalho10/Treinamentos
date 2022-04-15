import { useState } from "react";
import { Tweet } from "./components/Tweet";
import { AppRoutes } from "./Routes";

function App() {
  const [tweet, setTweet] = useState<string[]>(["Tweet1", "Tweet2", "Tweet3"]);
  function createTweet() {
    setTweet([...tweet, "Tweet5"]);
  }
  return (
    <>
      {tweet.map((tweet) => {
        return <Tweet text={tweet} />;
      })}

      <button
        onClick={createTweet}
        style={{
          backgroundColor: "#8257e6",
          border: 0,
          padding: "6px 12px",
          color: "#fff",
        }}
      >
        Adicionar
      </button>
      <AppRoutes />
    </>
  );
}

export default App;
