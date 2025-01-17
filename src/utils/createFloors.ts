export function createFloors (floorsCount: number){
    const floors = []
    for (let i = floorsCount; i >= 1; i--) {
        floors.push({
            id: i,
            floor: i,
        })
    }
    return floors
}