
{/* ================= HERO SECTION ================= */}

<section
  id="home"
  className="relative overflow-hidden bg-gradient-to-br from-[#F3ECFF] via-[#F8F5FF] to-[#E9DFFF] py-20 md:py-28"
>
  <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2 lg:px-8">

    {/* Left Side - Introduction */}
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
        A Computer Science and Engineering graduate from
        United International University with a passion for
        Artificial Intelligence, Machine Learning, Software
        Development, and innovative technology solutions.
      </p>

      <p className="max-w-xl text-base leading-7 text-slate-600">
        Interested in developing intelligent applications,
        healthcare management systems, and AI-powered solutions
        that solve real-world problems.
      </p>

      {/* Action Buttons */}
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

      {/* Academic Highlights */}
      <div className="flex flex-wrap gap-3 pt-4">

        <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-violet-700 shadow-sm">
          🎓 CSE Graduate
        </span>

        <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-violet-700 shadow-sm">
          🤖 AI & Machine Learning
        </span>

        <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-violet-700 shadow-sm">
          💻 Software Development
        </span>

      </div>

    </div>

    {/* Right Side - Profile Image */}
    <div className="flex justify-center">

      <div className="relative flex h-80 w-80 items-center justify-center rounded-[3rem] bg-gradient-to-br from-purple-200 via-violet-100 to-indigo-200 shadow-2xl shadow-purple-200 md:h-[420px] md:w-[420px]">

        {/* Profile Picture */}
        <div className="relative h-64 w-64 overflow-hidden rounded-full border-8 border-[#F8F5FF] bg-purple-100 shadow-xl md:h-80 md:w-80">

          <Image
            src="/Joyasree.jpg"
            alt="Joyasree Bardhan"
            fill
            priority
            sizes="(max-width: 768px) 256px, 320px"
            className="object-cover object-top"
          />

        </div>

        {/* AI & Technology Card */}
        <div className="absolute -bottom-5 -left-5 rounded-2xl border border-purple-100 bg-[#FCFAFF] p-4 shadow-lg">

          <p className="text-sm font-bold text-slate-800">
            AI & Technology
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Innovation & Development
          </p>

        </div>

        {/* Education Card */}
        <div className="absolute -right-5 top-10 rounded-2xl border border-purple-100 bg-[#FCFAFF] p-4 shadow-lg">

          <p className="text-sm font-bold text-violet-600">
            CSE Graduate
          </p>

          <p className="mt-1 text-xs text-slate-500">
            United International University
          </p>

        </div>

      </div>

    </div>

  </div>
</section>
