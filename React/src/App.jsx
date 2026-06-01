import Data from "./Data";

const App = () => {
  return (
    <div class="flex flex-row items-center">
      <Data name="John Doe" age={30} city="New York"  />
      <Data name="arun" age={11} city="UK" />
      <Data name="ajay" age={30} city="paris" />
    </div>
  )
}

export default App