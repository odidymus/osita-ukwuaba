const paperUrl = "https://dl.acm.org/doi/10.1145/3787109.3815284";

const research = [
  { index: "01", title: "Dependable neuromorphic computing", text: "Testing and reliability methods for spiking neural networks, with emphasis on fault models, temporal behavior, robustness, and resource-efficient validation.", tags: ["SNN testing", "Fault modeling", "Reliability"] },
  { index: "02", title: "Continual and adaptive SNNs", text: "Developing resilient neural systems that can continue learning reliably in changing and imperfect operating environments.", tags: ["Continual learning", "Adaptation", "Fault tolerance"] },
  { index: "03", title: "AI control and evaluations", text: "Studying how advanced AI systems can be evaluated and governed for dependable behavior in agentic environments.", tags: ["AI evaluations", "Reliability", "AI control"] },
];

const projects = [
  { status: "Current research", title: "Resource-optimized testing of SNNs", text: "Lightweight test generation and fault-injection methods designed to reduce the compute and memory cost of reliability evaluation while retaining sensitivity to neuron- and synapse-level faults." },
  { status: "Current research", title: "Fault-aware continual learning", text: "Improving the reliability of spiking neural networks that learn continually under hardware faults and changing conditions." },
  { status: "Research direction", title: "Practical AI control evaluation", text: "Evaluating approaches for maintaining dependable oversight and intervention as AI systems become more capable and autonomous." },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Osita Ukwuaba home"><span className="wordmark-mark">OU</span><span>Osita Ukwuaba</span></a>
      <nav aria-label="Primary navigation"><a href="#research">Research</a><a href="#publication">Publication</a><a href="#projects">Projects</a><a href="/cv">CV</a><a href="#contact">Contact</a></nav>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">PhD researcher · Rochester Institute of Technology</p>
        <h1>Building dependable AI systems for an imperfect world.</h1>
        <p className="hero-intro">I develop testing, evaluation, and fault-tolerance methods for intelligent systems—from neuromorphic hardware and spiking neural networks to advanced AI control.</p>
        <div className="hero-actions"><a className="button primary" href="#research">Explore my research</a><a className="button secondary" href="/cv">View CV <Arrow /></a></div>
      </div>
      <div className="signal-panel" aria-label="Research focus illustration">
        <div className="signal-grid" aria-hidden="true"><span className="node n1"/><span className="node n2"/><span className="node n3"/><span className="node n4"/><span className="node n5"/><span className="node n6"/><span className="trace t1"/><span className="trace t2"/><span className="trace t3"/><span className="trace t4"/></div>
        <div className="focus-statement"><span>Research focus</span><strong>Dependable AI systems</strong><p>Neuromorphic computing · AI control · Evaluations</p></div>
      </div>
    </section>

    <section className="section intro-strip" aria-label="Current position"><p>Currently</p><div><strong>Research Assistant, Brain Lab</strong><span>Electrical &amp; Computer Engineering · RIT · Rochester, New York</span></div><span className="availability">PhD expected 2028</span></section>

    <section className="section" id="research">
      <div className="section-heading"><p className="eyebrow">Research agenda</p><h2>One question across multiple layers</h2><p>How can we test, monitor, and recover intelligent systems before faults become failures?</p></div>
      <div className="research-list">{research.map(item=><article className="research-item" key={item.index}><span className="item-index">{item.index}</span><div><h3>{item.title}</h3><p>{item.text}</p><div className="tags">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div></article>)}</div>
    </section>

    <section className="section publication-section" id="publication">
      <div className="section-heading inverse"><p className="eyebrow">Featured publication</p><h2>Timing Matters</h2></div>
      <article className="publication-card"><div className="paper-year">2026</div><div className="paper-copy"><p className="venue">GLSVLSI ’26 · Great Lakes Symposium on VLSI</p><h3>Timing Matters: Delay Fault Characterization and Testing in SNN Accelerators</h3><p className="authors">Osita Ukwuaba · Cory Merkel</p><p>A systematic study of how axonal, dendritic, and refractory delay faults affect spiking neural networks—and how temporal faults can be characterized for dependable neuromorphic systems.</p><div className="paper-links"><a className="button light" href={paperUrl} target="_blank" rel="noreferrer">Read on ACM Digital Library <Arrow /></a><span>DOI 10.1145/3787109.3815284</span></div></div></article>
    </section>

    <section className="section" id="projects">
      <div className="section-heading split-heading"><div><p className="eyebrow">Selected projects</p><h2>Research in progress</h2></div><p>Work that extends dependable-computing ideas into learning systems and AI safety.</p></div>
      <div className="project-grid">{projects.map(project=><article className="project-card" key={project.title}><span>{project.status}</span><h3>{project.title}</h3><p>{project.text}</p></article>)}</div>
    </section>

    <section className="section experience-section"><div className="section-heading"><p className="eyebrow">Experience</p><h2>Research depth, engineering range</h2></div><div className="timeline">
      <article><time>2024—Present</time><div><h3>Research Assistant · Brain Lab, RIT</h3><p>Testing and reliability of spiking neural networks and neuromorphic systems.</p></div></article>
      <article><time>2020—2022</time><div><h3>Research Assistant · Design &amp; Intelligence Lab, Georgia Tech</h3><p>Machine learning and cognitive-agent research within the NSF AI-ALOE Institute.</p></div></article>
      <article><time>2010—2024</time><div><h3>Software and product engineering</h3><p>Built and led production software systems across education, analytics, and full-stack product development.</p></div></article>
    </div></section>

    <section className="section contact-section" id="contact"><div><p className="eyebrow">Contact</p><h2>Let’s discuss dependable AI.</h2><p>I welcome conversations about research collaboration, internships, and applied AI assurance.</p></div><div className="contact-links"><a href="mailto:ou1684@rit.edu">ou1684@rit.edu <Arrow /></a><a href="https://www.linkedin.com/in/osita-ukwuaba/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href="https://github.com/ositaukwuaba" target="_blank" rel="noreferrer">GitHub <Arrow /></a></div></section>
    <footer><span>© 2026 Osita Ukwuaba</span><span>Dependable AI · Neuromorphic Computing · AI Control &amp; Evaluations</span></footer>
  </main>;
}
