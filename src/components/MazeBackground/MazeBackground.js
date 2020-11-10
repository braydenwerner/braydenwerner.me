import React, { useEffect } from 'react'
import { Maze } from '../../algorithm/maze'
import './MazeBackground.scss'

export default function MazeBackground() {
    const maze = new Maze()
    const canvasRef = React.createRef(null)
    const canvasWidth = window.innerWidth
    const canvasHeight = window.innerHeight

    useEffect(() => {
        setInterval(renderMazeBackground, 1000 / 60)
    }, [])

    function handleMouseMove(e) {
        console.log(maze)
    }

    //  render part of maze that is x distance away from cursor. Do not clear canvas so user can reveal entire maze.
    function renderMazeBackground() {
        const canvas = canvasRef.current

        if (canvas) {
            const ctx = canvas.getContext('2d')
            console.log(canvas.width)
            console.log(canvas.height)
            ctx.fillStyle = 'BLACK'
            ctx.fillRect(100, 100, 100, 100)
        }
    }

    return (
        <div>
            <canvas className='maze-canvas' onMouseMove={handleMouseMove} ref={canvasRef} width={canvasWidth} height={canvasHeight} ></canvas>
        </div>
    )
}
