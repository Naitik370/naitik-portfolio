'use client';
import { useState, useRef, type CSSProperties } from 'react';
import {
  ArrowUpRight,
  ArrowDown,
  Download,
  Network,
  List,
  Code2,
  Cpu,
  Trophy,
  BookOpen,
  Award,
  CodeXml,
  ContactRound,
  Mail,
  MapPin,
  MousePointer2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { layers, type PortfolioNode } from './portfolio-data';
const icons = [Code2, Cpu, Trophy, BookOpen, Award];
const allNodes = layers.flatMap((layer) => layer.nodes);
const nodeSpacing = 72;
const graphHeight = 440;
const nodeY = (index: number, count: number) =>
  graphHeight / 2 + (index - (count - 1) / 2) * nodeSpacing;
export default function Home() {
  const [selectedId, setSelectedId] = useState('rag');
  const [view, setView] = useState<'network' | 'list'>('network');
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const detailRef = useRef<HTMLElement>(null);
  const layerIndex = layers.findIndex((layer) =>
    layer.nodes.some((node) => node.id === selectedId),
  );
  const layer = layers[layerIndex];
  const selected: PortfolioNode = layer.nodes.find(
    (node) => node.id === selectedId,
  )!;
  const Icon = icons[layerIndex];
  function selectNode(id: string) {
    setSelectedId(id);
    if (window.matchMedia('(max-width:760px)').matches)
      detailRef.current?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'instant'
          : 'smooth',
        block: 'start',
      });
  }
  return (
    <main id="top">
      <a className="skip-link" href="#explore">
        Skip to portfolio
      </a>
      <header className="header">
        <a className="brand" href="#top" aria-label="Naitik Jain home">
          <span className="brand-symbol">
            <Network size={21} />
          </span>
          naitik<span className="brand-dot">.</span>
        </a>
        <nav aria-label="Main navigation">
          <a className="nav-active" href="#explore">
            The network
          </a>
          <a href="#about">About me</a>
          <a href="mailto:naitik370@gmail.com">
            Let&apos;s connect <ArrowUpRight size={15} />
          </a>
        </nav>
        <a className="resume-link" href="/CV/Naitik_Jain_Resume.pdf" download>
          <Download size={15} /> Resume
        </a>
      </header>
      <section className="hero">
        <div>
          <p className="eyebrow">
            <span className="live-dot" /> AI / ML ENGINEER · MUMBAI, INDIA
          </p>
          <h1>
            Naitik Jain<span>.</span>
          </h1>
          <p className="hero-subtitle">
            Connecting ideas. Building intelligence.
          </p>
        </div>
        <div className="hero-note">
          <p>
            I build AI that works beyond the notebook.
            <br />
            From handwritten prescriptions to financial intelligence, I turn
            complex data into useful systems.
          </p>
          <a href="#explore">
            Explore my network <ArrowDown size={15} />
          </a>
        </div>
      </section>
      <section
        className="explorer"
        id="explore"
        aria-labelledby="explorer-title"
      >
        <div className="explorer-heading">
          <div>
            <span className="section-index">01 /</span>
            <h2 id="explorer-title">A network of my work</h2>
            <span className="tiny-label">EVERY NODE HAS A STORY</span>
          </div>
          <div className="view-switch" aria-label="Portfolio view">
            <Button
              variant="ghost"
              className={view === 'network' ? 'view-active' : ''}
              aria-pressed={view === 'network'}
              onClick={() => setView('network')}
            >
              <Network size={14} /> Network
            </Button>
            <Button
              variant="ghost"
              className={view === 'list' ? 'view-active' : ''}
              aria-pressed={view === 'list'}
              onClick={() => setView('list')}
            >
              <List size={14} /> List
            </Button>
          </div>
        </div>
        <div
          className={`network-layout ${view === 'list' ? 'list-layout' : ''}`}
        >
          <div className="network-canvas">
            <div className="canvas-caption">
              <span className="live-dot" /> INTERACTIVE PORTFOLIO{' '}
              <span>INPUT → IMPACT</span>
            </div>
            {view === 'network' ? (
              <div
                className="graph"
                aria-label="Five portfolio layers. Select any neuron to read its details."
              >
                <svg
                  className="connections"
                  viewBox={`0 0 1000 ${graphHeight}`}
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  {layers.slice(0, -1).flatMap((current, l) =>
                    current.nodes.flatMap((from, i) =>
                      layers[l + 1].nodes.map((to, j) => {
                        const active =
                          from.id === (hovered || selectedId) ||
                          to.id === (hovered || selectedId);
                        return (
                          <path
                            key={`${from.id}-${to.id}`}
                            className={active ? 'active-connection' : ''}
                            style={
                              active ? { stroke: layers[l].color } : undefined
                            }
                            d={`M ${100 + l * 200} ${nodeY(i, current.nodes.length) - 9} C ${200 + l * 200} ${nodeY(i, current.nodes.length) - 9}, ${200 + l * 200} ${nodeY(j, layers[l + 1].nodes.length) - 9}, ${300 + l * 200} ${nodeY(j, layers[l + 1].nodes.length) - 9}`}
                          />
                        );
                      }),
                    ),
                  )}
                </svg>
                {layers.map((current, l) => {
                  const NodeIcon = icons[l];
                  return (
                    <div
                      className="layer"
                      key={current.name}
                      style={{ '--node-color': current.color } as CSSProperties}
                    >
                      <div className="layer-heading">
                        <span>0{l + 1}</span>
                        <h3>{current.name}</h3>
                      </div>
                      <div className="neurons">
                        {current.nodes.map((node, i) => (
                          <button
                            key={node.id}
                            className={`neuron ${selectedId === node.id ? 'selected' : ''}`}
                            aria-pressed={selectedId === node.id}
                            aria-controls="node-details"
                            onClick={() => selectNode(node.id)}
                            onMouseEnter={() => setHovered(node.id)}
                            onMouseLeave={() => setHovered(null)}
                            onFocus={() => setHovered(node.id)}
                            onBlur={() => setHovered(null)}
                            style={{ top: nodeY(i, current.nodes.length) }}
                          >
                            <span className="neuron-circle">
                              <NodeIcon size={19} />
                            </span>
                            <span className="neuron-label">{node.label}</span>
                          </button>
                        ))}
                      </div>
                      <span className="layer-count">
                        {current.nodes.length.toString().padStart(2, '0')}{' '}
                        {current.nodes.length === 1 ? 'NODE' : 'NODES'}
                      </span>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="list-view">
                {layers.map((current, l) => {
                  const NodeIcon = icons[l];
                  return (
                    <section className="list-group" key={current.name}>
                      <h3 style={{ color: current.color }}>
                        <NodeIcon size={15} />
                        {current.name}
                        <span>{current.nodes.length}</span>
                      </h3>
                      {current.nodes.map((node) => (
                        <button
                          className={`list-node ${selectedId === node.id ? 'list-selected' : ''}`}
                          key={node.id}
                          aria-pressed={selectedId === node.id}
                          aria-controls="node-details"
                          onClick={() => selectNode(node.id)}
                        >
                          <span>{node.title}</span>
                          <ArrowUpRight size={14} />
                        </button>
                      ))}
                    </section>
                  );
                })}
              </div>
            )}
            <div className="canvas-footer">
              <span>
                <MousePointer2 size={12} /> Select a node · Tab to navigate
              </span>
              <span>{allNodes.length} nodes · 5 layers</span>
            </div>
            <p className="mobile-hint">
              Swipe the network to explore all five layers.
            </p>
          </div>
          <aside
            className="detail-panel"
            id="node-details"
            ref={detailRef}
            style={{ '--selected-color': layer.color } as CSSProperties}
            aria-label="Selected neuron details"
          >
            <div
              key={selected.id}
              className="detail-inner"
              aria-live="polite"
              aria-atomic="true"
            >
              <p className="eyebrow">
                SELECTED NEURON{' '}
                <span>
                  {String(
                    allNodes.findIndex((node) => node.id === selectedId) + 1,
                  ).padStart(2, '0')}{' '}
                  / {allNodes.length}
                </span>
              </p>
              <div className="detail-icon">
                <Icon size={25} />
              </div>
              <p className="detail-category">{selected.category}</p>
              <h3>{selected.title}</h3>
              <p className="detail-copy">{selected.summary}</p>
              <div className="tags">
                {selected.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <Button
                className="detail-button"
                variant="ghost"
                onClick={() => setExpanded(true)}
              >
                Explore this node <ArrowUpRight size={15} />
              </Button>
              <div className="detail-bottom">
                <span>
                  {selected.metric ||
                    'Part of my learning and building journey.'}
                </span>
                <span className="mini-node" />
              </div>
            </div>
          </aside>
        </div>
        <p className="network-note">
          A visual map of my portfolio. Connections illustrate the layers,
          rather than a trained model.
        </p>
      </section>
      <section className="about" id="about">
        <div>
          <p className="eyebrow">02 / THE PERSON BEHIND THE NETWORK</p>
          <h2>Curiosity, put to work.</h2>
          <p>
            I&apos;m an AI/ML Engineer at WONDRx, building tools for healthcare.
            My interests sit at the intersection of generative AI, document
            intelligence, and quantitative finance.
          </p>
          <p>
            I studied Data Science at MPSTME, NMIMS. I like working on problems
            where a model becomes something people can actually use.
          </p>
        </div>
        <div className="about-facts">
          <span>
            <MapPin size={16} /> Mumbai, India
          </span>
          <span>B.Tech in Data Science · NMIMS</span>
          <span>3.6 / 4 CGPA</span>
          <div className="socials">
            <a
              href="https://github.com/Naitik370/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <CodeXml size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/naitik-jain-7a52a21a3/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <ContactRound size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:naitik370@gmail.com" aria-label="Email Naitik">
              <Mail size={20} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>
      <section className="experience" aria-labelledby="experience-title">
        <div className="experience-intro">
          <p className="eyebrow">03 / EXPERIENCE</p>
          <h2 id="experience-title">Building in the real world.</h2>
        </div>
        <div className="timeline">
          <article>
            <div className="timeline-title">
              <h3>
                AI/ML Engineer <span>WONDRx</span>
              </h3>
              <time>Jul 2025 – Present</time>
            </div>
            <p>
              Production handwriting recognition, prescription digitization, and
              a multi-role healthcare assistant with 62 API-backed tools.
            </p>
          </article>
          <article>
            <div className="timeline-title">
              <h3>
                Automation & AI Intern <span>WONDRx</span>
              </h3>
              <time>Dec 2024 – Jun 2025</time>
            </div>
            <p>
              Automated doctor onboarding with VLM-based OCR and Flask. Built
              enterprise analytics with Python and Streamlit.
            </p>
          </article>
          <article>
            <div className="timeline-title">
              <h3>
                Volunteer <span>Indian Development Foundation</span>
              </h3>
              <time>Jun – Jul 2022</time>
            </div>
            <p>
              Supported center operations assisting patients with leprosy and
              wrote a report on United Nations initiatives to eradicate world
              hunger.
            </p>
          </article>
        </div>
      </section>
      <section className="contact">
        <div>
          <p className="eyebrow">LET&apos;S MAKE SOMETHING USEFUL</p>
          <h2>Have a problem worth solving?</h2>
        </div>
        <a href="mailto:naitik370@gmail.com">
          naitik370@gmail.com <ArrowUpRight size={20} />
        </a>
      </section>
      <footer>
        <span>© {new Date().getFullYear()} Naitik Jain</span>
        <span>Always learning. Always connecting.</span>
        <a href="/CV/Naitik_Jain_Resume.pdf" download>
          Download my resume <Download size={14} />
        </a>
      </footer>
      <Dialog open={expanded} onOpenChange={setExpanded}>
        <DialogContent className="node-dialog">
          <p className="detail-category">{selected.category}</p>
          <DialogTitle>{selected.title}</DialogTitle>
          <DialogDescription>{selected.summary}</DialogDescription>
          <div className="dialog-details">
            {selected.details.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </div>
          <div className="tags">
            {selected.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          {selected.url && (
            <a
              className="publication-link"
              href={selected.url}
              target="_blank"
              rel="noreferrer"
            >
              {selected.linkLabel}
              <ArrowUpRight size={16} />
            </a>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
