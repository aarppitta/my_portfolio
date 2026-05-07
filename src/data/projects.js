// TODO: replace github URLs with your real repo links
export const projects = [
  {
    name: 'OPC-UA Industrial Data Platform',
    tag: 'Production System',
    featured: true,
    description:
      'Real-time industrial data acquisition system connecting to PLCs over OPC-UA. Streams live machine telemetry from factory hardware into MySQL, with a React dashboard for monitoring and visualization.',
    stack: ['React', 'Python', 'Django', 'MySQL', 'OPC-UA', 'REST'],
    github: null,
    demo: null,
    accent: 'industrial',
  },
  {
    name: 'Task Management System',
    tag: 'Full Stack',
    featured: true,
    description:
      'Project management app with auth, task assignment, status tracking, and team collaboration.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/aarppitta/Task-Management',
    demo: null,
    accent: 'product',
  },
  {
    name: 'Job Portal Platform',
    tag: 'Full Stack',
    featured: true,
    description:
      'End-to-end job board with employer & candidate flows, job listings, application tracking, and search/filter.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/aarppitta/Job-portal-MERN',
    demo: null,
    accent: 'product',
  },
  {
    name: 'Grocery E-Commerce Platform',
    tag: 'E-Commerce',
    featured: false,
    description:
      'Full-stack grocery storefront with secure auth, product management, cart, and order processing.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
  },
  {
    name: 'Real-Time Chat Application',
    tag: 'Real-Time',
    featured: false,
    description:
      'Real-time messaging supporting many concurrent users with instant delivery over WebSockets.',
    stack: ['Node.js', 'Socket.IO', 'Express', 'React'],
  },
  {
    name: 'Weighbridge Automation System',
    tag: 'Hardware Integration',
    featured: false,
    description:
      'Backend system for industrial weighbridge hardware, exchanging data between Node.js APIs and physical weighing equipment.',
    stack: ['Node.js', 'Express', 'MySQL', 'Hardware'],
  },
  {
    name: 'Event Booking System',
    tag: 'API',
    featured: false,
    description:
      'REST API event platform with JWT auth, MongoDB schemas, and concurrent booking support.',
    stack: ['Node.js', 'Express', 'MongoDB', 'JWT'],
  },
];
