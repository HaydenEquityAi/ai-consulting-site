export default function Homepage() {
  return (
    <div className="bg-white text-black">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-32 pb-20">
        {/* Background video */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            src="/logos/Cinematic_Liquid_Metal_Wave_Animation.mp4"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative max-w-3xl text-center z-10">
          <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-6">
            Tech & AI at intelio
          </p>
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 text-white">
            intelligence that moves business.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            There's software. Then there's intelligence that reimagines and rewires organizations - powered by people, built with AI, and proven to create lasting value.
          </p>
        </div>
      </section>

      {/* POSITIONING SECTION */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white text-black border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Core Statement */}
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight text-black">
                intelio translates business problems into intelligent solutions—creating meaningful <span className="text-cyan-500">leverage</span>.
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Intelio architects, builds, and operates the custom software and AI systems that create sustainable leverage. We build purpose-built platforms from the ground up, architect intelligent automation across your operations, integrate disparate systems with measurable leverage in mind, and maintain the infrastructure we create.
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

      {/* FEATURED CAPABILITIES SECTION */}
      <section id="featured-capabilities" className="py-24 md:py-32 px-6 md:px-12 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-8">Featured Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-light mb-16">AI built for your business</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                title: "Custom AI Development", 
                desc: "Purpose-built AI systems engineered for your specific workflows and competitive advantage.",
                video: "/logos/Abstract_Data_Visualization_Video_Generation.mp4",
                link: "/custom-ai-development"
              },
              { 
                title: "System Integration", 
                desc: "Connect disparate systems into a unified platform that operates as one cohesive infrastructure.",
                video: "/logos/Abstract_Binary_Code_Visualization.mp4",
                link: "/ai-integration-automation/system-integration"
              },
              { 
                title: "Workflow Automation", 
                desc: "Intelligent automation that removes friction from your operations and accelerates decision-making.",
                video: "/videos/system-integration-hero.mp4",
                link: "/ai-integration-automation/workflow-automation"
              },
              { 
                title: "Enterprise Architecture", 
                desc: "Strategic system design that scales with your business and evolves with your needs.",
                video: "/logos/Cinematic_Cyan_Light_Wave_Video_Generation (1).mp4",
                link: "/custom-ai-development/custom-enterprise-builds"
              }
            ].map((capability, idx) => (
              <a 
                key={idx} 
                href={capability.link}
                className="relative h-80 rounded-lg overflow-hidden group cursor-pointer transition-all hover:scale-105"
              >
                {/* Background Video */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110"
                >
                  <source src={capability.video} type="video/mp4" />
                </video>
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all" />
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8 z-10">
                  <h3 className="text-2xl font-medium text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4">
                    {capability.desc}
                  </p>
                  <div className="text-cyan-400 font-medium text-sm flex items-center gap-2">
                    Learn more →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-8">Proven Track Record</p>
          <h2 className="text-4xl md:text-5xl font-light mb-6">Built systems across industries</h2>
          <p className="text-gray-400 text-lg mb-16">We've worked with 50+ firms across these sectors, building purpose-built systems that eliminate friction and create competitive advantage.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Commercial Real Estate",
                abbr: "BLDG",
                items: ["Deal sourcing & pipeline management", "Underwriting automation", "Portfolio intelligence"],
                image: "/logos/intelio-cool-pic-capital.png",
                link: "/industries/commercial-real-estate"
              },
              { 
                name: "Healthcare",
                abbr: "HC",
                items: ["Patient management systems", "Care coordination workflows", "Scheduling optimization"],
                image: "/logos/intelio-healthcare-image-header.webp",
                link: "/industries/healthcare"
              },
              { 
                name: "Professional Services",
                abbr: "CS",
                items: ["Project delivery systems", "Capacity planning", "Financial operations"],
                image: "/logos/intelio-energy-image-1.webp",
                link: "/industries/professional-services"
              },
              { 
                name: "Construction",
                abbr: "CONST",
                items: ["Project management automation", "Field operations tracking", "Schedule optimization"],
                image: "/logos/intelio-construction-image.webp",
                link: "/industries/construction"
              },
              { 
                name: "Property Management",
                abbr: "PROP",
                items: ["Tenant operations management", "Maintenance workflow automation", "Financial reporting systems"],
                image: "/logos/intelio-website-pic-dashboard.webp",
                link: "/industries/property-management"
              },
              { 
                name: "Financial Services",
                abbr: "FIN",
                items: ["Automated reporting", "Data consolidation & analytics", "Compliance management"],
                image: "/logos/intelio-financial-services-1.webp",
                link: "/industries/financial-services"
              }
            ].map((industry, idx) => (
              <a 
                key={idx} 
                href={industry.link}
                className="relative h-96 rounded-lg overflow-hidden group cursor-pointer transition-all hover:scale-105"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${industry.image}')`,
                  }}
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all" />
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8 z-10">
                  <div>
                    <div className="text-4xl font-light text-cyan-400 mb-2">{industry.abbr}</div>
                    <h3 className="text-2xl font-medium text-white group-hover:text-cyan-400 transition-colors">
                      {industry.name}
                    </h3>
                  </div>
                  
                  <div>
                    <ul className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity mb-4">
                      {industry.items.map((item, i) => (
                        <li key={i} className="text-gray-300 text-sm">{item}</li>
                      ))}
                    </ul>
                    <div className="text-cyan-400 font-medium text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more →
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT BY OPERATORS SECTION */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-black border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-8">
            Our Philosophy
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-white">
            Built by operators, for operators
          </h2>

          {/* Philosophy Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
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

          {/* Beliefs */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-medium text-white mb-4 flex items-start gap-3">
                <span className="text-cyan-500 text-2xl">→</span>
                Systems Beat Advice
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Advisory firms talk about problems. We solve them by building integrated systems that become your operational foundation. You don't need consulting—you need working infrastructure.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-white mb-4 flex items-start gap-3">
                <span className="text-cyan-500 text-2xl">→</span>
                Ownership Creates Loyalty
              </h3>
              <p className="text-gray-400 leading-relaxed">
                You own the systems we build. No subscriptions. No vendor lock-in. Long-term ownership means you're never trapped by your technology provider.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-white mb-4 flex items-start gap-3">
                <span className="text-cyan-500 text-2xl">→</span>
                Integration Beats Creation
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Most firms want to build from scratch. We integrate with what you have, connect disparate systems, and elevate your existing infrastructure. That creates faster ROI.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-white mb-4 flex items-start gap-3">
                <span className="text-cyan-500 text-2xl">→</span>
                Thinking Deserves Premium Pricing
              </h3>
              <p className="text-gray-400 leading-relaxed">
                If a buyer isn't paying for thinking, they don't get to hear about intelligence. Premium pricing filters for serious operators who value strategic work, not tire-kickers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH SECTION */}
      <section id="our-approach" className="py-24 md:py-32 px-6 md:px-12 bg-white text-black border-t border-gray-200">
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
              <div 
                className="h-48 rounded-lg border border-indigo-500/30 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/logos/cool-intelio-image-11.jpg')`,
                }}
              />
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

      {/* CASE STUDIES SECTION */}
      <section id="case-studies" className="py-24 md:py-32 px-6 md:px-12 bg-black border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-8">
            Success Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-white">
            Real outcomes from firms we work with
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <a href="/case-studies" className="border border-white/10 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-colors bg-white/5">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/logos/intelio-real-estate-1.webp')`,
                }}
              />
              <div className="p-8">
                <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">CRE FIRM</span>
                <h3 className="text-xl font-medium text-white mb-3 mt-2">
                  Regional investment firm unifies deal flow and accelerates evaluation by 67%
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Built a unified deal intelligence platform that connected broker networks, automated underwriting workflows, and provided real-time pipeline visibility.
                </p>
                <div className="mt-4 text-cyan-400 text-sm font-medium">Read case study →</div>
              </div>
            </a>

            {/* Case Study 2 */}
            <a href="/case-studies" className="border border-white/10 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-colors bg-white/5">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/logos/intelio-healthcare-2.webp')`,
                }}
              />
              <div className="p-8">
                <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">HEALTHCARE</span>
                <h3 className="text-xl font-medium text-white mb-3 mt-2">
                  Healthcare organization reduces patient wait times by 45%
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Implemented intelligent scheduling and care coordination system that optimized patient flow and eliminated bottlenecks.
                </p>
                <div className="mt-4 text-cyan-400 text-sm font-medium">Read case study →</div>
              </div>
            </a>

            {/* Case Study 3 */}
            <a href="/case-studies" className="border border-white/10 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-colors bg-white/5">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/logos/cool-intelio-image-12.jpg')`,
                }}
              />
              <div className="p-8">
                <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">PROFESSIONAL SERVICES</span>
                <h3 className="text-xl font-medium text-white mb-3 mt-2">
                  Professional services firm improves project profitability by 32%
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Deployed resource optimization and project delivery platform that tracked utilization, forecasted capacity, and automated billing.
                </p>
                <div className="mt-4 text-cyan-400 text-sm font-medium">Read case study →</div>
              </div>
            </a>

            {/* Case Study 4 */}
            <a href="/case-studies" className="border border-white/10 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-colors bg-white/5">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/logos/intelio-real-estate-2.webp')`,
                }}
              />
              <div className="p-8">
                <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">CONSTRUCTION</span>
                <h3 className="text-xl font-medium text-white mb-3 mt-2">
                  Construction company eliminates scheduling delays and improves on-time delivery
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Built integrated project management and field operations system that coordinated crews, tracked materials, and automated reporting.
                </p>
                <div className="mt-4 text-cyan-400 text-sm font-medium">Read case study →</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS SECTION */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white text-black border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-8">
            How We Partner
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-black">
            Flexibility built in
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Model 1 */}
            <div className="border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-medium text-black mb-4">
                Build + Maintain
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                We architect and build your systems, then transfer ownership to your team. You maintain with our support as needed.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-cyan-500">+</span>
                  <span>Custom system development</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-500">+</span>
                  <span>Knowledge transfer</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-500">+</span>
                  <span>Ongoing support on retainer</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-500">+</span>
                  <span>Full system ownership</span>
                </li>
              </ul>
            </div>

            {/* Model 2 */}
            <div className="border border-cyan-500/50 rounded-lg p-8 bg-cyan-500/5">
              <h3 className="text-xl font-medium text-black mb-4">
                Build + Operate
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                We build and operate your systems, handling infrastructure, updates, and maintenance. You focus on strategy.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-cyan-500">+</span>
                  <span>Custom system development</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-500">+</span>
                  <span>Full operational management</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-500">+</span>
                  <span>Continuous updates</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-500">+</span>
                  <span>24/7 system monitoring</span>
                </li>
              </ul>
            </div>

            {/* Model 3 */}
            <div className="border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-medium text-black mb-4">
                Managed Systems
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                We take full responsibility for your tech stack—architecture through operations. Enterprise-grade without building a tech team.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-cyan-500">+</span>
                  <span>End-to-end management</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-500">+</span>
                  <span>Strategic roadmap</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-500">+</span>
                  <span>Dedicated operations team</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-500">+</span>
                  <span>Performance optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-black border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
            Ready to build something exceptional?
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Let's talk about the systems that will become your competitive advantage. We'll explore your specific challenges, map the opportunity, and show you what's possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-black font-medium rounded hover:bg-gray-100 transition-colors"
            >
              Get in touch
            </a>
            <a
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-white font-medium rounded hover:bg-white/10 transition-colors"
            >
              See our work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
