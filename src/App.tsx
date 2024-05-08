import { useEffect } from "react";
import { useKonva } from "./konvaHooks.ts";
import { addImage } from "./utils.ts";

function App() {
  const { layer } = useKonva()
  useEffect(() => {
    if (layer.current) {
      addImage(layer.current).then(image => {
        image.on('dragmove', dragHandler)
      })
    }
  }, [layer])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function dragHandler({ target }: { target: any }) {
    console.log("handler", target)
  }
  return (
    <div className="w-[500px] h-[300px] bg-black" id="target">
      
    </div>
  )
}

export default App
