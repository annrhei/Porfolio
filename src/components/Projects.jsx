export default function Projects() {
  const projects = [
    {
      title: 'SIGNSIGHT - CAMERA-BASED REAL-TIME SIGN LANGUAGE TRANSLATOR',
      description: 'SignSight, a camera-based real-time Filipino Sign Language (FSL) translator that uses computer vision and machine learning to recognize and translate FSL hand gestures into readable text.',
      technologies: ['PHP', 'Visual Studio', 'React Native', 'Git', 'Figma'],
      image: 'bg-gradient-to-br from-primary-400 to-primary-700'
    },
    {
      title: 'Evacu Desk (Easy, Quick and Safe Evacuation)',
      description: 'EvacuDesk, a web-based evacuation center management system for disaster and emergency operations.',
      technologies: ['PHP', 'MySQL', 'Tailwind CSS', 'Figma'],
      image: 'bg-gradient-to-br from-primary-300 to-primary-600'
    },
    {
      title: 'Traditions Wellness Spa (Spa Booking & Management System)',
      description: 'Traditions Wellness Spa, a mobile and web-based spa management system.',
      technologies: ['PHP', 'Java Script', 'MySQL', 'Tailwind CSS', 'Figma', 'Jetpack Compose'],
      image: 'bg-gradient-to-br from-primary-500 to-primary-800'
    },
    {
      title: 'PawSalon',
      description: 'A pet grooming and salon booking platform that helps pet owners schedule services with convenience and clarity.',
      technologies: ['React', 'Booking System', 'Pet Services'],
      image: 'bg-gradient-to-br from-primary-400 to-primary-600'
    },

  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 relative overflow-hidden">
      {/* Abstract IT-themed background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(to right, #64748B 1px, transparent 1px),
            linear-gradient(to bottom, #64748B 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-700 rounded-full opacity-[0.18] blur-3xl"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary-600 rounded-full opacity-[0.12] blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-primary-800 rounded-full opacity-[0.16] blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-3d rounded-xl overflow-hidden"
            >
              <div className={`h-48 ${project.image} flex items-center justify-center`}>
                <span className="text-white text-2xl font-bold opacity-80">{project.title}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary-700 text-primary-200 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
