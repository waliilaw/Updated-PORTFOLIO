import { FaHtml5, FaCss3Alt, FaNodeJs, FaGithub } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { DiMongodb } from 'react-icons/di';
import { SiExpress, SiNextdotjs, SiTypescript, SiDocker, SiPrisma, SiPostgresql, SiFirebase, SiVercel, SiCloudflare, SiBulma } from 'react-icons/si';

export function Stacks() {
  const icons = [
    { Icon: FaGithub, name: "Github", color: "text-gray-500" },
    { Icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
    { Icon: RiReactjsLine, name: "React", color: "text-cyan-500" },
    { Icon: DiMongodb, name: "MongoDB", color: "text-green-500" },
    { Icon: FaHtml5, name: "HTML", color: "text-orange-500" },
    { Icon: FaCss3Alt, name: "CSS", color: "text-blue-500" },
    { Icon: IoLogoJavascript, name: "JavaScript", color: "text-yellow-500" },
    { Icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-700" },
    { Icon: SiNextdotjs, name: "Next.js", color: "text-gray-500" },
    { Icon: FaNodeJs, name: "Node.js", color: "text-green-700" },
    { Icon: SiExpress, name: "Express", color: "text-green-600" },
    { Icon: RiTailwindCssFill, name: "Tailwind", color: "text-teal-400" },
    { Icon: SiPrisma, name: "Prisma", color: "text-green-600" },
    { Icon: SiDocker, name: "Docker", color: "text-blue-500" },
    { Icon: SiFirebase, name: "Firebase", color: "text-yellow-500" },
    { Icon: SiVercel, name: "Vercel", color: "text-gray-500" },
    { Icon: SiCloudflare, name: "Cloudflare", color: "text-orange-500" },
    { Icon: SiBulma, name: "Bulma", color: "text-purple-500" }
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto mt-10 p-8">
      {icons.map(({ Icon, name, color }, index) => (
        <div
          key={index}
          className="relative group w-24 h-24"
        >
          {/* Permanent subtle border shadow */}
          <div className="absolute -inset-[1px] bg-white/5 rounded-lg" />
          <div className="absolute -inset-[1px] bg-gradient-to-r from-orange-500/10 via-orange-300/10 to-orange-500/10 rounded-lg blur-sm" />
          
          {/* Main container with glass effect */}
          <div className="relative h-full w-full bg-black/20 backdrop-blur-sm rounded-lg transform transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 flex flex-col items-center justify-center gap-1 z-10">
            {/* Hover border effect */}
            <div className="absolute -inset-[1.5px] bg-orange-500/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -inset-[1px] bg-black rounded-lg z-[11]" />
            
            {/* Content container */}
            <div className="relative z-20 flex flex-col items-center gap-1">
              <Icon 
                className={`text-3xl ${color} transition-all duration-300`} 
              />
              <span className="text-xs text-white/50 font-medium pt-2">{name}</span>
            </div>
          </div>

          {/* Outer glow effect for border on hover */}
          <div className="absolute -inset-[2px] bg-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
        </div>
      ))}
    </div>
  );
}