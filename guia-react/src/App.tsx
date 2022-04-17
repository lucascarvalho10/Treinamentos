import { useState } from "react";
import { Tweet } from "./components/Tweet";
import { AppRoutes } from "./Routes";
import { Header } from "./components/Header";
import { GlobalStyles } from "./Styles/GlobalStyles";
import { MainBody } from "./components/MainBody";

function App() {
  const [tweet, setTweet] = useState<string[]>(["Tweet1", "Tweet2", "Tweet3"]);
  function createTweet() {
    setTweet([...tweet, "Tweet5"]);
  }
  return (
    <>
      <Header
        content="Bom dia"
        image="https://images.vexels.com/media/users/3/142890/isolated/preview/4ea2d7c4bf3cad23a4f18ee58752deb8-logotipo-de-aneis-de-alta-tecnologia.png"
      />
      <MainBody></MainBody>
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
      <GlobalStyles />
    </>
  );
}

export default App;
