import { Maze } from '../algorithm/maze'

const NUM_TILES_WIDTH = 50
const NUM_TILES_HEIGHT = 30

const maze = new Maze()

const socialLinks = [
    {
        name: 'GitHub',
        url: 'https://github.com/braydenwerner'
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/brayden-werner-6908a0141/'
    },
    {
        name: 'Instagram',
        url: ''
    },
    {
        name: 'Email',
        url: 'mailto:braydenwerner0@gmail.com'
    }
]

const ANIMATION_DELAY = 3500

const colors = {
    themeBlueForeground: '#292D3E',
    themeBlueBackground: '#1B1E2B',
    themeGreen: '#C3E88D',
    themeRed: '#CE392B',
    themePurple: '#C777A7',
    themeYellow: 'FFCB6B',
    themeGray: 'A6ACB2'
}

export { NUM_TILES_WIDTH, NUM_TILES_HEIGHT, socialLinks, maze, ANIMATION_DELAY, colors }
