
function generateDiagonalWaveTraversal(NUM_TILES_WIDTH, NUM_TILES_HEIGHT) {
    const queue = []
    const order = []
    queue.push({
        row: 0,
        col: 0
    })

    bfsHelper(NUM_TILES_WIDTH, NUM_TILES_HEIGHT, 0, 0, queue, order)
    return order
}

function bfsHelper(NUM_TILES_WIDTH, NUM_TILES_HEIGHT, row, col, queue, order) {
    while (queue.length > 0) {
        order.push(queue[0])
        queue.shift()

        //  add right, then down to queue
        if (col + 1 < NUM_TILES_WIDTH) {
            queue.push({
                col: col + 1,
                row: row
            })

            col++
        }

        if (row + 1 < NUM_TILES_HEIGHT) {
            queue.push({
                col: col,
                row: row + 1
            })

            row++
        }
    }
}

export { generateDiagonalWaveTraversal }
