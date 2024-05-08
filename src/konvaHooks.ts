import Konva from "konva"
import {useEffect, useRef} from "react";

export function useKonva(
) {
    
    const app = useRef<Konva.Stage>()
    const layer = useRef<Konva.Layer>()
    const horizontal = useRef<Konva.Line>()
    const vertical = useRef<Konva.Line>()
    const handler = () => {
        const target = document.getElementById('target') as HTMLDivElement
        app.current = new Konva.Stage({
            container: target,
            width: target.getBoundingClientRect().width,
            height: target.getBoundingClientRect().height
        })
        layer.current = new Konva.Layer()
        app.current.add(layer.current)
        horizontal.current = new Konva.Line({
            points: [0,10,500,10],
            stroke: 'green',
            strokeWidth: 1,
            dash: [5, 5]
        })
        vertical.current = new Konva.Line({
            points: [10,0,10,500],
            stroke: 'green',
            strokeWidth: 1,
            dash: [5, 5]
            })
        layer.current.add(vertical.current, horizontal.current)
    }
    useEffect(handler, [])

    
    
    return {
        layer,
        horizontal,
        vertical
    }
}
