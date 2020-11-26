import longChessMP4 from '../mp4/long-chess.mp4'
import pgioMP4 from '../mp4/pgio.mp4'
import mazeGenerationVidMP4 from '../mp4/maze-generation-vid.mp4'

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
        description: `A multiplayer online chess website featuring three different chess related game modes.
                      Create a room and play with a friend!`,
        url: 'https://github.com/braydenwerner/Long-Chess',
        vid: longChessMP4,
        tags: ['Websockets', 'Node.js', 'Express.js']
    },
    {
        name: 'Periodic Galaxy',
        description: `A space themed IO game. Pilot unique spaceships in an fast-paced, real time battlefield.
        Login with your google account to save your progress.`,
        url: 'https://github.com/braydenwerner/Periodic-Galaxy',
        vid: pgioMP4,
        tags: ['Websockets', 'SQL', 'Node.js', 'Express.js', 'Google Login API']
    },
    {
        name: 'Maze Generator',
        description: `A customizable tool to visualize how a simple maze generation algorithm behaves.
        `,
        url: 'https://github.com/braydenwerner/Maze-Generation-Visualization',
        vid: mazeGenerationVidMP4,
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
