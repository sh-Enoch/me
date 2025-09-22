'use client';

import { useState, useEffect } from 'react';

export default function Skills() {
  const [visibleSkills, setVisibleSkills] = useState([]);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90, color: "from-purple-400 to-purple-600" },
        { name: "Next.js", level: 85, color: "from-gray-700 to-gray-900" },
        { name: "TypeScript", level: 80, color: "from-purple-500 to-purple-700" },
        { name: "Tailwind CSS", level: 88, color: "from-teal-400 to-teal-600" },
        { name: "JavaScript", level: 92, color: "from-yellow-400 to-yellow-600" },
        { name: "HTML/CSS", level: 95, color: "from-orange-400 to-orange-600" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85, color: "from-green-400 to-green-600" },
        { name: "Python", level: 80, color: "from-purple-400 to-purple-600" },
        { name: "Express.js", level: 82, color: "from-gray-600 to-gray-800" },
        { name: "PostgreSQL", level: 78, color: "from-teal-600 to-teal-800" },
        { name: "MongoDB", level: 75, color: "from-green-500 to-green-700" },
        { name: "REST APIs", level: 88, color: "from-purple-400 to-purple-600" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 90, color: "from-gray-700 to-gray-900" },
        { name: "Docker", level: 70, color: "from-teal-500 to-teal-700" },
        { name: "AWS", level: 65, color: "from-orange-500 to-orange-700" },
        { name: "Figma", level: 75, color: "from-pink-400 to-pink-600" },
        { name: "VS Code", level: 95, color: "from-purple-400 to-purple-600" },
        { name: "Postman", level: 85, color: "from-orange-400 to-orange-600" }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.getAttribute('data-skill');
            if (!visibleSkills.includes(skillName)) {
              setVisibleSkills(prev => [...prev, skillName]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillElements = document.querySelectorAll('[data-skill]');
    skillElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [visibleSkills]);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here's a comprehensive overview of my technical skills and proficiency levels 
            in various technologies and tools I work with regularly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-gray-50 dark:bg-slate-800 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} data-skill={`${categoryIndex}-${skillIndex}`}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out ${
                          visibleSkills.includes(`${categoryIndex}-${skillIndex}`)
                            ? `w-[${skill.level}%]`
                            : 'w-0'
                        }`}
                        style={{ 
                          width: visibleSkills.includes(`${categoryIndex}-${skillIndex}`) ? `${skill.level}%` : '0%' 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Other Skills & Interests
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Responsive Design", "UI/UX Design", "Agile Methodology", 
              "Test-Driven Development", "Performance Optimization", "SEO",
              "Accessibility", "CI/CD", "Linux", "GraphQL", "Redux", "Prisma"
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-purple-100 to-teal-100 dark:from-purple-900 dark:to-teal-900 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:shadow-md transition-shadow duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-teal-50 dark:from-purple-900/20 dark:to-teal-900/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Certifications & Learning
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "AWS Certified", icon: "🏆" },
              { name: "React Developer", icon: "⚛️" },
              { name: "Node.js Certified", icon: "🚀" },
              { name: "Continuous Learning", icon: "📚" }
            ].map((cert) => (
              <div
                key={cert.name}
                className="text-center bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm"
              >
                <div className="text-3xl mb-2">{cert.icon}</div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{cert.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}