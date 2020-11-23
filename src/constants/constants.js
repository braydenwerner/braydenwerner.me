import longChessGif from '../gif/long-chess.gif'

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
        name: 'Youtube',
        url: 'https://www.youtube.com/channel/UCqeUabWTGM4y1cdABffFDCA'
    },
    {
        name: 'Email',
        url: 'mailto:braydenwerner0@gmail.com'
    }
]

const projectLinks = [
    {
        name: 'Long Chess',
        url: 'https://github.com/braydenwerner/Long-Chess',
        gif: longChessGif,
        tags: ['Websockets', 'Game Logic', 'Multiplayer Online', 'Node.js', 'Express.js']
    },
    {
        name: 'Periodic Galaxy',
        url: 'https://github.com/braydenwerner/Periodic-Galaxy',
        tags: ['Websockets', 'SQL', 'Google Login API', 'Multiplayer Online', 'Node.js', 'Express.js']
    },
    {
        name: 'Maze Generation Visualizer',
        url: 'https://github.com/braydenwerner/Maze-Generation-Visualization',
        tags: ['Algorithms', 'Data Structures', 'Visualization']
    }
]

const ANIMATION_DELAY = 500

const colors = {
    themeBlueForeground: '#292D3E',
    themeBlueBackground: '#1B1E2B',
    themeGreen: '#285943',
    themeRed: '#CE392B',
    themePurple: '#C777A7',
    themeYellow: 'FFCB6B',
    themeGray: 'A6ACB2'
}

export { socialLinks, projectLinks, ANIMATION_DELAY, colors }
