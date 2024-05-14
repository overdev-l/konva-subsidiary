import { useEffect } from "react";
import { useKonva } from "./konvaHooks.ts";
import { addImage } from "./utils.ts";

function App() {
  const { layer, group } = useKonva()
  useEffect(() => {
    if (layer.current) {
      addImage(group.current)
    }
  }, [group, layer])

  return (
    <div className="w-[500px] h-[300px] bg-green" id="target">
      
    </div>
  )
}

export default App
