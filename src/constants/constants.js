import React from 'react'
import firstamerican from '../image/firstam.jpg'
import umich from '../image/umich.png'
import codelab from '../image/codelab.png'
import aws from '../image/aws.png'
import meta from '../image/meta.png'
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
    url: 'https://www.linkedin.com/in/brayden-werner0/'
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
    role: 'Software Engineer',
    image: meta,
    employer: 'Meta (formerly Facebook) · Internship',
    date: 'September 2022 - December 2022 · 4 mos',
    description: []
  },
  {
    role: 'Software Development Engineer',
    image: aws,
    employer: 'Amazon Web Services (AWS) · Internship',
    date: 'June 2022 - September 2022 · 4 mos',
    description: [
      'Built a self-service solution for cloning dependency graphs for AWS products, streamlining a time-consuming, on-call process',
      '• Differentiated cloning and database work across multiple AWS Lambda functions using AWS SQS for optimal speed and scale',
      '• Developed unit tests in Java to maintain 90 % code coverage across all AWS Lambda functions',
      '• Used React, JavaScript, AWS CloudFormation, AWS Lambda, AWS SQS, DynamoDB, Java, Git'
    ]
  },
  {
    role: 'Software Engineer',
    image: firstamerican,
    employer: 'First American Title · Part-time',
    date: 'June 2021 - May 2022 · 1 yr',
    description: [
      '• Refactored a web application to enable Business-to-Employee authentication',
      '• Saved a team 3 hours a week by building a UI to compile and chart data across SQL Server tables ',
      '• Implemented unit testing with xUnit and Mock frameworks',
      '• Built CI/CD pipelines with YAML',
      '• Organized work using the Agile Methodology and met sprint deadlines while working on 3 projects simultaneously ',
      '• Worked with React, Angular, JavaScript, C# .NET, SQL Server, Microsoft Azure, Git'
    ]
  },
  {
    role: 'Software Engineer',
    image: umich,
    employer: 'University of Michigan · Internship',
    date: 'December 2020 - May 2020 · 6 mos',
    description: [
      '• Developed scalable solutions for maintaining and expanding a large-scale database',
      '• Deployed code used by thousands of users',
      '• Wrote a complex script to update over 1,000 user documents after refactoring the database',
      '• Worked with a variety of different technologies including React, Firebase, Recoil, Node.js, JavaScript, Git'
    ]
  },
  {
    role: 'Software Engineer',
    image: codelab,
    employer: 'CodeLab · Part-time',
    date: 'October 2021 - December 2022 · 2 mos',
    description: [
      '• Worked in a small team to develop a self-service fitting room web application for a client',
      '• Used Angular, TypeScript, Firebase, Jira, Git'
    ]
  }
]

const projectLinks = [
  {
    name: 'YouTube Thumbnail Game',
    description: (
      <div>
        A fun and addicting game with over <strong>60,000</strong> monthly
        players. The site displays leaderboard ranking and personal performance
        percentile against other players.
      </div>
    ),
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
    name: 'Atlas Chrome Extension',
    description:
      'A comprehensive tool for drawing, taking notes, and staying organized all on your chrome homepage.',
    githubURL: 'https://github.com/braydenwerner/Atlas',
    websiteURL:
      'https://chrome.google.com/webstore/detail/atlas/hdipbljnjaoiknbnmhhdiepmjioafgmp?hl=en&authuser=0',
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
    name: 'EZ Notes',
    description: (
      <div>
        A drawing and note-taking application with over <strong>82,000</strong>{' '}
        downloads, <strong>57,000</strong> active users, and a{' '}
        <strong>5-star</strong> rating on the steam marketplace. It is intended
        to be used as a desktop background for Wallpaper Engine.
      </div>
    ),
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
