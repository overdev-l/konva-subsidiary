import Konva from "konva";

export function addImage(layer: Konva.Layer): Promise<Konva.Image> {
    return new Promise((res) => {
        const img = new window.Image()
        img.onload = () => {
            const image = new Konva.Image({
                width: 106,
                height: 118,
                x: 100,
                y: 100,
                image: img,
                draggable: true
            })
            layer.add(image)
            image.moveToBottom()
            res(image)
        }
        img.src = 'https://konvajs.org/assets/yoda.jpg'
    })
}


