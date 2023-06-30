export default function two_crystal_balls(breaks: boolean[]): number {

    const jumpSize = Math.floor(Math.sqrt(breaks.length))

    let doesBreak = false
    let floor = 0

    while(!doesBreak) {
        floor += jumpSize
        doesBreak = breaks[floor]
    }

    let breakingFloor = -1
    for (let i = floor-jumpSize; i<=floor; i++){
        if(breaks[i]) {
            breakingFloor = i
            break
        }
    }

    return breakingFloor
}
