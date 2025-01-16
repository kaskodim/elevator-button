export function createFloors (floorsCount: number){
    const floors = []
    for (let i = 1; i <= floorsCount; i++) {
        floors.push({
            id: i,
            floor: i,
        })
    }
    return floors
}