import React from 'react';
import { 
  Code2, 
  Palette, 
  Server, 
  Database, 
  Wrench, 
  ClipboardList,
  Globe,
  Users,
  Zap,
  Puzzle,
  MessageCircle,
  FileCode,
  Workflow,
  GitBranch,
  Package,
  Container,
  BarChart3,
  GitFork,
  Ruler,
  Github,
  FileJson,
  Sparkles,
  Coffee
} from 'lucide-react';

export default function Skills() {
  const technicalSkills = [
    {
      category: 'Programación y Desarrollo',
      Icon: Code2,
      skills: [
        { name: 'JavaScript', Icon: FileCode },
        { name: 'Java', Icon: Coffee },
        { name: 'C', Icon: FileJson },
        { name: 'HTML', Icon: Code2 },
        { name: 'CSS', Icon: Palette },
      ]
    },
    {
      category: 'Frontend',
      Icon: Palette,
      skills: [
        { name: 'React', Icon: Code2 },
        { name: 'Tailwind CSS', Icon: Palette },
      ]
    },
    {
      category: 'Backend',
      Icon: Server,
      skills: [
        { name: 'Node.js', Icon: Server },
        { name: 'Express', Icon: Workflow },
      ]
    },
    {
      category: 'Base de Datos',
      Icon: Database,
      skills: [
        { name: 'MySQL', Icon: Database },
        { name: 'PostgreSQL', Icon: Database },
        { name: 'Modelado de Datos', Icon: BarChart3 },
        { name: 'Diagramas ER', Icon: GitFork },
        { name: 'Normalización', Icon: Ruler },
      ]
    },
    {
      category: 'Herramientas y Plataformas',
      Icon: Wrench,
      skills: [
        { name: 'Git', Icon: GitBranch },
        { name: 'GitHub', Icon: Github },
        { name: 'VS Code', Icon: Code2 },
        { name: 'npm', Icon: Package },
        { name: 'Docker', Icon: Container },
      ]
    },
    {
      category: 'Metodologías',
      Icon: ClipboardList,
      skills: [
        { name: 'Scrum', Icon: Users },
        { name: 'Kanban', Icon: ClipboardList },
        { name: 'Desarrollo Colaborativo', Icon: Users },
      ]
    }
  ];

  const professionalSkills = [
    {
      title: 'Colaboración Intercultural',
      description: 'Prosperando en un entorno académico internacional (Brasil)',
      Icon: Globe
    },
    {
      title: 'Liderazgo de Equipo',
      description: 'Experiencia coordinando proyectos grupales y mentorizando estudiantes',
      Icon: Users
    },
    {
      title: 'Aprendizaje Rápido',
      description: 'Adaptación rápida a nuevas tecnologías y frameworks',
      Icon: Zap
    },
    {
      title: 'Resolución de Problemas',
      description: 'Enfoque analítico para resolver desafíos técnicos complejos',
      Icon: Puzzle
    },
    {
      title: 'Comunicación',
      description: 'Efectiva en entornos multiculturales y multilingües',
      Icon: MessageCircle
    }
  ];

  return (
    <section id="habilidades" className="py-20 bg-gray-900">
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        
        {/* Título de la Sección */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Habilidades y Experiencia
          </h2>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Una visión completa de mis capacidades técnicas y profesionales
          </p>
        </div>

        {/* Technical Skills Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-4 flex items-center">
            <Code2 className="mr-3 text-blue-500" size={36} />
            Habilidades Técnicas
          </h3>
          <div className="w-20 h-1 bg-blue-500 mb-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalSkills.map((category, index) => {
              const CategoryIcon = category.Icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl p-6 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-700"
                >
                  {/* Header de Categoría */}
                  <div className="flex items-center mb-6 pb-4 border-b border-gray-700">
                    <CategoryIcon className="mr-3 text-blue-400" size={28} />
                    <h4 className="text-xl font-bold text-white">{category.category}</h4>
                  </div>

                  {/* Lista de Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.Icon;
                      return (
                        <span
                          key={skillIndex}
                          className="inline-flex items-center px-3 py-2 bg-gray-700 text-gray-200 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
                        >
                          <SkillIcon className="mr-2" size={16} />
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Professional Skills Section */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-4 flex items-center">
            <Sparkles className="mr-3 text-purple-500" size={36} />
            Habilidades Profesionales
          </h3>
          <div className="w-20 h-1 bg-purple-500 mb-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalSkills.map((skill, index) => {
              const SkillIcon = skill.Icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-700"
                >
                  <div className="flex items-start mb-4">
                    <SkillIcon className="mr-4 text-purple-400 flex-shrink-0" size={32} />
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{skill.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 italic">
            Siempre aprendiendo y creciendo con nuevas tecnologías y metodologías
          </p>
        </div>
      </div>
    </section>
  );
}
