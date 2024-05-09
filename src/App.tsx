import { useEffect } from "react";
import { useKonva } from "./konvaHooks.ts";
import { addImage, calcEdge } from "./utils.ts";

function App() {
  const { layer, horizontal, vertical } = useKonva()
  useEffect(() => {
    if (layer.current) {
      addImage(layer.current).then(image => {
        image.on('dragmove', dragHandler)
      })
    }
  }, [dragHandler, layer])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function dragHandler({ target }: { target: any }) {
    if (!horizontal.current || !vertical.current) return
    calcEdge(
      {
        width: 500,
        height: 300
      },
      {
        x: target.x(),
        y: target.y(),
        width: target.width(),
        height: target.height()
      },
      horizontal.current,
      vertical.current
    )
  }
  return (
    <div className="w-[500px] h-[300px] bg-green" id="target">
      
    </div>
  )
}

export default App
