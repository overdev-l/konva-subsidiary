import Konva from "konva";
import { 
    distance,
    // bottomDistance,
    // leftDistance,
    // rightDistance
 } from "./distance";
import { HORIZONTAL_BOTTOM_DISTANCE, HORIZONTAL_MIDDLE_DISTANCE, HORIZONTAL_TOP_DISTANCE, VERTICAL_LEFT_DISTANCE, VERTICAL_MIDDLE_DISTANCE, VERTICAL_RIGHT_DISTANCE } from "./enums";

export function addImage(layer: Konva.Layer): Promise<Konva.Image> {
    return new Promise((res) => {
        const group = new Konva.Group({
            draggable: true
        })
        const rect = new Konva.Rect({
            x: 10,
            y: 10,
            width: 100,
            height: 100,
            fill: 'red',
        })
        layer.add(rect)
        layer.add(group)
        const img = new window.Image()
        img.onload = () => {
            const image = new Konva.Image({
                width: 106,
                height: 118,
                image: img,
                draggable: false
            })
            group.add(image)
            image.moveToBottom()
            group.clipWidth(106)
            group.clipHeight(118)
            const line = new Konva.Line({
                points: [10, 50, 200, 50],
                stroke: 'red',
                strokeWidth: 10,
                lineCap: 'round',
                globalCompositeOperation: 'destination-out',
            })
            group.add(line)
            group.cache()
            // setTimeout(() => {
            //     group.clearCache()
            //     group.scale({
            //         x: 2,
            //         y: 2
            //     })
            //     group.cache()
            // }, 2000)
            res(image)
        }
        img.src = 'https://konvajs.org/assets/yoda.jpg'
    })
}


export const calcEdge = (
    container:{
        width: number,
        height: number
    },
    target:{
        x: number,
        y: number,
        width: number,
        height: number
    },
    horizontalLine: Konva.Line,
    verticalLine: Konva.Line
) => {
    /**辅助线出现的位置边界 */
    const leftEdge = 0
    const topEdge = 0
    const rightEdge = container.width
    const bottomEdge = container.height
    const horizontalMiddleEdge = container.width / 2
    const verticalMiddleEdge = container.height / 2

    /**目标元素的边界 */
    const targetLeft = target.x
    const targetRight = target.x + target.width
    const targetTop = target.y
    const targetBottom = target.y + target.height
    const targetMiddleX = target.x + target.width / 2
    const targetMiddleY = target.y + target.height / 2

    if (
        distance(topEdge, targetTop) ||
        distance(bottomEdge, targetBottom) ||
        distance(verticalMiddleEdge, targetBottom) ||
        distance(verticalMiddleEdge, targetTop) || 
        distance(verticalMiddleEdge, targetMiddleY)
    ) {
        if (distance(topEdge, targetTop)) {
            horizontalLine.points(HORIZONTAL_TOP_DISTANCE)
        }
        if (distance(bottomEdge, targetBottom)) {
            horizontalLine.points(HORIZONTAL_BOTTOM_DISTANCE)
        }
        if (
            distance(verticalMiddleEdge, targetBottom) ||
            distance(verticalMiddleEdge, targetTop) ||
            distance(verticalMiddleEdge, targetMiddleY)
        ) {
            horizontalLine.points(HORIZONTAL_MIDDLE_DISTANCE)
        }
        horizontalLine.visible(true)
    } else {
        horizontalLine.visible(false)
    }

    if (
        distance(leftEdge, targetLeft) ||
        distance(rightEdge, targetRight) ||
        distance(horizontalMiddleEdge, targetLeft) ||
        distance(horizontalMiddleEdge, targetRight) ||
        distance(horizontalMiddleEdge, targetMiddleX)
    ) {
        if (distance(leftEdge, targetLeft)) {
            verticalLine.points(VERTICAL_LEFT_DISTANCE)
        }
        if (distance(rightEdge, targetRight)) {
            verticalLine.points(VERTICAL_RIGHT_DISTANCE)
        }
        if (
            distance(horizontalMiddleEdge, targetLeft) ||
            distance(horizontalMiddleEdge, targetRight) ||
            distance(horizontalMiddleEdge, targetMiddleX)
        ) {
            verticalLine.points(VERTICAL_MIDDLE_DISTANCE)
        }
        verticalLine.visible(true)
    } else {
        verticalLine.visible(false)
    }

}







