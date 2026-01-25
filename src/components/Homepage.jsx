import React from 'react';

export default function Homepage() {
  return (
    <div className="bg-white">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-32 pb-20 bg-black">
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
        
        <div className="relative max-w-3xl text-center z-10">
          <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-6">
            Tech & AI at intelio
          </p>
          <h1 className="text-5xl md:text-7xl font-light leading-tight text-white mb-8">
            Intelligence that moves everything
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            There's software. Then there's intelligence that reimagines and rewires organizations—powered by people, built with AI, and proven to create lasting value.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-white text-black font-medium rounded hover:bg-gray-100 transition-colors">
              Watch video
            </button>
            <button className="px-8 py-3 border border-white/30 text-white font-medium rounded hover:border-white/50 transition-colors">
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: POSITIONING */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white text-black border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-8">Who We Are</p>
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">Intelligence architects.</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We architect, build, and operate custom software and AI systems designed specifically for how you work. Not generic platforms forced into your workflow. Purpose-built systems embedded into your operations that become impossible to replace.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our philosophy: integrate rather than create, elevate rather than replace. The systems we build don't just solve problems—they create competitive moats.
              </p>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-medium text-black mb-2">Integration Over Creation</h3>
                <p className="text-gray-600">We connect what you have, elevate what exists. Faster ROI, lower risk.</p>
              </div>
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-medium text-black mb-2">Implementation Over Advisory</h3>
                <p className="text-gray-600">We don't recommend. We build, operate, and deliver working systems.</p>
              </div>
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-medium text-black mb-2">Defensible Architecture</h3>
                <p className="text-gray-600">You own it. No lock-in. Built for long-term ownership and competitive advantage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED CAPABILITIES */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-8">Featured Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-light mb-16">AI built for your business</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Custom AI Development", desc: "Purpose-built AI systems engineered for your specific workflows and competitive advantage." },
              { title: "System Integration", desc: "Connect disparate systems into a unified platform that operates as one cohesive infrastructure." },
              { title: "Workflow Automation", desc: "Intelligent automation that removes friction from your operations and accelerates decision-making." },
              { title: "Enterprise Architecture", desc: "Strategic system design that scales with your business and evolves with your needs." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-lg hover:border-cyan-500 hover:bg-cyan-500/5 transition-all">
                <div className="w-full h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg mb-6"></div>
                <h3 className="text-lg font-medium text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: INDUSTRIES */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-8">Proven Track Record</p>
          <h2 className="text-4xl md:text-5xl font-light mb-6">Built systems across industries</h2>
          <p className="text-gray-400 text-lg mb-16">We've worked with 50+ firms across these sectors, building purpose-built systems that eliminate friction and create competitive advantage.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Commercial Real Estate", items: ["Deal sourcing & pipeline management", "Underwriting automation", "Portfolio intelligence"] },
              { name: "Healthcare", items: ["Patient management systems", "Care coordination workflows", "Scheduling optimization"] },
              { name: "Professional Services", items: ["Project delivery systems", "Capacity planning", "Financial operations"] },
              { name: "Construction", items: ["Project management automation", "Field operations tracking", "Schedule optimization"] },
              { name: "Property Management", items: ["Tenant operations management", "Maintenance workflow automation", "Financial reporting systems"] },
              { name: "Financial Services", items: ["Automated reporting", "Data consolidation & analytics", "Compliance management"] }
            ].map((industry, idx) => (
              <div key={idx} className="border border-white/10 rounded-lg p-8 bg-white/2 hover:border-cyan-500 hover:bg-cyan-500/5 transition-all">
                <h3 className="text-lg font-medium text-white mb-4">{industry.name}</h3>
                <ul className="space-y-2">
                  {industry.items.map((item, i) => (
                    <li key={i} className="text-gray-400 text-sm pb-2 border-b border-white/5 last:border-0">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: BUILT BY OPERATORS, FOR OPERATORS */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-black to-black/95 text-white">
        <div className="max-w-5xl mx-auto">
          {/* Intro */}
          <div className="text-center mb-24">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-8">Our Philosophy</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6">Built by operators, for operators</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We started as operators facing the same constraints you do. We built our way out. Now we build systems for operators who refuse to compromise.
            </p>
          </div>

          {/* Philosophy Cards: Build, Think, Prove */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              { label: "Build", title: "Systems, not advice", desc: "We architect, build, and operate real systems embedded in your operations. Not recommendations. Not consulting. Actual intelligence you own." },
              { label: "Think", title: "Like operators", desc: "We understand the constraints. We know time is your scarcest resource. We build for defensibility, not just functionality." },
              { label: "Prove", title: "Through results", desc: "We eat our own cooking. We built these systems for ourselves first. That's why they work—because they had to." }
            ].map((card, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-lg hover:border-cyan-500 hover:bg-cyan-500/5 transition-all">
                <div className="text-xl font-light text-cyan-400 mb-3">{card.label}</div>
                <h3 className="text-lg font-medium text-white mb-4">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Beliefs Section */}
          <div className="mb-16">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase text-center mb-6">We Believe In Building Differently</p>
            <h3 className="text-3xl font-light text-center mb-16">Here's what we stand for</h3>
            
            <div className="grid md:grid-cols-2 gap-12">
              {[
                { title: "Systems Beat Advice", desc: "Advisory firms talk about problems. We solve them by building integrated systems that become your operational foundation. You don't need consulting—you need working infrastructure." },
                { title: "Ownership Creates Loyalty", desc: "You own the systems we build. No subscriptions. No vendor lock-in. Long-term ownership means you're never trapped by your technology provider." },
                { title: "Integration Beats Creation", desc: "Most firms want to build from scratch. We integrate with what you have, connect disparate systems, and elevate your existing infrastructure. That creates faster ROI." },
                { title: "Thinking Deserves Premium Pricing", desc: "If a buyer isn't paying for thinking, they don't get to hear about intelligence. Premium pricing filters for serious operators who value strategic work, not tire-kickers." }
              ].map((belief, idx) => (
                <div key={idx}>
                  <h4 className="text-lg font-medium text-white mb-3 flex items-center gap-3">
                    <span className="text-cyan-400 text-2xl">→</span>
                    {belief.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{belief.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR APPROACH */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white text-black border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-8">Our Approach</p>
          <h2 className="text-4xl md:text-5xl font-light mb-4">There's no shortcut</h2>
          <p className="text-gray-600 text-lg mb-16">It takes strategy, technology, and people moving together.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Strategy that reimagines", desc: "We help you reimagine business models to ensure technology serves your biggest opportunities—not the other way around." },
              { title: "Technology that delivers", desc: "We build and embed the latest AI and tech solutions with your teams, driving value, speed, and measurable results." },
              { title: "Change that scales", desc: "We partner with you to build the skills and momentum that drive lasting impact across your organization." }
            ].map((approach, idx) => (
              <div key={idx}>
                <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg mb-6"></div>
                <h3 className="text-xl font-light text-black mb-4">{approach.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{approach.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CASE STUDIES */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-8">Tech & AI Case Studies</p>
          <h2 className="text-4xl md:text-5xl font-light mb-16">Ambition in action</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { label: "Commercial Real Estate", title: "Regional investment firm unifies deal flow and accelerates evaluation by 67%", desc: "Built unified deal intelligence platform connecting broker networks and automating underwriting" },
              { label: "Construction", title: "Construction firm automates project handoffs—reducing delays and rework", desc: "Implemented intelligent workflow automation across field operations and project coordination" },
              { label: "Professional Services", title: "Advisory firm connects pipeline to capacity—delivering 6-week forward visibility", desc: "Created capacity intelligence system linking project pipeline to resource availability" },
              { label: "Financial Services", title: "Financial services firm doubles reporting speed with automated data consolidation", desc: "Built automated reporting infrastructure consolidating data across multiple systems" }
            ].map((study, idx) => (
              <div key={idx} className="h-72 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 flex flex-col justify-end hover:translate-y-[-4px] transition-transform">
                <p className="text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-2">{study.label}</p>
                <h3 className="text-lg font-medium text-white mb-3">{study.title}</h3>
                <p className="text-gray-400 text-sm">{study.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a href="#" className="px-6 py-2 border border-white/30 text-white font-medium rounded hover:border-white/50 transition-colors inline-block">
              See all case studies
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 8: ENGAGEMENT MODELS */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-8">How We Partner</p>
          <h2 className="text-4xl md:text-5xl font-light mb-16">Flexible engagement models</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Build + Maintain", featured: false, benefits: ["Custom system development", "Knowledge transfer & training", "Ongoing support on retainer", "Full system ownership"] },
              { title: "Build + Operate", featured: true, benefits: ["Custom system development", "Full operational management", "Continuous updates & improvements", "24/7 system monitoring"] },
              { title: "Managed Systems", featured: false, benefits: ["End-to-end system management", "Strategic technology roadmap", "Dedicated operations team", "Performance optimization"] }
            ].map((model, idx) => (
              <div key={idx} className={`p-8 rounded-lg border transition-all ${model.featured ? 'border-cyan-500 bg-cyan-500/5' : 'border-white/10 bg-white/2'}`}>
                <h3 className="text-lg font-medium text-white mb-4">{model.title}</h3>
                <p className="text-gray-400 text-sm mb-6">
                  {model.title === "Build + Maintain" && "We architect and build your systems, then transfer ownership. You maintain with our support as needed."}
                  {model.title === "Build + Operate" && "We build and operate your systems. You focus on strategy while we handle infrastructure and maintenance."}
                  {model.title === "Managed Systems" && "We take full responsibility for your tech stack. Enterprise-grade systems without building a tech team."}
                </p>
                <div className="space-y-3">
                  {model.benefits.map((benefit, i) => (
                    <div key={i} className="flex gap-3 text-sm text-gray-400">
                      <span className="text-cyan-400 font-bold">+</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white text-black border-t border-gray-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Ready to build something exceptional?</h2>
          <p className="text-gray-600 text-lg mb-12 leading-relaxed">
            Let's talk about the systems that will become your competitive advantage. We'll explore your specific challenges, map the opportunity, and show you what's possible.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors">
              Get in touch
            </button>
            <button className="px-8 py-3 border border-black text-black font-medium rounded hover:bg-gray-50 transition-colors">
              See our work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

