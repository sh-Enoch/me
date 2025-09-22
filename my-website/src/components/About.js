import Image from 'next/image';

export default function About() {
  const highlights = [
    {
      title: "3+ Years Experience",
      description: "Building modern web applications with cutting-edge technologies"
    },
    {
      title: "50+ Projects",
      description: "Delivered successful projects for clients across various industries"
    },
    {
      title: "Full Stack",
      description: "Expertise in both frontend and backend development"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-100 to-teal-100 dark:from-purple-900 dark:to-teal-900 p-8 flex items-center justify-center">
              {/* Placeholder for profile image */}
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-200 dark:bg-teal-800 rounded-full opacity-20"></div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
              </h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                <p>
                  Hello! I'm a passionate full-stack developer with a love for creating 
                  beautiful, functional, and user-centered digital experiences. I've been 
                  working in the web development field for over 3 years.
                </p>
                <p>
                  My main focus these days is building accessible, inclusive products 
                  and digital experiences for a variety of clients. I most enjoy working 
                  at the intersection of design and development – creating things that 
                  look great and work well.
                </p>
                <p>
                  When I'm not at the computer, you'll find me reading, exploring nature, 
                  or experimenting with new technologies and frameworks.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg bg-gray-50 dark:bg-slate-800 hover:shadow-lg transition-shadow duration-200"
                >
                  <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Technologies I love working with */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Technologies I Love Working With:
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 
                  'Python', 'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'Git'
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}