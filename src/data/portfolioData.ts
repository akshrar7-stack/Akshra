export interface SkillItem {
  name: string;
  category: 'Web Development' | 'Programming' | 'Data Analysis & Visualization' | 'Databases & Data Handling';
  level: string;
  description: string;
  topics: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  visualTheme: 'airline' | 'festival';
  highlights: string[];
  codeSnippet: {
    language: string;
    filename: string;
    code: string;
  };
  sampleData?: Array<Record<string, string | number>>;
  links: {
    liveDemoUrl?: string;
    githubUrl: string;
  };
}

export interface EducationSubject {
  name: string;
  note: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    wordmark: string;
    title: string;
    badge: string;
    headline: string;
    subheadline: string;
    bioParagraphs: string[];
    terminalProfile: {
      whoami: string;
      role: string;
      school: string;
      location: string;
      interests: string[];
      currentFocus: string;
      status: string;
    };
    keyInterests: string[];
  };
  skills: SkillItem[];
  projects: ProjectItem[];
  education: {
    institution: string;
    location: string;
    level: string;
    subjects: EducationSubject[];
    narrative: string;
  };
  contact: {
    email: string;
    githubPlaceholder: string;
    linkedinPlaceholder: string;
    location: string;
    availability: string;
    resumePath: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Akshra Das",
    wordmark: "AKSHRA.DEV",
    title: "Aspiring Full-Stack Developer",
    badge: "OPEN TO LEARNING & OPPORTUNITIES",
    headline: "Hi, I'm Akshra Das.",
    subheadline: "Building ideas into digital experiences.",
    bioParagraphs: [
      "I am an aspiring developer and student developing my programming and analytical skills through hands-on practice, curiosity, and practical software projects.",
      "My passion lies in understanding how digital tools work under the hood. Studying Informatics Practices alongside sciences sparked my deep enthusiasm for Python, structured data processing with CSV and SQL, and crafting responsive web interfaces.",
      "I enjoy turning logical ideas into real software workflows, learning new technologies step-by-step, and building projects that solve genuine problems. I am eager to expand into full-stack development and explore student internships and collaborative opportunities."
    ],
    terminalProfile: {
      whoami: "Akshra Das",
      role: "Aspiring Full-Stack Developer",
      school: "Carmel Convent School, Sector 7D, Faridabad",
      location: "Faridabad, India",
      interests: ["Web Development", "Python", "Data Analysis", "Software Engineering"],
      currentFocus: "Learning, experimenting, building.",
      status: "Actively seeking learning opportunities & student internships"
    },
    keyInterests: [
      "Web development and responsive interface design",
      "Python programming, logic, and workflow automation",
      "Data analysis and visualization with Pandas and Matplotlib",
      "Database management and structured CSV handling",
      "Continuous learning and software engineering fundamentals"
    ]
  },
  skills: [
    {
      name: "HTML",
      category: "Web Development",
      level: "Core Frontend",
      description: "Building well-structured, semantic, and accessible webpage architectures.",
      topics: ["Semantic tags", "Document hierarchy", "Forms & inputs", "Accessibility"]
    },
    {
      name: "CSS",
      category: "Web Development",
      level: "Styling & Layouts",
      description: "Styling responsive, clean user interfaces with modern layouts and visual themes.",
      topics: ["Flexbox", "CSS Grid", "Responsive media queries", "Transitions & UI effects"]
    },
    {
      name: "Python",
      category: "Programming",
      level: "Basic to Intermediate",
      description: "Writing clean procedural and modular scripts, algorithms, and practical applications.",
      topics: ["Core syntax & data types", "Control structures & loops", "Functions & modules", "File I/O logic"]
    },
    {
      name: "NumPy",
      category: "Data Analysis & Visualization",
      level: "Exploring",
      description: "Working with multi-dimensional numerical arrays and vector calculations.",
      topics: ["N-dimensional arrays", "Array slicing", "Mathematical operations", "Data transformation"]
    },
    {
      name: "Pandas",
      category: "Data Analysis & Visualization",
      level: "Exploring",
      description: "Manipulating and inspecting structured datasets with DataFrames.",
      topics: ["DataFrames & Series", "CSV reading & cleaning", "Filtering & sorting", "Descriptive statistics"]
    },
    {
      name: "Matplotlib",
      category: "Data Analysis & Visualization",
      level: "Exploring",
      description: "Generating visual plots, charts, and graphs to communicate data trends.",
      topics: ["Line plots", "Bar charts", "Histograms & scatter graphs", "Chart formatting & labels"]
    },
    {
      name: "SQL",
      category: "Databases & Data Handling",
      level: "Relational Queries",
      description: "Writing relational database queries to retrieve, filter, and organize information.",
      topics: ["SELECT & WHERE clauses", "Aggregations & GROUP BY", "ORDER BY & LIMIT", "Relational schemas"]
    },
    {
      name: "CSV File Handling",
      category: "Databases & Data Handling",
      level: "Data Persistence",
      description: "Reading, parsing, validating, and updating structured CSV records in Python.",
      topics: ["Python `csv` module", "DictReader / DictWriter", "Record appending & updates", "Persistent storage"]
    }
  ],
  projects: [
    {
      id: "skyflow-airline",
      title: "Skyflow — Airline Management Software",
      tagline: "Python-based flight and passenger data management powered by CSV storage.",
      description: "A Python-based airline management project that uses CSV files for storing and managing structured data. It demonstrates my exploration of programming logic, file handling, and practical software workflows.",
      tags: ["Python", "CSV File Handling", "Data Management", "Terminal UI"],
      visualTheme: "airline",
      highlights: [
        "Structured CSV storage simulating airline flight registries and passenger manifests",
        "Modular Python logic for adding, searching, and updating flights by route and status",
        "Record search by Flight ID, departure city, and destination with clean error handling",
        "Serves as a real-world stepping stone from flat files to relational SQL databases"
      ],
      codeSnippet: {
        language: "python",
        filename: "skyflow_core.py",
        code: `# Skyflow: Airline Management System
import csv
import os

FLIGHTS_CSV = "flights_registry.csv"

def search_flights(origin, destination):
    matches = []
    if not os.path.exists(FLIGHTS_CSV):
        return matches
        
    with open(FLIGHTS_CSV, mode="r", newline="") as file:
        reader = csv.DictReader(file)
        for row in reader:
            if row["origin"].lower() == origin.lower() and \\
               row["destination"].lower() == destination.lower():
                matches.append(row)
    return matches`
      },
      sampleData: [
        { flight_no: "SK-204", origin: "Delhi (DEL)", destination: "Mumbai (BOM)", status: "On Time", seats_left: 18 },
        { flight_no: "SK-319", origin: "Delhi (DEL)", destination: "Bengaluru (BLR)", status: "Boarding", seats_left: 4 },
        { flight_no: "SK-408", origin: "Mumbai (BOM)", destination: "Goa (GOI)", status: "Scheduled", seats_left: 32 },
        { flight_no: "SK-512", origin: "Delhi (DEL)", destination: "Dubai (DXB)", status: "Scheduled", seats_left: 45 }
      ],
      links: {
        liveDemoUrl: "#skyflow-demo",
        githubUrl: "https://github.com/YOUR_USERNAME/skyflow-airline-management"
      }
    },
    {
      id: "festival-website",
      title: "Festival Website",
      tagline: "Festival-themed frontend website showcasing responsive layouts and styling.",
      description: "A festival-themed website created using HTML and CSS, exploring webpage structure, styling, visual presentation, and the fundamentals of frontend development.",
      tags: ["HTML", "CSS", "Responsive Layouts", "Visual Storytelling"],
      visualTheme: "festival",
      highlights: [
        "Semantic HTML document structure with accessible heading hierarchy and content sections",
        "Handcrafted CSS responsive layouts using Flexbox and Grid without bloated frameworks",
        "Atmospheric festival visual identity with decorative ambient lighting and vibrant cards",
        "Practical exploration of frontend fundamentals: typography, transitions, and user flow"
      ],
      codeSnippet: {
        language: "html",
        filename: "festival_index.html",
        code: `<!-- Festival Webpage Structure -->
<section class="festival-hero">
  <div class="glow-backdrop"></div>
  <h1 class="festival-title">Celebrate Light & Wonder</h1>
  <p class="tagline">Explore live stages, art installations & experiences</p>
  <div class="event-grid">
    <article class="event-card">
      <span class="event-time">18:00 - Main Stage</span>
      <h3>Symphony of Lanterns</h3>
    </article>
  </div>
</section>`
      },
      links: {
        liveDemoUrl: "#festival-demo",
        githubUrl: "https://github.com/YOUR_USERNAME/festival-website"
      }
    }
  ],
  education: {
    institution: "Carmel Convent School",
    location: "Sector 7D, Faridabad",
    level: "School Student / Fresher",
    subjects: [
      {
        name: "Informatics Practices",
        note: "Core computer science curriculum covering Python fundamentals, CSV data manipulation, SQL database queries, and data handling principles."
      },
      {
        name: "Physics",
        note: "Analytical problem solving, vectors, mathematical laws, and logical reasoning applied to technical questions."
      },
      {
        name: "Chemistry",
        note: "Systematic scientific inquiry, molecular structures, and quantitative empirical thinking."
      },
      {
        name: "Biology",
        note: "Study of complex living systems, biological mechanisms, and detailed structural documentation."
      },
      {
        name: "English",
        note: "Precise written communication, critical thinking, literature appreciation, and articulate presentation."
      }
    ],
    narrative: "Currently pursuing studies at Carmel Convent School with a focus on both science and informatics practices. Hands-on coding in Python and database querying ignited my drive to build software applications, bridge computer logic with human interfaces, and pursue full-stack software development."
  },
  contact: {
    email: "akshrar7@gmail.com",
    githubPlaceholder: "https://github.com/YOUR_USERNAME",
    linkedinPlaceholder: "https://www.linkedin.com/in/YOUR_USERNAME",
    location: "Faridabad, Haryana, India",
    availability: "Available for learning, student internships, and developer collaborations",
    resumePath: "/resume.pdf"
  }
};
