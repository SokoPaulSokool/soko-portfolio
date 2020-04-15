import sep from '../assets/samples/sep.png';
import borrocracyWeb from '../assets/samples/borrocracyWeb.png';
import wesgas from '../assets/samples/wesgas.png';
import portfolio from '../assets/samples/portfolio.png';
import myDiary from '../assets/samples/myDiary.png';
import borrocracyMobile from '../assets/samples/borrocracyMobile.png';
import fastFood from '../assets/samples/fastFood.png';

export const projectDetails = {
  sep: {
    summary: {
      id: 'sep',
      projectName: 'Students Evaluation Protocal',
      url: 'https://sepfirebaseproject-cd7ec.firebaseapp.com/',
      profileImage: sep
    },
    repos:[],
    frameworks: {
      frontEnd: ['angular'],
      backEnd: ['firebase Cloud Functions', 'node'],
      others: ['Adobe Illustrator']
    },
    description:
      'This platform helps connect parents and the schools their children go to. It’s aimed at reducing the lies about performance and misconducts at school by students. It doe so through by creating a direct and simple automatic communication between parents and teachers. Parents are able to view and track their children’s performance and also receive notifications for every exams done. Schools are able to manage their record of performance, visualise performance trends, role-call , report misconduct and many other features.',
    process: [
      {
        step: '',
        details: '',
        image: sep,
        challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      }
    ]
  },
  borrocracyWeb: {
    summary: {
      id: 'borrocracyWeb',
      projectName: 'Borrocracy Web',
      url: 'https://borrocracy-b58eb.firebaseapp.com/',
      profileImage: borrocracyWeb
    },
     repos:[{name:'Angular Repo',link:'https://github.com/SokoPaulSokool/borrocracy-web'}, {name:'React Repo',link:'https://github.com/SokoPaulSokool/borrocracy-react'},{more:true}],
    frameworks: {
      frontEnd: ['angular','React'],
      backEnd: ['firebase Cloud Functions', 'node'],
      others: ['TensorFlowjs', 'AWS EBS', 'Adobe Illustrator']
    },
    description:
      'Borrocracy is a platform that helps connect lenders to borrowers. It uses AI to determine the cred score of a borrower. This credit score and user information helps lenders know the borrower they are lending their money.',
    process: [
      {
        step: 'Getting to know what the client wanted.',
        details:
          'I had to first create rapport with the client to make communication smooth and easy. The first time, I got the basic understanding of the project. The next time I prepared questions that would prompt him explain in details about the project. This was to help me think about the best system to use or if I needed to learn something new.',
        image: borrocracyWeb,
        challenge:
          'Full functionality of the platform hand not been deeply though about so it was not clear. He only had the basic idea.',
        solution:
          'Agile methodology was the best way to go. I got the first requirements and used them to design a basic structure of the system. And planned on getting more as the project grows'
      },
      {
        step: 'Design mockups and prototypes.',
        details:
          'I used adobe illustrator to design mockups for the mobile application and website because I had some experience using it and at would make me work fast. This was to guide the client on how the project would flow.',
        image: borrocracyWeb,
        challenge:
          'We kept on changing the UI the more we brain started with the client. This kind of slowed the down the progress.',
        solution:
          'I decided start implementing other features in parallel to keep the development process flowing. I also started learning machine learning and AI.'
      },
      {
        step: 'Implementing the mockups.',
        details:
          'I chose angular for the front-end and android java for the mobile app because I felt it would make me design fast since I had been using them for a while. I implemented them mobile and web UI in parallel.',
        image: borrocracyWeb,
        challenge:
          'The client still kept on changing the UI even after implementing it. I was the only developer in the company so I was overwhelmed by the constant changes.',
        solution:
          'I informed the client to first let me design a fully working platform then we will find time to adjust  the user interface.'
      },
      {
        step: 'Training models for AI',
        details:
          'After looking at different resources, I realised that the fastest way for me to implement the AI was using Tesorflowjs because it was easy to setup and learn. I organised data the AI to learn from and trained models for predicting credit score.',
        image: borrocracyWeb,
        challenge:
          'I did not know how to calculate a persons’s credit score. This delayed me while made organising the training data for training.',
        solution:
          'I designed a dynamic way of organising data and training models for prediction.'
      }
    ]
  },
  borrocracyMobile: {
    summary: {
      id: 'borrocracyMobile',
      projectName: 'Borrocracy Mobile',
      url: 'https://play.google.com/store/apps/details?id=com.borrocracy',
      profileImage: borrocracyMobile
    },
     repos:[],
    frameworks: {
      frontEnd: ['android', 'Java'],
      backEnd: ['firebase Cloud Functions', 'node'],
      others: ['TensorFlowjs', 'AWS EBS', 'Adobe Illustrator']
    },
    description:
      'Borrocracy is a platform that helps connect lenders to borrowers. It uses AI to determine the cred score of a borrower. This credit score and user information helps lenders know the borrower they are lending their money.',
    process: [
      {
        step: 'Getting to know what the client wanted.',
        details:
          'I had to first create rapport with the client to make communication smooth and easy. The first time, I got the basic understanding of the project. The next time I prepared questions that would prompt him explain in details about the project. This was to help me think about the best system to use or if I needed to learn something new.',
        image: borrocracyMobile,
        challenge:
          'Full functionality of the platform hand not been deeply though about so it was not clear. He only had the basic idea.',
        solution:
          'Agile methodology was the best way to go. I got the first requirements and used them to design a basic structure of the system. And planned on getting more as the project grows'
      },
      {
        step: 'Design mockups and prototypes.',
        details:
          'I used adobe illustrator to design mockups for the mobile application and website because I had some experience using it and at would make me work fast. This was to guide the client on how the project would flow.',
        image: borrocracyMobile,
        challenge:
          'We kept on changing the UI the more we brain started with the client. This kind of slowed the down the progress.',
        solution:
          'I decided start implementing other features in parallel to keep the development process flowing. I also started learning machine learning and AI.'
      },
      {
        step: 'Implementing the mockups.',
        details:
          'I chose angular for the front-end and android java for the mobile app because I felt it would make me design fast since I had been using them for a while. I implemented them mobile and web UI in parallel.',
        image: borrocracyMobile,
        challenge:
          'The client still kept on changing the UI even after implementing it. I was the only developer in the company so I was overwhelmed by the constant changes.',
        solution:
          'I informed the client to first let me design a fully working platform then we will find time to adjust  the user interface.'
      },
      {
        step: 'Training models for AI',
        details:
          'After looking at different resources, I realised that the fastest way for me to implement the AI was using Tesorflowjs because it was easy to setup and learn. I organised data the AI to learn from and trained models for predicting credit score.',
        image: borrocracyMobile,
        challenge:
          'I did not know how to calculate a persons’s credit score. This delayed me while made organising the training data for training.',
        solution:
          'I designed a dynamic way of organising data and training models for prediction.'
      }
    ]
  },
  wesgas: {
    summary: {
      id: 'wesgas',
      projectName: 'Wes Gas Mobile',
      url:
        'https://play.google.com/store/apps/details?id=eu.fulusi.wesgas.client',
      profileImage: wesgas
    },
     repos:[],
    frameworks: {
      frontEnd: ['android', 'Java'],
      backEnd: ['firebase Cloud Functions', 'node'],
      others: ['Adobe Illustrator']
    },
    description:
      'This is an application that helps wesges customers buy gas, refill and also buy other accessories. The orders are delivered to the customers’ desired location. Payment is made through mobile money.',
    process: [
      {
        step: 'Got introduced to the project',
        details: 'The company needed someone to replace their developer who was leaving. I was briefed about the app idea and given the code to proceed.',
        image: wesgas,
        challenge: 'The code was not well organised and well structured. ',
        solution: 'Since the codebase was not big and I was the only person going to work on the code I  reorganised it to the way that would make me be fast.'
      },
      {
        step: 'Improve on the UI',
        details: 'I improved the UI of the application, designed icons in adobe illustrator and create a uniform theme for the application.',
        image: wesgas,
        challenge: '',
        solution: 'I learned to advise the client on a design but respect their final decision.'
      },
      {
        step: 'Get the new flow of the application',
        details: 'I got a clear explanation of how the application views were supposed to flow. I had to implement add to cart, pick location and time, and discounts',
        image: wesgas,
        challenge: '',
        solution: 'I learned how to use a location picker in android and google maps.'
      }
    ]
  },
  portfolio: {
    summary: {
      id: 'portfolio',
      projectName: 'Portfolio',
      url: 'https://soko-paul.web.app/',
      profileImage: portfolio
    },
     repos:[{name:'Portfolio Repo',link:'https://github.com/SokoPaulSokool/soko-portfolio'}],
    frameworks: {
      frontEnd: ['React', 'Javascript'],
      backEnd: [],
      others: ['Adobe Illustrator']
    },
    description:
      'This is a website that shows the projects I have worked on. It show details of each project, the challenges I went through while I worked on each project and how the solutions I got. The site also shows my skills and who I am.',
    process: [
      {
        step: '',
        details: '',
        image: portfolio,
        challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      }
    ]
  },
  myDiary: {
    summary: {
      id: 'myDiary',
      projectName: 'My Diary',
      url: 'https://sokopaulsokool.github.io/MyDiary/UI',
      profileImage: myDiary
    },
     repos:[{name:'My Diary Repo',link:'https://github.com/SokoPaulSokool/MyDiary'}],
    frameworks: {
      frontEnd: ['Vanila Javascript', 'HTML', 'css'],
      backEnd: ['Python', 'Flask'],
      others: ['Adobe Illustrator']
    },
    description:
      'This is a website that enable its users to store and track events in their life.',
    process: [
      {
        step: '',
        details: '',
        image: myDiary,
        challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      },
      {
        step: '',
        details: '',
        image: myDiary,
        challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      },
      {
        step: '',
        details: '',
        image: myDiary,
        challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      },
      {
        step: '',
        details: '',
        image: myDiary,
        challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      }
    ]
  },
  fastFood: {
    summary:  {
      id: 'fastFood',
      projectName: 'Fast Food Fast',
      url: 'https://fast-f-fast-staging.herokuapp.com',
      profileImage: fastFood
    },
     repos:[{name:'My Diary Repo',link:'https://github.com/SokoPaulSokool/fast_food_fast_react'}],
    frameworks: {
      frontEnd: ['Vanila Javascript', 'HTML', 'css'],
      backEnd: ['Python', 'Flask'],
      others: ['Adobe Illustrator']
    },
    description:
      'This is a website helps people buy fast foods',
    process: [
      {
        step: '',
        details: '',
        image: fastFood,
        challenge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        solution: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      }
    ]
  }
};

export function getProjects() {
  return [
    {
      id: 'borrocracyWeb',
      projectName: 'Borrocracy Web',
      url: 'https://borrocracy-b58eb.firebaseapp.com/',
      profileImage: borrocracyWeb,
      isWeb:true,
      brief: 'Connecting lenders and borrowers using AI credit scoring system'
    },
    {
      id: 'borrocracyMobile',
      projectName: 'Borrocracy Mobile',
      url: 'https://play.google.com/store/apps/details?id=com.borrocracy',
      profileImage: borrocracyMobile,
      isWeb:false,
      brief: 'Connecting lenders and borrowers using AI credit scoring system'
    },
    {
      id: 'wesgas',
      projectName: 'Wes Gas Mobile',
      url:
        'https://play.google.com/store/apps/details?id=eu.fulusi.wesgas.client',
      profileImage: wesgas,
      isWeb:false,
      brief: 'Cooking gas and accessories pachasing app for WESGAS'
    },
    {
      id: 'sep',
      projectName: 'Students Evaluation Protocal',
      url: 'https://sepfirebaseproject-cd7ec.firebaseapp.com/',
      profileImage: sep,
      isWeb:true,
      brief: 'Platform connecting parents to teacher as they monitor students performance in school'
    },
       {
      id: 'fastFood',
      projectName: 'Fast Food Fast',
      url: 'https://fast-f-fast-staging.herokuapp.com',
      profileImage: fastFood,
      isWeb:true,
      brief: 'Managing fast food store online and enabling clients ordering fast foods online. '
    },
    {
      id: 'portfolio',
      projectName: 'Portfolio',
      url: 'https://soko-paul.web.app/',
      profileImage: portfolio,
      isWeb:true,
      brief: 'Describing my software career, projects done and skills I have gained experience in'
    },
    {
      id: 'myDiary',
      projectName: 'My Diary',
      url: 'https://sokopaulsokool.github.io/MyDiary/UI',
      profileImage: myDiary,
      isWeb:true,
      brief: 'Online diary, keep track of your life events. In the end all we are left with are memories.'
    }
  ];
}

export function getProjectDetails(projectId) {
  return projectDetails[projectId];
}
