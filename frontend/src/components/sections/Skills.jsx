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
import { useTheme } from '../../context/ThemeContext';

export default function Skills() {
  const { theme } = useTheme();
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
    <section id="habilidades" className={`min-h-screen py-16 sm:py-20 flex items-center transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0A1628]' : 'bg-[#f5f1e8]'}`}>
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        
        {/* Título de la Sección */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#2c2416]'}`}>
            Habilidades y Experiencia
          </h2>
          <div className={`w-20 sm:w-24 h-1.5 mx-auto mb-4 sm:mb-6 ${theme === 'dark' ? 'bg-blue-500' : 'bg-[#8b7355]'}`}></div>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto px-4 ${theme === 'dark' ? 'text-gray-400' : 'text-[#6b5d4a]'}`}>
            Una visión completa de mis capacidades técnicas y profesionales
          </p>
        </div>

        {/* Technical Skills Section */}
        <div className="mb-16 sm:mb-18 lg:mb-20">
          <h3 className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 flex items-center flex-wrap gap-2 sm:gap-3 ${theme === 'dark' ? 'text-white' : 'text-[#2c2416]'}`}>
            <Code2 className={`flex-shrink-0 ${theme === 'dark' ? 'text-blue-500' : 'text-[#8b7355]'}`} size={32} />
            <span>Habilidades Técnicas</span>
          </h3>
          <div className={`w-16 sm:w-20 h-1 mb-8 sm:mb-10 ${theme === 'dark' ? 'bg-blue-500' : 'bg-[#8b7355]'}`}></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalSkills.map((category, index) => {
              const CategoryIcon = category.Icon;
              return (
                <div
                  key={index}
                  className={`rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 border ${
                    theme === 'dark' 
                      ? 'bg-gray-800 hover:shadow-blue-500/20 border-gray-700' 
                      : 'bg-[#e8dcc8] hover:shadow-[#8b7355]/20 border-[#8b7355]/20'
                  }`}
                >
                  {/* Header de Categoría */}
                  <div className={`flex items-center mb-6 pb-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-[#8b7355]/30'}`}>
                    <CategoryIcon className={`mr-3 ${theme === 'dark' ? 'text-blue-400' : 'text-[#8b7355]'}`} size={28} />
                    <h4 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#2c2416]'}`}>{category.category}</h4>
                  </div>

                  {/* Lista de Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.Icon;
                      return (
                        <span
                          key={skillIndex}
                          className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                            theme === 'dark' 
                              ? 'bg-gray-700 text-gray-200 hover:bg-blue-600 hover:text-white' 
                              : 'bg-[#f5f1e8] text-[#4a3f2e] border border-[#8b7355]/30 hover:bg-[#8b7355] hover:text-white'
                          }`}
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
          <h3 className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 flex items-center flex-wrap gap-2 sm:gap-3 ${theme === 'dark' ? 'text-white' : 'text-[#2c2416]'}`}>
            <Sparkles className={`flex-shrink-0 ${theme === 'dark' ? 'text-purple-500' : 'text-[#a68a6a]'}`} size={32} />
            <span>Habilidades Profesionales</span>
          </h3>
          <div className={`w-16 sm:w-20 h-1 mb-8 sm:mb-10 ${theme === 'dark' ? 'bg-purple-500' : 'bg-[#a68a6a]'}`}></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalSkills.map((skill, index) => {
              const SkillIcon = skill.Icon;
              return (
                <div
                  key={index}
                  className={`rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 border ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:shadow-purple-500/20 border-gray-700' 
                      : 'bg-[#d4c4a8] hover:shadow-[#a68a6a]/20 border-[#8b7355]/20'
                  }`}
                >
                  <div className="flex items-start mb-4">
                    <SkillIcon className={`mr-4 flex-shrink-0 ${theme === 'dark' ? 'text-purple-400' : 'text-[#a68a6a]'}`} size={32} />
                    <div>
                      <h4 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#2c2416]'}`}>{skill.title}</h4>
                      <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-[#6b5d4a]'}`}>
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
          <p className={`italic ${theme === 'dark' ? 'text-gray-500' : 'text-[#8b7355]'}`}>
            Siempre aprendiendo y creciendo con nuevas tecnologías y metodologías
          </p>
        </div>
      </div>
    </section>
  );
}
