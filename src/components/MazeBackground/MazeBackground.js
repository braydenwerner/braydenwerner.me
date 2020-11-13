import React, { useEffect } from 'react'
import { maze, NUM_TILES_HEIGHT, NUM_TILES_WIDTH } from '../../constants/constants'
import './MazeBackground.scss'
import PropTypes from 'prop-types'

let mazeStateIndex = 0
let mazeInterval

let mazeAnimationInterval
let mazeAnimationIndex = 0

export default function MazeBackground({ width, height }) {
    const canvasRef = React.createRef(null)

    const tileWidth = (width + 1) / NUM_TILES_WIDTH
    const tileHeight = (height) / NUM_TILES_HEIGHT

    useEffect(() => {
        mazeInterval = setInterval(renderMazeBackground, 1)
    }, [])

    function renderMazeBackground() {
        const canvas = canvasRef.current
        const currentMaze = maze.mazeStates[mazeStateIndex]

        mazeStateIndex += 16
        if (mazeStateIndex >= maze.mazeStates.length) {
            mazeStateIndex = maze.mazeStates.length - 1

            mazeAnimationInterval = setInterval(renderFinishedMazeAnimation, 1)
            clearInterval(mazeInterval)
        }

        if (canvas && maze) {
            const ctx = canvas.getContext('2d')
            ctx.fillStyle = 'WHITE'
            ctx.fillRect(0, 0, width, height)
            for (let i = 0; i < currentMaze.length; i++) {
                if (currentMaze[i].left) {
                    ctx.beginPath()
                    ctx.moveTo(currentMaze[i].col * tileWidth, currentMaze[i].row * tileHeight)
                    ctx.lineTo(currentMaze[i].col * tileWidth, currentMaze[i].row * tileHeight, tileHeight)
                    ctx.stroke()
                }

                if (currentMaze[i].right) {
                    ctx.beginPath()
                    ctx.moveTo(currentMaze[i].col * tileWidth + tileWidth, currentMaze[i].row * tileHeight)
                    ctx.lineTo(currentMaze[i].col * tileWidth + tileWidth, currentMaze[i].row * tileHeight + tileHeight)
                    ctx.stroke()
                }

                if (currentMaze[i].top) {
                    ctx.beginPath()
                    ctx.moveTo(currentMaze[i].col * tileWidth, currentMaze[i].row * tileHeight - 1)
                    ctx.lineTo(currentMaze[i].col * tileWidth + tileWidth, currentMaze[i].row * tileHeight - 1)
                    ctx.stroke()
                }

                if (currentMaze[i].bottom) {
                    ctx.beginPath()
                    ctx.moveTo(currentMaze[i].col * tileWidth, currentMaze[i].row * tileHeight + tileHeight - 1)
                    ctx.lineTo(currentMaze[i].col * tileWidth + tileWidth, currentMaze[i].row * tileHeight + tileHeight - 1)
                    ctx.stroke()
                }
            }
        }
    }

    function renderFinishedMazeAnimation() {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        const currentMaze = maze.mazeAnimationStates[mazeAnimationIndex]
        ctx.fillStyle = 'WHITE'
        ctx.fillRect(0, 0, width, height)

        ctx.fillStyle = '#508aa8'
        for (let i = 0; i < currentMaze.length; i++) {
            if (currentMaze[i].visited) {
                ctx.fillRect(currentMaze[i].col * tileWidth, currentMaze[i].row * tileHeight, tileWidth + 1, tileHeight + 1)
            }
        }

        mazeAnimationIndex += 18
        if (mazeAnimationIndex >= maze.mazeAnimationStates.length) {
            if (mazeAnimationIndex === maze.mazeAnimationStates.length - 1) {
                clearInterval(mazeAnimationInterval)
            }

            mazeAnimationIndex = maze.mazeAnimationStates.length - 1
        }
    }

    return (
        <div>
            <canvas className='maze-canvas' ref={canvasRef} width={width} height={height} ></canvas>
        </div>
    )
}

MazeBackground.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
}
