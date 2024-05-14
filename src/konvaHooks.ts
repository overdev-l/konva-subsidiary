import Konva from "konva"
import {useEffect, useRef} from "react";

export function useKonva(
) {
    
    const app = useRef<Konva.Stage>()
    const layer = useRef<Konva.Layer>()
    const group = useRef<Konva.Group>()
    const handler = () => {
        const target = document.getElementById('target') as HTMLDivElement
        app.current = new Konva.Stage({
            container: target,
            width: target.getBoundingClientRect().width,
            height: target.getBoundingClientRect().height
        })
        layer.current = new Konva.Layer()
        group.current = new Konva.Group({
            draggable: true,
            x: 100,
            y: 100,
        })
        layer.current.add(group.current)
        app.current.add(layer.current)
    }
    useEffect(handler, [])

    
    
    return {
        layer,
        group,
    }
}
