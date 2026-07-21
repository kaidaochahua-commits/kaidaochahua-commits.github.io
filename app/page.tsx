import HeroScene from "./HeroScene";
import InteractionLayer from "./InteractionLayer";

const projects = [
  {
    no: "01",
    name: "Hickey",
    type: "Global Social Product",
    role: "Design Lead · 0—1",
    result: "TOP 10 · US APP STORE",
    metrics: [["TOP 10", "US App Store"], ["0—1", "Full-cycle design"]],
    theme: "hickey",
    label: "Social discovery, reimagined.",
    cover: "/project-covers/01.png",
  },
  {
    no: "02",
    name: "PicPals",
    type: "Global Social Product",
    role: "Design Lead · 0—1",
    result: "FROM CONCEPT TO MVP",
    metrics: [["0—1", "Product design"], ["MVP", "Launch delivery"]],
    theme: "picpals",
    label: "A closer way to stay connected.",
    cover: "/project-covers/02.png",
  },
  {
    no: "03",
    name: "赫兹 · Hertz",
    type: "Social Experience",
    role: "Lead Experience Designer",
    result: "PRODUCT REDESIGN",
    metrics: [["10M+", "Daily active users"], ["REDESIGN", "Experience upgrade"]],
    theme: "hertz",
    label: "Make every voice feel present.",
    cover: "/project-covers/03.png",
  },
  {
    no: "04",
    name: "Digital Experience",
    type: "Product Design",
    role: "UX · UI · Motion",
    result: "SELECTED WORK",
    metrics: [],
    theme: "digital-experience",
    label: "Crafted for clarity and impact.",
    cover: "/project-covers/04.png",
  },
  {
    no: "05",
    name: "Creative Direction",
    type: "Visual Design",
    role: "Concept · Art Direction",
    result: "SELECTED WORK",
    metrics: [],
    theme: "creative-direction",
    label: "Ideas shaped into visual systems.",
    cover: "/project-covers/05.png",
  },
];

const capabilities = [
  ["01", "全流程产品设计", "End-to-end Design", "从调研、产品定义到交互、视觉与最终落地，建立完整而清晰的体验秩序。"],
  ["02", "设计方向定义", "Art Direction", "定义克制、鲜明且国际化的产品视觉语言，让产品拥有可被记住的性格。"],
  ["03", "复杂项目把控", "Project Leadership", "管理需求、节奏、资源和质量，推动产品、研发与业务高效协同。"],
  ["04", "0—1 产品设计", "Zero to One", "从概念种子期、MVP 探索到正式上线，持续验证并交付真实价值。"],
];

export default function Home() {
  return (
    <main>
      <InteractionLayer />
      <section className="hero" id="home">
        <header className="nav shell">
          <a className="monogram" href="#home" aria-label="Chahua home">C<span>·</span>H</a>
          <nav aria-label="Main navigation">
            <a href="#work">Work</a><a href="#about">About</a><a href="#capabilities">Capabilities</a>
          </nav>
          <a className="contactPill" href="#contact"><i /> Let’s talk <span>↗</span></a>
        </header>
        <HeroScene />
      </section>

      <section className="about section shell" id="about">
        <div className="aboutEyebrow"><i /> WHY CHOOSE ME</div>
        <div className="aboutHeader">
          <h2>MEET THE MIND<br /><span>BEHIND THE WORK</span></h2>
          <div className="aboutSocial"><a href="mailto:1175161326@qq.com">EMAIL</a><a href="https://dribbble.com/CHAHUA" target="_blank">DR</a><a href="https://uikee.zcool.com.cn/" target="_blank">ZC</a></div>
        </div>
        <div className="aboutShowcase">
          <figure className="portrait aboutPortrait">
            <img className="portraitPhoto" src="/about/profile-landscape.jpg" alt="Designer standing with a sheep in a mountain meadow" />
            <figcaption>SHANGHAI, CN · AVAILABLE WORLDWIDE</figcaption>
          </figure>
          <div className="aboutDetails">
            <p className="aboutLead">I bring together product thinking, visual craft, and motion to create clear digital experiences with care, curiosity, and measurable impact.</p>
            <div className="aboutLocation"><span>◎</span><p>BASED IN SHANGHAI<br /><b>WORKING ACROSS GLOBAL PRODUCTS</b></p></div>
            <div className="aboutCards">
              <article className="aboutMetricCard">
                <strong>8<sup>+</sup></strong><span>YEARS OF EXPERIENCE</span>
                <ul><li>40+ Research Reports</li><li>3 Design Awards</li><li>0—1 Product Design</li></ul>
                <a href="#contact">LET’S WORK TOGETHER <b>↗</b></a>
              </article>
              <article className="aboutFactCard">
                <img src="/about/profile-landscape.jpg" alt="Mountain landscape detail" />
                <span>PRODUCT IMPACT · 01/04</span><strong>TOP 10</strong><p>US APP STORE<br />SOCIAL CATEGORY</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="shell">
          <div className="sectionTop"><span>02 / SELECTED WORK</span><span>2018—2026</span></div>
          <div className="workHeading"><div><span className="workKicker">CASE STUDIES</span><h2>My success stories</h2></div><a className="seeWork" href="#contact">Discuss a project <span>↗</span></a></div>
          <div className="projects">
            {projects.map((project) => (
              <article className={`project ${project.theme}`} key={project.name}>
                <div className="projectVisual">
                  <img className="projectCover" src={project.cover} alt={`${project.name} project cover`} />
                  <a className="projectArrow" href="#contact" aria-label={`Discuss ${project.name}`}>↗</a>
                </div>
                <div className="projectInfo"><span>{project.no}</span><div><h3>{project.name} — {project.label}</h3><div className="projectTags"><i>{project.type}</i><i>{project.role}</i><i>{project.result}</i></div></div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="capabilities section shell" id="capabilities">
        <div className="sectionTop"><span>03 / CAPABILITIES</span><span>HOW I CREATE VALUE</span></div>
        <div className="capIntro"><h2>FROM DIRECTION<br />TO <em>DELIVERY.</em></h2><p>不仅定义设计，也确保它真实发生。<br /><span>I define the direction, build the system,<br />and stay until it ships.</span></p></div>
        <div className="capGrid">
          {capabilities.map(([no, title, en, text]) => <article key={no}><span>{no}</span><div className="capIcon">{no === "01" ? "✦" : no === "02" ? "◒" : no === "03" ? "⌁" : "↗"}</div><h3>{title}</h3><h4>{en}</h4><p>{text}</p></article>)}
        </div>
        <div className="process"><span>RESEARCH</span><i>→</i><span>ANALYZE</span><i>→</i><span>DEFINE</span><i>→</i><span>DESIGN</span><i>→</i><span>DELIVER</span><i>→</i><span>ITERATE</span></div>
      </section>

      <footer className="contact" id="contact">
        <div className="contactOrb" />
        <div className="shell contactInner">
          <div className="sectionTop"><span>04 / CONTACT</span><span>SHANGHAI · GMT+8</span></div>
          <div className="availability"><i /> AVAILABLE FOR FULL-TIME · PROJECTS · CONSULTING</div>
          <h2>LET’S MAKE<br />SOMETHING <em>MATTER.</em></h2>
          <a className="mail" href="mailto:1175161326@qq.com">1175161326@qq.com <span>↗</span></a>
          <div className="contactBottom">
            <p>如果你正在寻找兼具设计能力、审美判断和项目把控能力的合作伙伴，欢迎与我联系。</p>
            <div><a href="tel:15251832454">PHONE</a><a href="https://dribbble.com/CHAHUA" target="_blank">DRIBBBLE</a><a href="https://uikee.zcool.com.cn/" target="_blank">ZCOOL</a></div>
            <span>© 2026 RICKY PENG</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
