export type PortfolioNode = {
  id: string;
  label: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  details: string[];
  metric?: string;
  url?: string;
  linkLabel?: string;
};
export const layers = [
  {
    name: 'Projects',
    color: '#34785d',
    nodes: [
      {
        id: 'rag',
        label: 'Multimodal RAG',
        title: 'Multimodal RAG',
        category: 'Project / Financial intelligence',
        summary:
          'An end-to-end RAG system for exploring 600–700-page IPO filings, with evidence-grounded answers and page-level citations.',
        tags: ['Python', 'ChromaDB', 'Docling', 'Streamlit'],
        metric: '600–700 pages. Answers with evidence.',
        details: [
          'A resumable ingestion pipeline combines Docling, PyMuPDF quality checks, selective OCR, and vision-LLM chart captioning. Section-aware chunks use BGE embeddings and a BM25 index.',
          'Metadata-filtered hybrid retrieval combines dense vector search and BM25 with Reciprocal Rank Fusion and optional cross-encoder reranking.',
          'OpenRouter generation includes a local Ollama fallback and page-level citation validation. The Streamlit interface supports conversational Q&A, source previews, retrieval scores, and cited PDF pages.',
        ],
      },
      {
        id: 'autotrend',
        label: 'AutoTrend',
        title: 'AutoTrend breakout strategy',
        category: 'Project / Algorithmic trading',
        summary:
          'A Python trading system that identifies support and resistance trendlines, then uses machine learning to filter breakout signals.',
        tags: ['Python', 'Random Forest', 'Gradient Descent'],
        metric: 'Mathematical trendlines. Validated signals.',
        details: [
          'Gradient Descent identifies optimal support and resistance trendlines.',
          'A Random Forest classifier evaluates volume indicators and price deviations to filter false-positive breakout signals.',
        ],
      },
      {
        id: 'news',
        label: 'Stock news bot',
        title: 'Stock news notification system',
        category: 'Project / Market intelligence',
        summary:
          'A Telegram assistant that follows portfolio holdings, summarizes relevant news, and helps prioritize market alerts.',
        tags: ['Zerodha Kite', 'Gemini', 'Telegram', 'Python'],
        metric: 'Portfolio-aware news, delivered to Telegram.',
        details: [
          'Zerodha Kite Connect retrieves portfolio holdings; Google News RSS aggregates articles; Gemini provides sentiment analysis and concise summaries.',
          'Alert prioritization, duplicate filtering, watchlists, mute controls, P&L summaries, and price-movement detection improve signal quality.',
          'The interactive bot supports portfolio queries, stock-specific news commands, inline stock search, and personalized alert management.',
        ],
      },
    ],
  },
  {
    name: 'Skills',
    color: '#47788b',
    nodes: [
      {
        id: 'genai',
        label: 'Generative AI',
        title: 'AI & generative AI',
        category: 'Skills / Intelligence',
        summary:
          'Building with language and vision models, from retrieval-augmented generation to agents and document understanding.',
        tags: ['LLMs', 'VLMs', 'RAG', 'LangGraph', 'MCP'],
        details: [
          'Core areas: NLP, Transformers, computer vision, OCR, and agentic AI.',
          'Applied at WONDRx through prescription digitization, handwritten-name recognition, and a multi-role healthcare assistant.',
        ],
      },
      {
        id: 'backend',
        label: 'Backend & data',
        title: 'Backend & databases',
        category: 'Skills / Systems',
        summary:
          'APIs and data infrastructure for AI applications, including inference services, structured storage, and search.',
        tags: [
          'FastAPI',
          'Flask',
          'PostgreSQL',
          'REST APIs',
          'Typesense',
          'ChromaDB',
        ],
        details: [
          'FastAPI powers the production handwritten-name inference service and prescription digitization system.',
          'Flask supports OCR automation. PostgreSQL, Typesense, and ChromaDB cover relational storage and search.',
        ],
      },
      {
        id: 'python',
        label: 'Python & SQL',
        title: 'Python & SQL',
        category: 'Skills / Programming',
        summary:
          'The core tools behind my AI pipelines, financial applications, analytics, and backend services.',
        tags: ['Python', 'SQL'],
        details: [
          'Python connects document processing, model inference, retrieval, financial analysis, and API integrations.',
          'SQL supports querying and managing structured data.',
        ],
      },
      {
        id: 'viz',
        label: 'Data visualization',
        title: 'Data & visualization',
        category: 'Skills / Analysis',
        summary:
          'Making data accessible through interactive applications and analytics dashboards.',
        tags: ['Streamlit', 'Tableau', 'Power BI'],
        details: [
          'Built a Streamlit analytics dashboard for a top-8 pharmaceutical company in India.',
          'Streamlit also powers the PodBias research application and the multimodal financial-document RAG interface.',
        ],
      },
      {
        id: 'deploy',
        label: 'Deployment',
        title: 'Deployment & infrastructure',
        category: 'Skills / Production',
        summary:
          'Moving models into services that people can use, with containerized deployment and Linux infrastructure.',
        tags: ['Docker', 'Linux', 'FastAPI'],
        details: [
          'Containerized the fine-tuned TrOCR inference service with Docker and deployed it for doctors at WONDRx.',
        ],
      },
      {
        id: 'finance',
        label: 'Quant finance',
        title: 'Financial & quantitative analysis',
        category: 'Skills / Finance',
        summary:
          'Applying programming and machine learning to market data, financial documents, and systematic trading ideas.',
        tags: [
          'Financial analysis',
          'Quantitative finance',
          'Algorithmic trading',
        ],
        details: [
          'Projects include IPO/DRHP document analysis, the AutoTrend breakout strategy, and portfolio-aware stock news alerts.',
        ],
      },
    ],
  },
  {
    name: 'Achievements',
    color: '#a57232',
    nodes: [
      {
        id: 'ocr',
        label: 'Production OCR',
        title: 'Handwriting to production',
        category: 'Achievement / WONDRx',
        summary:
          'Fine-tuned Microsoft TrOCR on handwritten patient names, achieving a 10% character error rate and deploying it for doctors.',
        tags: ['TrOCR', 'FastAPI', 'Docker'],
        metric: '10% character error rate',
        details: [
          'Fine-tuned Microsoft TrOCR-Base Handwritten on WONDRx’s proprietary prescription-image dataset.',
          'Built a FastAPI inference service, containerized it with Docker, and deployed it to serve doctors in production.',
        ],
      },
      {
        id: 'tools',
        label: '62 AI tools',
        title: 'A healthcare assistant with 62 tools',
        category: 'Achievement / WONDRx',
        summary:
          'Built a multi-role healthcare AI assistant with API-backed tools, persistent memory, and controlled access.',
        tags: ['LangGraph', 'Gemini', 'MCP'],
        metric: '62 API-backed tools',
        details: [
          'Persistent conversational memory, role-based access control, and secure identity injection support multi-role use.',
          'In-process MCP communication and end-to-end tool-call observability make the assistant’s actions traceable.',
        ],
      },
      {
        id: 'prescriptions',
        label: 'Prescription AI',
        title: 'Prescription digitization',
        category: 'Achievement / WONDRx',
        summary:
          'Led a system for hard-to-read handwritten prescriptions, achieving 80% accuracy while reducing manual quality-control effort.',
        tags: ['VLMs', 'LLMs', 'FastAPI', 'PostgreSQL'],
        metric: '80% accuracy',
        details: [
          'VLM-based OCR reads prescriptions, while LLMs perform contextualized structured extraction.',
          'The system reduced manual QC effort and improved scalability.',
        ],
      },
      {
        id: 'analytics',
        label: '24-hour analytics',
        title: 'From one month to 24 hours',
        category: 'Achievement / WONDRx',
        summary:
          'Built an analytics dashboard for a top-8 pharmaceutical company in India, reducing reporting latency to 24 hours.',
        tags: ['Python', 'Streamlit', 'APIs', 'Role-based access'],
        metric: '1 month → 24 hours reporting latency',
        details: [
          'Collaborated with management and enterprise stakeholders to align the dashboard with business requirements.',
          'Python, Streamlit, API integrations, and role-based access control supported faster access to reporting.',
        ],
      },
    ],
  },
  {
    name: 'Publications',
    color: '#846597',
    nodes: [
      {
        id: 'podbias',
        label: 'PodBias',
        title: 'PodBias',
        category: 'Publication / Deep learning',
        summary:
          'Unveiling Bias in YouTube Podcasts Using Deep Learning. A media-bias detection system built with Sentence-BERT and BART.',
        tags: ['Sentence-BERT', 'BART', 'NLP', 'Streamlit'],
        metric: '4,000+ labeled sentences',
        url: 'https://doi.org/10.1007/978-981-96-5754-4_36',
        linkLabel: 'Read publication',
        details: [
          'Created a custom dataset of more than 4,000 labeled sentences for training and evaluating podcast bias detection.',
          'Built a Streamlit application with real-time bias scoring and accessible content analysis.',
          'Publication title: PodBias: Unveiling Bias in YouTube Podcasts Using Deep Learning.',
        ],
      },
    ],
  },
  {
    name: 'Certificates',
    color: '#a26860',
    nodes: [
      {
        id: 'stanford',
        label: 'Stanford · ML',
        title: 'Unsupervised learning, recommenders & reinforcement learning',
        category: 'Certificate / DeepLearning.AI & Stanford',
        summary:
          'Coursework in unsupervised learning, recommender systems, and reinforcement learning.',
        tags: ['DeepLearning.AI', 'Stanford University'],
        details: [
          'Certification listed in my resume: Unsupervised Learning, Recommenders, Reinforcement Learning.',
        ],
      },
      {
        id: 'amazon',
        label: 'Amazon ML',
        title: 'Amazon ML Summer School 2023',
        category: 'Certificate / Amazon',
        summary: 'A machine learning program attended in 2023.',
        tags: ['Amazon', 'Machine learning', '2023'],
        details: ['Amazon ML Summer School 2023, as listed in my resume.'],
      },
      {
        id: 'datacamp',
        label: 'DataCamp',
        title: 'Machine learning with tree-based models in Python',
        category: 'Certificate / DataCamp',
        summary:
          'Coursework focused on tree-based machine learning models in Python.',
        tags: ['DataCamp', 'Python', 'Tree-based models'],
        details: [
          'Certification: Machine Learning with Tree-Based Models in Python.',
        ],
      },
      {
        id: 'quantcert',
        label: 'Quant finance',
        title: 'Quantitative finance with Python',
        category: 'Certificate / Udemy',
        summary: 'Python coursework in quantitative finance.',
        tags: ['Udemy', 'Python', 'Quantitative finance'],
        details: ['Certification: Quantitative Finance with Python.'],
      },
      {
        id: 'analyticscert',
        label: 'Data analytics',
        title: 'Data analytics A–Z with Python',
        category: 'Certificate / Udemy',
        summary: 'Coursework in data analytics using Python.',
        tags: ['Udemy', 'Python', 'Data analytics'],
        details: ['Certification: Data Analytics A–Z with Python.'],
      },
      {
        id: 'datasciencecert',
        label: 'Data science',
        title: 'Python introduction to data science and machine learning',
        category: 'Certificate / Udemy',
        summary:
          'Foundational coursework in Python for data science and machine learning.',
        tags: ['Udemy', 'Data science', 'Machine learning'],
        details: [
          'Certification: Python Introduction to Data Science and Machine Learning.',
        ],
      },
    ],
  },
] satisfies { name: string; color: string; nodes: PortfolioNode[] }[];
