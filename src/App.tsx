import { MyButton } from "./MyButton";

function App() {
  const handleClick = () => {
    console.log("Clicked");
  }
  return (
    <>
      <MyButton label="Clique sur moi" onClick={handleClick} />
    </>
  )
}

export default App