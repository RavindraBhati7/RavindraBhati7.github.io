"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6">
        <div className="bg-white/4 p-8 rounded-2xl glass max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold">Let's build something exceptional</h2>
          <p className="mt-3 text-slate-300">Open to full-time roles, freelance projects, and technical collaborations.</p>
          <div className="mt-6 flex justify-center gap-3">
            <a className="btn-primary" href="mailto:bhati.ravindra919@gmail.com">Email Me</a>
            <a className="btn-ghost" href="/resume.pdf" target="_blank">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}
