import React from 'react';

export default function AboutUs() {
  return (
    <div className="bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-32 pb-20">
        {/* Background video/image */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-30"
            src="/logos/Cinematic_Liquid_Metal_Wave_Animation.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative max-w-3xl text-center z-10">
          <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-6">
            About intelio
          </p>
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">
            Built by operators, for operators
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            We architect the systems that become your competitive moat. Not advisory. Not consulting. Real infrastructure that creates lasting advantage.
          </p>
        </div>
      </section>

      {/* POSITIONING SECTION */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white text-black border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Core Statement */}
            <div>
              <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-8">
                Who We Are
              </p>
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight text-black">
                Intelligence architects.
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We architect, build, and operate custom software and AI systems designed specifically for how you work. Not generic platforms forced into your workflow. Purpose-built systems embedded into your operations that become impossible to replace.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our philosophy: integrate rather than create, elevate rather than replace. The systems we build don't just solve problems—they create competitive moats.
              </p>
            </div>

            {/* Right: Three Core Principles */}
            <div className="space-y-8">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-medium mb-2 text-black">Implementation Over Advisory</h3>
                <p className="text-gray-600">
                  We don't recommend. We build and operate. You get working systems, not PowerPoint decks.
                </p>
              </div>
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-medium mb-2 text-black">Defensible Architecture</h3>
                <p className="text-gray-600">
                  High-switching-cost systems you own. Built for long-term ownership, not vendor lock-in.
                </p>
              </div>
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-medium mb-2 text-black">Operational Dependency</h3>
                <p className="text-gray-600">
                  Systems so integrated into how you work that they become your operational foundation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER STORY - CINEMATIC APPROACH */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-gray-900 bg-opacity-50 border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-6">
              How It Started
            </p>
            <h2 className="text-4xl md:text-5xl font-light leading-tight text-white">
              An operator's answer to an operator's problem
            </h2>
          </div>

          {/* Three Chapter Journey */}
          <div className="space-y-20">
            {/* Chapter 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
                  Chapter 01
                </span>
                <h3 className="text-3xl md:text-4xl font-light my-6 text-white">
                  The Constraint
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Running a business means you're everywhere at once. Customer success. Operations. Finance. Strategy. All of it lands on your desk.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  You can optimize, delegate, and automate—but you're still the bottleneck. And there are only so many hours.
                </p>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 h-80 rounded-lg border border-white/10 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="text-6xl mb-4">⏱</div>
                  <p className="text-sm">Time is your scarcest resource</p>
                </div>
              </div>
            </div>

            {/* Chapter 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-last">
                <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
                  Chapter 02
                </span>
                <h3 className="text-3xl md:text-4xl font-light my-6 text-white">
                  The Build
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  I didn't hire more people. I started building. Custom AI integrated into workflows. Automation orchestrating repetitive processes. Systems connecting what was disconnected.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  I built my way out of the constraint.
                </p>
              </div>
              <div className="md:order-first bg-gradient-to-br from-blue-500/10 to-indigo-500/10 h-80 rounded-lg border border-white/10 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="text-6xl mb-4">⚙</div>
                  <p className="text-sm">Systems became the solution</p>
                </div>
              </div>
            </div>

            {/* Chapter 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
                  Chapter 03
                </span>
                <h3 className="text-3xl md:text-4xl font-light my-6 text-white">
                  The Advantage
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  The result wasn't just more time. It was competitive advantage. Systems so integrated into how I worked that they became impossible to replicate.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  The systems became my moat. And I realized every operator faced the same problem.
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 h-80 rounded-lg border border-white/10 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="text-6xl mb-4">💎</div>
                  <p className="text-sm">Systems as competitive moat</p>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy Block */}
          <div className="mt-24 pt-20 border-t border-white/10">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-8">
              The Philosophy
            </p>
            <h3 className="text-3xl md:text-4xl font-light mb-12 text-white">
              Why Intelio Exists
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-cyan-500/50 transition-colors">
                <div className="text-3xl font-light text-cyan-400 mb-4">Build</div>
                <h4 className="text-lg font-medium text-white mb-3">
                  Systems, not advice
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We architect, build, and operate real systems embedded in your operations. Not recommendations. Not consulting. Actual intelligence you own.
                </p>
              </div>

              <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-cyan-500/50 transition-colors">
                <div className="text-3xl font-light text-cyan-400 mb-4">Think</div>
                <h4 className="text-lg font-medium text-white mb-3">
                  Like operators
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We understand the constraints. We know time is your scarcest resource. We build for defensibility, not just functionality.
                </p>
              </div>

              <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-cyan-500/50 transition-colors">
                <div className="text-3xl font-light text-cyan-400 mb-4">Prove</div>
                <h4 className="text-lg font-medium text-white mb-3">
                  Through results
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We eat our own cooking. We built these systems for ourselves first. That's why they work—because they had to.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE SECTION */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white text-black border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-8">
            Our Philosophy
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-16 leading-tight text-black">
            We believe in building differently
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Belief 1 */}
            <div>
              <h3 className="text-xl font-medium text-black mb-4 flex items-start gap-3">
                <span className="text-cyan-500 text-2xl">→</span>
                Systems Beat Advice
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Advisory firms talk about problems. We solve them by building integrated systems that become your operational foundation. You don't need consulting—you need working infrastructure.
              </p>
            </div>

            {/* Belief 2 */}
            <div>
              <h3 className="text-xl font-medium text-black mb-4 flex items-start gap-3">
                <span className="text-cyan-500 text-2xl">→</span>
                Ownership Creates Loyalty
              </h3>
              <p className="text-gray-600 leading-relaxed">
                You own the systems we build. No subscriptions. No vendor lock-in. Long-term ownership means you're never trapped by your technology provider.
              </p>
            </div>

            {/* Belief 3 */}
            <div>
              <h3 className="text-xl font-medium text-black mb-4 flex items-start gap-3">
                <span className="text-cyan-500 text-2xl">→</span>
                Integration Beats Creation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Most firms want to build from scratch. We integrate with what you have, connect disparate systems, and elevate your existing infrastructure. That creates faster ROI.
              </p>
            </div>

            {/* Belief 4 */}
            <div>
              <h3 className="text-xl font-medium text-black mb-4 flex items-start gap-3">
                <span className="text-cyan-500 text-2xl">→</span>
                Thinking Deserves Premium Pricing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                If a buyer isn't paying for thinking, they don't get to hear about intelligence. Premium pricing filters for serious operators who value strategic work, not tire-kickers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-gray-900 bg-opacity-50 border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-8">
            Proven Track Record
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-white">
            Built systems across industries
          </h2>
          <p className="text-gray-400 text-lg mb-16">
            We've worked with 50+ firms across these sectors, building purpose-built systems that eliminate friction and create competitive advantage.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-white/10 rounded-lg p-8 hover:border-cyan-500/50 transition-colors">
              <div className="text-4xl mb-4">BLDG</div>
              <h3 className="text-lg font-medium text-white mb-2">
                Commercial Real Estate
              </h3>
              <p className="text-gray-400 text-sm">
                Deal sourcing, underwriting automation, portfolio management, investor reporting
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-8 hover:border-cyan-500/50 transition-colors">
              <div className="text-4xl mb-4">HC</div>
              <h3 className="text-lg font-medium text-white mb-2">
                Healthcare
              </h3>
              <p className="text-gray-400 text-sm">
                Patient management, care coordination, operational workflows, scheduling automation
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-8 hover:border-cyan-500/50 transition-colors">
              <div className="text-4xl mb-4">CS</div>
              <h3 className="text-lg font-medium text-white mb-2">
                Professional Services
              </h3>
              <p className="text-gray-400 text-sm">
                Client management, project delivery, capacity planning, financial operations
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-8 hover:border-cyan-500/50 transition-colors">
              <div className="text-4xl mb-4">CONST</div>
              <h3 className="text-lg font-medium text-white mb-2">
                Construction
              </h3>
              <p className="text-gray-400 text-sm">
                Project management, field operations, scheduling, supply chain integration
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-8 hover:border-cyan-500/50 transition-colors">
              <div className="text-4xl mb-4">PROP</div>
              <h3 className="text-lg font-medium text-white mb-2">
                Property Management
              </h3>
              <p className="text-gray-400 text-sm">
                Tenant operations, maintenance workflows, financial management, reporting automation
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-8 hover:border-cyan-500/50 transition-colors">
              <div className="text-4xl mb-4">FIN</div>
              <h3 className="text-lg font-medium text-white mb-2">
                Financial Services
              </h3>
              <p className="text-gray-400 text-sm">
                Reporting automation, data consolidation, client management, operational efficiency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK SECTION */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white text-black border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-8">
            Our Approach
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-black">
            There's no shortcut
          </h2>
          <p className="text-gray-600 text-lg mb-16">
            It takes strategy, technology, and people moving together.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Strategy */}
            <div className="space-y-6">
              <div 
                className="h-48 rounded-lg border border-cyan-500/30 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/logos/cool-intelio-image-9.jpg')`,
                }}
              />
              <h3 className="text-2xl font-light text-black">
                Strategy that reimagines
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We help you reimagine business models to ensure technology serves your biggest opportunities—not the other way around.
              </p>
            </div>

            {/* Technology */}
            <div className="space-y-6">
              <div 
                className="h-48 rounded-lg border border-blue-500/30 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/logos/intelio-cool-image-7.jpg')`,
                }}
              />
              <h3 className="text-2xl font-light text-black">
                Technology that delivers
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We build and embed the latest AI and tech solutions with your teams, driving value, speed, and measurable results.
              </p>
            </div>

            {/* Change */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 h-48 rounded-lg border border-indigo-500/30" />
              <h3 className="text-2xl font-light text-black">
                Change that scales
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We partner with you to build skills and momentum that drive lasting impact across your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS SECTION */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-gray-900 bg-opacity-50 border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-8">
            How We Partner
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-white">
            Flexibility built in
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Model 1 */}
            <div className="border border-white/10 rounded-lg p-8 bg-white/2">
              <h3 className="text-xl font-medium text-white mb-4">
                Build + Maintain
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                We architect and build your systems, then transfer ownership to your team. You maintain with our support as needed.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex gap-2">
                  <span className="text-cyan-400">+</span>
                  <span>Custom system development</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">+</span>
                  <span>Knowledge transfer</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">+</span>
                  <span>Ongoing support on retainer</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">+</span>
                  <span>Full system ownership</span>
                </li>
              </ul>
            </div>

            {/* Model 2 */}
            <div className="border border-cyan-500/50 rounded-lg p-8 bg-cyan-500/5">
              <h3 className="text-xl font-medium text-white mb-4">
                Build + Operate
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                We build and operate your systems, handling infrastructure, updates, and maintenance. You focus on strategy.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex gap-2">
                  <span className="text-cyan-400">+</span>
                  <span>Custom system development</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">+</span>
                  <span>Full operational management</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">+</span>
                  <span>Continuous updates</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">+</span>
                  <span>24/7 system monitoring</span>
                </li>
              </ul>
            </div>

            {/* Model 3 */}
            <div className="border border-white/10 rounded-lg p-8 bg-white/2">
              <h3 className="text-xl font-medium text-white mb-4">
                Managed Systems
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                We take full responsibility for your tech stack—architecture through operations. Enterprise-grade without building a tech team.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex gap-2">
                  <span className="text-cyan-400">+</span>
                  <span>End-to-end management</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">+</span>
                  <span>Strategic roadmap</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">+</span>
                  <span>Dedicated operations team</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">+</span>
                  <span>Performance optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white text-black border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-black">
            Ready to build something exceptional?
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Let's talk about the systems that will become your competitive advantage. We'll explore your specific challenges, map the opportunity, and show you what's possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors"
            >
              Get in touch
            </a>
            <a
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-3 border border-black text-black font-medium rounded hover:bg-gray-50 transition-colors"
            >
              See our work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

