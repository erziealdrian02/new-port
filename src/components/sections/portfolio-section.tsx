'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '@/hooks/use-translation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

type Project = {
  id: string;
  title: string;
  description: string;
  category: 'ui_ux' | 'documentation' | 'web_developer' | 'mobile';
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  gallery: string[];
};

export default function PortfolioSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 'project-1',
      title: 'ERP Reimbursement System',
      description:
        'HCIS-KPN (Human Capital Information System - KPN) is a module of the ERP (Enterprise Resource Planning) system specifically designed to assist companies in managing various aspects of human resources. The project includes features such as Business Trip, Cash Advanced, Medical Reimbursement, Ticket Submission, Hotel Submission, and other administrative processes related to HR. The system aims to improve efficiency and transparency in HR management within the organization',
      category: 'web_developer',
      image: '/images/portofolio/reimburse/bg-wallpaper.png',
      technologies: [
        'Laravel',
        'MySQL',
        'Node.js & NPM/Yarn',
        'Bootstrap',
        'PHPUnit',
        'Tailwind CSS',
      ],
      link: 'https://erpreimburse.neutracode.my.id/',
      gallery: [
        '/images/portofolio/reimburse/login.png',
        '/images/portofolio/reimburse/listca.png',
        '/images/portofolio/reimburse/listbtadmin.png',
        '/images/portofolio/reimburse/formdoc.png',
      ],
    },
    {
      id: 'project-2',
      title: 'Fleet Management System',
      description:
        'Fleet Management System is a module of an ERP (Enterprise Resource Planning) system designed to assist companies in managing their vehicle fleet efficiently. The system includes features such as vehicle management, maintenance scheduling, location tracking, and driver management. The goal is to improve operational efficiency, reduce operational costs, and ensure regulatory compliance.',
      category: 'web_developer',
      image: '/images/portofolio/fleetmanagement/bg-wallpaper.jpg',
      technologies: [
        'Laravel',
        'MySQL',
        'Bootstrap',
        'Tailwind CSS',
        'Vite',
        'Node.js & NPM/Yarn',
        'PHPUnit',
      ],
      link: 'https://fleetmanagementsystem.neutracode.my.id/',
      gallery: [
        '/images/portofolio/fleetmanagement/listtrips.png',
        '/images/portofolio/fleetmanagement/gpsform.png',
        '/images/portofolio/fleetmanagement/listpart.png',
        '/images/portofolio/fleetmanagement/forminput.png',
      ],
    },
    {
      id: 'project-3',
      title: 'Weather With Us',
      description:
        'Weather With Us is a web application designed to present weather information in an interactive and structured manner based on administrative regions in Indonesia, such as provinces, districts, sub-districts and villages. The project aims to provide accurate and easily accessible weather data for users, with informative visual displays and intuitive navigation.',
      category: 'web_developer',
      image: '/images/portofolio/weather/bg-wallpaper.png',
      technologies: [
        'PHP',
        'Tailwind CSS',
        'JavaScript',
        'OpenWeatherMap API',
        'HTML/CSS',
      ],
      link: 'https://weatherwithus.neutracode.my.id/',
      gallery: [
        '/images/portofolio/weather/weather_detail.png',
        '/images/portofolio/weather/weather_maps.png',
        '/images/portofolio/weather/weather_province.png',
        '/images/portofolio/weather/weather_index.png',
      ],
    },
    {
      id: 'project-4',
      title: 'Dev on Demand',
      description:
        'DevOnDemand-System is a web-based ERP system designed for dynamic management of outsourcing services. It supports the management of clients, projects, employees, assignments, and activities with a real-time approach as well as audit log and data export capabilities.',
      category: 'web_developer',
      image: '/images/portofolio/devondemands/bg-wallpaper.png',
      technologies: [
        'Laravel',
        'Inertia.js',
        'Vue.js',
        'Tailwind CSS',
        'SweetAlert2',
        'Laravel Excel',
        'UUID, JSON, Enum',
      ],
      // link: 'https://weatherwithus.neutracode.my.id/',
      gallery: [
        '/images/portofolio/devondemands/dashboardpage.png',
        '/images/portofolio/devondemands/clientpage.png',
        '/images/portofolio/devondemands/skillpage.png',
        '/images/portofolio/devondemands/loginpage.png',
      ],
    },
    {
      id: 'project-5',
      title: 'WeNime',
      description:
        'Anime Stream is a web application designed to provide users with anime streaming services. The project allows users to browse, search, and watch various anime titles online. With a user-friendly and responsive interface, the app aims to provide a convenient and accessible anime viewing experience.',
      category: 'web_developer',
      image: '/images/portofolio/wenime/bg-wallpaper.png',
      technologies: [
        'React.js',
        'Tailwind CSS',
        'Vite',
        'React Router',
        'TypeScript',
      ],
      link: 'http://wenimewatch.vercel.app/',
      gallery: [
        '/images/portofolio/wenime/homepage.png',
        '/images/portofolio/wenime/DetailAnime.png',
        '/images/portofolio/wenime/animeList.png',
      ],
    },
    // {
    //   id: 'project-2',
    //   title: 'E-Commerce Dashboard',
    //   description:
    //     'A modern dashboard for e-commerce platforms with analytics and inventory management.',
    //   category: 'ui_ux',
    //   image: '/placeholder.svg?height=400&width=600',
    //   technologies: ['React', 'TailwindCSS', 'Chart.js'],
    //   link: 'https://example.com',
    //   github: 'https://github.com/example/project',
    //   gallery: [
    //     '/placeholder.svg?height=400&width=600',
    //     '/placeholder.svg?height=400&width=600',
    //     '/placeholder.svg?height=400&width=600',
    //   ],
    // },
    // {
    //   id: 'project-3',
    //   title: 'Mobile Banking App',
    //   description:
    //     'A secure and user-friendly mobile banking application with transaction history and bill payments.',
    //   category: 'mobile',
    //   image: '/placeholder.svg?height=400&width=600',
    //   technologies: ['React Native', 'Redux', 'Firebase'],
    //   gallery: [
    //     '/placeholder.svg?height=400&width=600',
    //     '/placeholder.svg?height=400&width=600',
    //   ],
    // },
    // {
    //   id: 'project-4',
    //   title: 'API Documentation',
    //   description:
    //     'Comprehensive documentation for a RESTful API with examples and use cases.',
    //   category: 'documentation',
    //   image: '/placeholder.svg?height=400&width=600',
    //   technologies: ['Swagger', 'Markdown', 'HTML/CSS'],
    //   link: 'https://example.com',
    //   gallery: [
    //     '/placeholder.svg?height=400&width=600',
    //     '/placeholder.svg?height=400&width=600',
    //   ],
    // },
    // {
    //   id: 'project-5',
    //   title: 'Fitness Tracker App',
    //   description:
    //     'A mobile application for tracking workouts, nutrition, and progress.',
    //   category: 'mobile',
    //   image: '/placeholder.svg?height=400&width=600',
    //   technologies: ['Flutter', 'Firebase', 'Google Fit API'],
    //   gallery: [
    //     '/placeholder.svg?height=400&width=600',
    //     '/placeholder.svg?height=400&width=600',
    //   ],
    // },
    // {
    //   id: 'project-6',
    //   title: 'Travel Website Redesign',
    //   description:
    //     'A complete redesign of a travel booking website with improved user experience.',
    //   category: 'ui_ux',
    //   image: '/placeholder.svg?height=400&width=600',
    //   technologies: ['Figma', 'Adobe XD', 'Photoshop'],
    //   link: 'https://example.com',
    //   gallery: [
    //     '/placeholder.svg?height=400&width=600',
    //     '/placeholder.svg?height=400&width=600',
    //     '/placeholder.svg?height=400&width=600',
    //   ],
    // },
  ];

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative min-h-screen w-full py-20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold sm:text-4xl md:text-5xl">
            {t('portfolio.title')}
          </h2>
          <p className="text-muted-foreground">{t('portfolio.subtitle')}</p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 flex w-full flex-wrap justify-center gap-2">
            <TabsTrigger value="all">{t('portfolio.filters.all')}</TabsTrigger>
            <TabsTrigger value="ui_ux">
              {t('portfolio.filters.ui_ux')}
            </TabsTrigger>
            <TabsTrigger value="documentation">
              {t('portfolio.filters.documentation')}
            </TabsTrigger>
            <TabsTrigger value="web_developer">
              {t('portfolio.filters.web_developer')}
            </TabsTrigger>
            <TabsTrigger value="mobile">
              {t('portfolio.filters.mobile')}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <ProjectGrid
              projects={projects}
              onOpenProject={handleOpenProject}
            />
          </TabsContent>

          <TabsContent value="ui_ux" className="mt-0">
            <ProjectGrid
              projects={projects.filter((p) => p.category === 'ui_ux')}
              onOpenProject={handleOpenProject}
            />
          </TabsContent>

          <TabsContent value="documentation" className="mt-0">
            <ProjectGrid
              projects={projects.filter((p) => p.category === 'documentation')}
              onOpenProject={handleOpenProject}
            />
          </TabsContent>

          <TabsContent value="web_developer" className="mt-0">
            <ProjectGrid
              projects={projects.filter((p) => p.category === 'web_developer')}
              onOpenProject={handleOpenProject}
            />
          </TabsContent>

          <TabsContent value="mobile" className="mt-0">
            <ProjectGrid
              projects={projects.filter((p) => p.category === 'mobile')}
              onOpenProject={handleOpenProject}
            />
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription>
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4 grid gap-4">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Image
                    src={selectedProject.image || '/placeholder.svg'}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="grid gap-2">
                  <h3 className="text-lg font-semibold">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-2">
                  <h3 className="text-lg font-semibold">Gallery</h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {selectedProject.gallery.map((img, index) => (
                      <div
                        key={index}
                        className="relative aspect-video w-full overflow-hidden rounded-lg"
                      >
                        <Image
                          src={img || '/placeholder.svg'}
                          alt={`${selectedProject.title} screenshot ${
                            index + 1
                          }`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {selectedProject.link && (
                    <Button asChild>
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {t('portfolio.visit_site')}
                      </a>
                    </Button>
                  )}
                  {selectedProject.github && (
                    <Button variant="outline" asChild>
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        {t('portfolio.view_code')}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

interface ProjectGridProps {
  projects: Project[];
  onOpenProject: (project: Project) => void;
}

function ProjectGrid({ projects, onOpenProject }: ProjectGridProps) {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5 }}
        >
          <Card className="overflow-hidden">
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={project.image || '/placeholder.svg'}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <span
                  className={cn(
                    'rounded-full px-2 py-1 text-xs font-medium text-white bg-purple-500'
                    // {
                    //   'bg-purple-500': project.category === 'ui_ux',
                    //   'bg-blue-500': project.category === 'documentation',
                    //   'bg-green-500': project.category === 'web_developer',
                    //   'bg-orange-500': project.category === 'mobile',
                    // }
                  )}
                >
                  {t(`portfolio.filters.${project.category}`)}
                </span>
              </div>
              <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                {project.description}
              </p>
              <Button
                onClick={() => onOpenProject(project)}
                variant="default"
                className="w-full"
              >
                {t('portfolio.view_project')}
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
