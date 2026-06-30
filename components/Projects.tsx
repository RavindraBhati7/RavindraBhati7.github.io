"use client";

export default function Projects() {
  const projects = [
    {
      title: 'Digital Banking Platform',
      meta: 'Enterprise banking solution — 1M+ users',
      desc: 'Secure banking app with GraphQL, SwiftUI, AI-powered engagement.',
      tags: ['Swift', 'SwiftUI', 'GraphQL']
    },
    {
      title: 'Apple Planogram',
      meta: 'Retail merchandising & visualization',
      desc: 'Drag-and-drop planogram with SceneKit visualizations.',
      tags: ['Swift', 'SceneKit', 'Enterprise']
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold">Selected work</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="p-6 bg-white/4 rounded-2xl glass">
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="text-slate-400 mt-1">{p.meta}</p>
              <p className="mt-3 text-slate-300">{p.desc}</p>
              <div className="flex gap-2 mt-4 flex-wrap">
                {p.tags.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-slate-800/60 text-sm">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
