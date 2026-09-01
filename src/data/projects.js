const projects = [
  {
    id: 1,
    title: 'SIMRS',
    category: 'Web Application',

    description:
      'A hospital information system designed to manage patient registration, medical examinations, medicines, prescriptions, and other healthcare processes.',

    // Gambar utama yang tampil di card project
    image: '/images/projects/simrs1.png',

    // Seluruh screenshot yang tampil di View Details
    images: [
      '/images/projects/simrs1.png',
      '/images/projects/simrs2.png',
      '/images/projects/simrs3.png',
      '/images/projects/simrs4.png',
      '/images/projects/simrs5.png',
    ],

    technologies: [
      'Vue.js',
      'Laravel',
      'PHP',
      'MySQL',
      'Tailwind CSS',
    ],

    github: '#',
    demo: '#',
  },

  {
    id: 2,
    title: 'SKPI Management System',
    category: 'Web Application',

    description:
      'A web-based system for managing student activity points and generating SKPI documents efficiently.',

    // Gambar utama project
    image: '/images/projects/skpi1.png',

    // Gallery SKPI
    images: [
      '/images/projects/skpi1.png',
      '/images/projects/skpi2.png',
      '/images/projects/skpi3.png',
      '/images/projects/skpi4.png',
      '/images/projects/skpi5.png',
    ],

    technologies: [
      'Laravel',
      'PHP',
      'MySQL',
      'Tailwind CSS',
    ],

    github: '#',
    demo: '#',
  },
]

export default projects