"use client";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white/4 p-8 rounded-2xl glass">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-4 text-slate-300">
            Ravindra Bhati is a Senior iOS Software Engineer with more than eight years of experience designing, architecting,
            developing, and deploying enterprise-scale iOS applications. He has worked with Backbase, Apple (through Wipro),
            Capgemini, and Flair IT Solutions. Specializes in Swift, SwiftUI, UIKit, Clean Architecture, Mobile Security,
            and Performance Optimization.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium">Education</h3>
              <p className="text-slate-300 mt-2">Bachelor of Engineering — Computer Science Engineering<br/>Patel College of Science & Technology, Indore (2013–2017)</p>
            </div>

            <div>
              <h3 className="font-medium">Location</h3>
              <p className="text-slate-300 mt-2">Bangalore, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
