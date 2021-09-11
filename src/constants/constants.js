import firstamerican from '../image/firstamerican.jpg'
import umich from '../image/umich.jpg'
import wernMP4 from '../mp4/wern3.mp4'
import longChessMP4 from '../mp4/long-chess.mp4'
import pgioMP4 from '../mp4/pgio.mp4'
import mazeGenerationVidMP4 from '../mp4/maze-generation-vid.mp4'
import whiteboardMP4 from '../mp4/whiteboard.mp4'
import thumbnailGameMP4 from '../mp4/thumbnail-game.mp4'
import atlasMP4 from '../mp4/Atlas.mp4'

const navLinks = [
  {
    name: 'Home'
  },
  {
    name: 'About'
  },
  {
    name: 'Experience'
  },
  {
    name: 'Projects'
  }
]

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

const workExperience = [
  {
    role: 'Software Engineering Intern',
    image: firstamerican,
    employer: 'First American Title',
    date: 'June 2021 - September 2021',
    description: [
      '• Completely refactored a web application to enable Business-to-Employee authentication for added security',
      '• Implemented unit testing with xUnit and Mock frameworks and logging with Log4Net',
      '•	Worked with C# .NET, Angular, SQL Server Management Studio, and Microsoft Azure',
      '•	Organized work using the Agile Methodology'
    ]
  },
  {
    role: 'Software Engineering Intern',
    image: umich,
    employer: 'University of Michigan',
    date: 'December 2020 - Current',
    description: [
      '• Proposed and developed scalable solutions regarding state management with a large-scale database',
      '• Collaborated with other React developers to optimize and improve web performance',
      '• Worked with a variety of different technologies including React, Firebase, Recoil, Node.js, and JavaScript'
    ]
  }
]

const projectLinks = [
  {
    name: 'Atlas Chrome Extension',
    description:
      'A comprehensive tool for drawing, taking notes, and staying organized all on your chrome homepage.',
    githubURL: 'https://github.com/braydenwerner/Atlas',
    websiteURL: 'https://github.com/braydenwerner/Atlas',
    vid: atlasMP4,
    tags: [
      'React',
      'Apollo',
      'Node.js',
      'TypeORM',
      'TypeGraphQL',
      'PostgreSQL',
      'TypeScript'
    ]
  },

  {
    name: 'YouTube Thumbnail Game',
    description:
      'A fun and addicting game with over 2,000 monthly players. The site displays leaderboard ranking and personal performance percentile against other players.',
    githubURL: 'https://github.com/Thumbnail-Game/Thumbnail-Game',
    websiteURL: 'https://www.thumbnailgame.com/',
    vid: thumbnailGameMP4,
    tags: [
      'React',
      'Next.js',
      'URQL',
      'Node.js',
      'Apollo Server',
      'TypeORM',
      'TypeGraphQL',
      'PostgreSQL',
      'TypeScript',
      'YouTube API'
    ]
  },
  {
    name: 'EZ Notes',
    description:
      'A drawing and note-taking application with over 50,000 downloads on the steam marketplace. It is intended to be used as a desktop background for Wallpaper Engine.',
    githubURL: 'https://github.com/braydenwerner/Whiteboard-Desktop-Wallpaper',
    websiteURL:
      'https://steamcommunity.com/sharedfiles/filedetails/?id=2399605361',
    vid: whiteboardMP4,
    tags: ['JavaScript', 'HTML', 'CSS']
  },
  {
    name: 'Werntype',
    description:
      'A minimalistic typing website. Type fast to be featured on the leaderboard of top players.',
    githubURL: 'https://github.com/braydenwerner/Wern-Type',
    websiteURL: 'https://werntype.web.app/',
    vid: wernMP4,
    tags: ['React', 'Recoil', 'Firebase']
  },
  {
    name: 'Long Chess',
    description: `A multiplayer online chess website featuring three different chess-related game modes.
                      Create a room and play with a friend!`,
    githubURL: 'https://github.com/braydenwerner/Long-Chess',
    websiteURL: 'https://long-chess.netlify.app/',
    vid: longChessMP4,
    tags: ['Socket.io', 'Node.js', 'Express.js']
  },
  {
    name: 'Periodic Galaxy',
    description: `A space-themed multiplayer IO game. Pilot unique spaceships in a fast-paced, real-time battlefield.
        Log in with Google to save your progress.`,
    githubURL: 'https://github.com/braydenwerner/Periodic-Galaxy',
    websiteURL: 'https://www.periodicgalaxy.com/',
    vid: pgioMP4,
    tags: ['Socket.io', 'SQL', 'Node.js', 'Express.js', 'Google Login API']
  },
  {
    name: 'Maze Generator',
    description:
      'A customizable tool to visualize how a simple maze generation algorithm behaves.',
    githubURL: 'https://github.com/braydenwerner/Maze-Generation-Visualization',
    websiteURL: 'https://maze-generation-visualizer.netlify.app/',
    vid: mazeGenerationVidMP4,
    tags: ['Algorithms', 'Data Structures', 'Visualization']
  }
]

const colors = {
  themeBlueForeground: '#292D3E',
  themeBlueBackground: '#1B1E2B',
  themeGreen: '#285943',
  themeRed: '#CE392B',
  themePurple: '#C777A7',
  themeYellow: 'FFCB6B',
  themeGray: 'A6ACB2'
}

const icons = [
  'js',
  'html5',
  'css3-alt',
  'react',
  'node-js',
  'sass',
  'java',
  'python',
  'linux',
  'aws'
]

export { navLinks, socialLinks, workExperience, projectLinks, colors, icons }
