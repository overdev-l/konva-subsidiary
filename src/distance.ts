/**
 * 计算触达顶部边界
 * @param target 
 * @param source 
 * @returns 
 */
export const distance = (edge: number, target: number) => {
    return Math.abs(edge - target) < 10
}

/**
 * 计算触达底部边界
 * @param target 
 * @param source 
 * @returns 
 */
// export const bottomDistance = (edge: number, target: number) => {
//     return true
// }

/**
 * 计算触达左边界
 * @param target 
 * @param source 
 * @returns 
 */
// export const leftDistance = (edge: number, target: number) => {
//     return true
// }

/**
 * 计算触达右边界
 * @param target 
 * @param source 
 * @returns 
 */
// export const rightDistance = (edge: number, target: number) => {
//     return true
// }