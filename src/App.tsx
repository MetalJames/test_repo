import { MobileEditor, MobilePreview } from "./components";

function App() {

  // const ProblemComponent = () => {
  //   throw new Error("Test error from ProblemComponent!");
  // };


  return (
    <div className="flex h-screen">
      <MobileEditor />
      <MobilePreview />
      {/* <ProblemComponent /> */}
    </div>
  );
}

export default App
