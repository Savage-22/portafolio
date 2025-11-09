import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'TypeScript', level: 75 },
      ],
      icon: '🎨'
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 85 },
        { name: 'Python', level: 70 },
        { name: 'SQL', level: 75 },
        { name: 'MongoDB', level: 78 },
      ],
      icon: '⚙️'
    },
    {
      title: 'Herramientas',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 65 },
        { name: 'Postman', level: 80 },
      ],
      icon: '🛠️'
    }
  ];

  return (
    <section id="habilidades" className="py-32 bg-gray-900">
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        
        {/* Título de la Sección */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Habilidades
          </h2>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Tecnologías y herramientas que domino
          </p>
        </div>

        {/* Grid de Categorías */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Header de Categoría */}
              <div className="flex items-center mb-8">
                <span className="text-4xl mr-3">{category.icon}</span>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Lista de Skills */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium text-base">{skill.name}</span>
                      <span className="text-blue-400 font-semibold text-base">{skill.level}%</span>
                    </div>
                    {/* Barra de Progreso */}
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sección Extra: Tecnologías */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-10">
            Otras Tecnologías
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React Router', 'Vite', 'Redux', 'REST APIs', 'GraphQL', 'Jest', 'Webpack', 'SASS'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
