import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { projects } from '../data/projects';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const { theme } = useTheme();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center gap-6 ${
        theme === 'dark' ? 'bg-[#0A1628] text-white' : 'bg-[#f5f1e8] text-[#2c2416]'
      }`}>
        <p className="text-2xl font-bold">Proyecto no encontrado</p>
        <Link
          to="/#proyectos"
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white ${
            theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-[#8b7355] hover:bg-[#6b5d4a]'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Proyectos
        </Link>
      </div>
    );
  }

  return (
    <section className={`min-h-screen py-16 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#0A1628]' : 'bg-[#f5f1e8]'
    }`}>
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 max-w-5xl mx-auto">

        <Link
          to="/#proyectos"
          className={`inline-flex items-center gap-2 mb-10 text-sm font-medium transition-colors ${
            theme === 'dark' ? 'text-gray-400 hover:text-blue-400' : 'text-[#6b5d4a] hover:text-[#8b7355]'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Proyectos
        </Link>

        <div className={`rounded-2xl overflow-hidden shadow-2xl border ${
          theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white border-[#8b7355]/20'
        }`}>

          <div className={`h-56 flex items-center justify-center text-8xl ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-blue-500 to-purple-600'
              : 'bg-gradient-to-br from-[#a68a6a] to-[#8b7355]'
          }`}>
            {project.image && project.image.includes('/')
              ? <img src={project.image} alt={project.title} className="h-full w-full object-contain p-6" />
              : (project.image ?? '📁')
            }
          </div>

          <div className="p-8 sm:p-10 space-y-8">

            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className={`text-4xl sm:text-5xl font-bold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-[#2c2416]'
                }`}>
                  {project.title}
                </h1>
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                  theme === 'dark' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-[#8b7355]/20 text-[#8b7355]'
                }`}>
                  {project.status}
                </span>
              </div>
              <div className="flex gap-3 flex-wrap">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:scale-105 ${
                      theme === 'dark'
                        ? 'bg-gray-800 hover:bg-gray-700 text-white'
                        : 'bg-[#d4c4a8] hover:bg-[#8b7355] text-[#2c2416] hover:text-white'
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white transition-all hover:scale-105 ${
                      theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-[#8b7355] hover:bg-[#6b5d4a]'
                    }`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo en Vivo
                  </a>
                )}
              </div>
            </div>

            <div>
              <h2 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#2c2416]'}`}>
                Descripción
              </h2>
              <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-[#4a3f2e]'}`}>
                {project.description}
              </p>
            </div>

            {project.features && (
              <div>
                <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#2c2416]'}`}>
                  Funcionalidades
                </h2>
                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                    <li key={i} className={`flex items-start gap-3 text-sm ${
                      theme === 'dark' ? 'text-gray-300' : 'text-[#4a3f2e]'
                    }`}>
                      <span className={`mt-0.5 w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center text-xs font-bold ${
                        theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-[#8b7355]/20 text-[#8b7355]'
                      }`}>
                        {i + 1}
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#2c2416]'}`}>
                Tecnologías
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      theme === 'dark'
                        ? 'bg-gray-800 text-blue-400'
                        : 'bg-[#e8dcc8] text-[#8b7355] border border-[#8b7355]/30'
                    }`}
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
