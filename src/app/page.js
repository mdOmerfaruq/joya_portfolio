
import Image from "next/image";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

const skills = [
  {
    title: "Programming Languages",
    icon: "💻",
    items: ["Python", "C++", "Java"],
  },
  {
    title: "Web Technologies",
    icon: "🌐",
    items: ["HTML", "CSS", "Web Development"],
  },
  {
    title: "Database & Tools",
    icon: "🛠️",
    items: ["SQL", "Database Management"],
  },
  {
    title: "Design & Development",
    icon: "🎨",
    items: ["UI/UX Design", "Figma", "Prototyping"],
  },
  {
    title: "Professional Skills",
    icon: "🤝",
    items: [
      "Communication",
      "Presentation",
      "Teamwork",
      "Problem Solving",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "AI-Based Course Selection and Registration System",
    description:
      "An academic final-year project designed to automate course selection and simplify the student registration process.",
    technologies: ["Artificial Intelligence", "Course Management", "Automation"],
    icon: "🤖",
  },
  {
    number: "02",
    title: "Smart Hospital Management System",
    description:
      "A software solution designed to improve hospital operations, patient information management, and healthcare service organization.",
    technologies: ["Software Development", "Database", "Healthcare"],
    icon: "🏥",
  },
];

const achievements = [
  {
    icon: "🎓",
    title: "CSE Graduate",
    description:
      "Academic background in Computer Science and Engineering.",
  },
  {
    icon: "🏅",
    title: "English Proficiency Certificate",
    description:
      "English proficiency certificate from United International University.",
  },
  {
    icon: "💻",
    title: "Academic Project Developer",
    description:
      "Developed academic software projects addressing practical problems.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Experience with interface design and interactive prototypes.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FCFAFF] text-slate-900">

      {/* ================= NAVBAR ================= */}

      <nav className="sticky top-0 z-50 border-b border-purple-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a href="#home" className="text-2xl font-bold">
            Joyasree<span className="text-violet-600">.</span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-violet-600"
              >
                {item.name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700"
          >
            Let's Talk
          </a>

        </div>
      </nav>


      {/* ================= HERO SECTION ================= */}

      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-[#F3ECFF] via-[#F8F5FF] to-[#E9DFFF] py-20 md:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2 lg:px-8">

          {/* Introduction */}
          <div className="space-y-6">

            <p className="font-semibold uppercase tracking-[0.25em] text-violet-600">
              Hello, I'm
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
              Joyasree Bardhan
            </h1>

            <h2 className="text-2xl font-semibold text-violet-600 md:text-3xl">
              Computer Science Graduate
            </h2>

            <p className="max-w-xl text-lg leading-8 text-slate-600">
              A Computer Science and Engineering graduate
              passionate about technology, software development,
              artificial intelligence, and creating innovative
              solutions to real-world problems.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">

              <a
                href="#projects"
                className="rounded-xl bg-violet-600 px-7 py-3 font-semibold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1 hover:bg-violet-700"
              >
                View My Projects
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-violet-300 bg-white/70 px-7 py-3 font-semibold text-violet-700 transition hover:bg-violet-100"
              >
                Contact Me
              </a>

              <a
                href="/Joyasree_CV.pdf"
                download="Joyasree_Bardhan_CV.pdf"
                className="rounded-xl border border-violet-300 bg-white/70 px-7 py-3 font-semibold text-violet-700 transition hover:bg-violet-100"
              >
                ↓ Download CV
              </a>

            </div>

            <div className="flex flex-wrap gap-3 pt-4">

              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-violet-700 shadow-sm">
                🎓 CSE Graduate
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-violet-700 shadow-sm">
                💻 Software Development
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-violet-700 shadow-sm">
                🎨 UI/UX Design
              </span>

            </div>

          </div>

          {/* Profile Image */}
          <div className="flex justify-center">

            <div className="relative flex h-80 w-80 items-center justify-center rounded-[3rem] bg-gradient-to-br from-purple-200 via-violet-100 to-indigo-200 shadow-2xl shadow-purple-200 md:h-[420px] md:w-[420px]">

              <div className="relative h-64 w-64 overflow-hidden rounded-full border-8 border-[#F8F5FF] bg-purple-100 shadow-xl md:h-80 md:w-80">

                <Image
                  src="/Joya.jpg"
                  alt="Joyasree Bardhan"
                  fill
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                  className="object-cover object-top"
                />

              </div>

              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-purple-100 bg-[#FCFAFF] p-4 shadow-lg">
                <p className="text-sm font-bold text-slate-800">
                  Software Development
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Learning & Innovation
                </p>
              </div>

              <div className="absolute -right-5 top-10 rounded-2xl border border-purple-100 bg-[#FCFAFF] p-4 shadow-lg">
                <p className="text-sm font-bold text-violet-600">
                  CSE Graduate
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Computer Science
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= ABOUT SECTION ================= */}

      <section id="about" className="bg-white px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="font-semibold uppercase tracking-widest text-violet-600">
              Get to know me
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              About Me
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-violet-600" />
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">

            <div>
              <h3 className="text-2xl font-bold leading-relaxed text-slate-800">
                Passionate about technology, creativity, and
                developing meaningful software solutions.
              </h3>

              <p className="mt-6 leading-8 text-slate-600">
                I am Joyasree Bardhan, a Computer Science and
                Engineering graduate from United International
                University, Bangladesh.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                My academic experience includes software development,
                artificial intelligence-based projects, database
                management, and healthcare management systems.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                I am interested in learning new technologies,
                improving my technical abilities, and building
                creative solutions that make everyday tasks easier.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              {[
                {
                  icon: "🎓",
                  title: "Education",
                  description: "Computer Science & Engineering",
                  extra: "United International University",
                },
                {
                  icon: "💻",
                  title: "Development",
                  description: "Software and Application Development",
                },
                {
                  icon: "🎨",
                  title: "Design",
                  description: "UI/UX Design and Prototyping",
                },
                {
                  icon: "🤖",
                  title: "Technology",
                  description: "Artificial Intelligence and Intelligent Systems",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-purple-100 bg-[#F8F5FF] p-7 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="text-3xl">{item.icon}</div>

                  <h3 className="mt-4 font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>

                  {item.extra && (
                    <p className="mt-2 text-sm font-medium text-violet-600">
                      {item.extra}
                    </p>
                  )}
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>


      {/* ================= EDUCATION SECTION ================= */}

      <section
        id="education"
        className="bg-[#F8F5FF] px-6 py-24"
      >

        <div className="mx-auto max-w-5xl">

          <div className="mb-14 text-center">
            <p className="font-semibold uppercase tracking-widest text-violet-600">
              My academic background
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              Education
            </h2>
          </div>

          <div className="rounded-3xl border border-purple-100 bg-white p-8 shadow-sm md:p-10">

            <div className="flex flex-wrap items-start justify-between gap-4">

              <div>
                <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-violet-700">
                  Undergraduate Degree
                </span>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  Bachelor of Science in Computer Science & Engineering
                </h3>

                <p className="mt-3 font-semibold text-violet-600">
                  United International University
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Bangladesh
                </p>
              </div>

              <div className="text-4xl">🎓</div>

            </div>

            <div className="mt-7 border-t border-purple-100 pt-6">
              <p className="text-sm leading-7 text-slate-600">
                Academic background covering programming,
                software development, database systems,
                computer science fundamentals, and project development.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= SKILLS SECTION ================= */}

      <section id="skills" className="bg-white px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="font-semibold uppercase tracking-widest text-violet-600">
              What I work with
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              Technical Skills
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Technical knowledge, tools, and professional skills
              developed through academic learning and projects.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {skills.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-purple-100 bg-[#FCFAFF] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
                  {category.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {category.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">

                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-violet-700"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= PROJECTS SECTION ================= */}

      <section id="projects" className="bg-[#F8F5FF] px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="font-semibold uppercase tracking-widest text-violet-600">
              My academic work
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              Featured Projects
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Selected academic projects focused on software
              development and practical technology solutions.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">

            {projects.map((project) => (
              <article
                key={project.number}
                className="group rounded-2xl border border-purple-100 bg-white p-7 transition hover:-translate-y-2 hover:border-violet-200 hover:shadow-xl"
              >

                <div className="flex items-center justify-between">

                  <span className="text-sm font-bold text-violet-600">
                    PROJECT {project.number}
                  </span>

                  <span className="text-4xl">
                    {project.icon}
                  </span>

                </div>

                <h3 className="mt-7 text-xl font-bold leading-8 text-slate-900 transition group-hover:text-violet-600">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-purple-100 px-3 py-1.5 text-xs font-medium text-violet-700"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* ================= ACHIEVEMENTS SECTION ================= */}

      <section
        id="achievements"
        className="bg-white px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="font-semibold uppercase tracking-widest text-violet-600">
              Milestones & Recognition
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              Achievements
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-violet-600" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {achievements.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-purple-100 bg-[#F8F5FF] p-7 transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= CONTACT SECTION ================= */}

      <section
        id="contact"
        className="bg-gradient-to-br from-[#F3ECFF] via-[#F8F5FF] to-[#E9DFFF] px-6 py-24"
      >

        <div className="mx-auto max-w-4xl text-center">

          <p className="font-semibold uppercase tracking-widest text-violet-600">
            Get in touch
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Let's Connect
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600">
            I am interested in learning opportunities,
            software development, creative technology projects,
            and professional collaboration.
            Feel free to connect with me.
          </p>

          <a
  href="mailto:jbardhan221189@bscse.uiu.ac.bd"
  className="mt-8 inline-flex rounded-full bg-violet-600 px-8 py-4 font-semibold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1 hover:bg-violet-700"
>
  Send Me an Email →
</a>

<p className="mt-5 text-slate-600">
  jbardhan221189@bscse.uiu.ac.bd
</p>

        </div>
      </section>


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-purple-100 bg-slate-950 px-6 py-8 text-white">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <div>
            <p className="text-xl font-bold">
              Joyasree<span className="text-violet-400">.</span>
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Computer Science Graduate
            </p>
          </div>

          <p className="text-sm text-slate-400">
            © 2026 Joyasree Bardhan. All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}
