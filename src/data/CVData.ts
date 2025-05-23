import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle, Table, TableCell, TableRow, WidthType } from 'docx';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export interface IContact {
  email: string;
  phone: string;
  line: string;
  address: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

export interface IExperience {
  date: string;
  title: string;
  company: string;
  points: string[];
}

export interface IProject {
  title: string;
  description: string;
  tech: string;
}

export interface ICertification {
  name: string;
  link: string;
}

export interface ISkill {
  name: string;
  level: number;
}

export interface ICVData {
  name: string;
  title: string;
  contact: IContact;
  summary: string;
  experience: IExperience[];
  projects: IProject[];
  certifications: ICertification[];
  skills: ISkill[];
  exportToPDF: () => void;
  exportToWord: () => void;
}

const cvData: ICVData = {
  name: "Thiha Ko Ko",
  title: "Web Developer",
  contact: {
    email: "thihasithu0224@gmail.com",
    phone: "+66 628 369 284",
    line: "VQsvVppMQt",
    address: "140 Soi Ram Intra 14, Intersection 7, Ram Intra Road, Bang Khen District, Bangkok 10230",
    linkedin: "linkedin.com/in/thiha-ko-ko-24308a1a5",
    github: "github.com/thihako2",
    portfolio: "thihako2.github.io/thiha-portfolio-pure"
  },
  summary: "I'm a tech and software development enthusiast with a passion for coding and the latest technology. With 3 years of experience in the industry, I've not only honed my technical skills but also excelled in communication and leadership. Although my education is on hold due to the situations of my country, please consider as I'm continuing learning things by myself so far. A true technology enthusiast, I thrive on solving complex problems, mastering new tools and frameworks, and staying ahead of industry trends.",
  experience: [
    {
      date: "Aug 2024 — Dec 2024",
      title: "Flutter Developer",
      company: "Impulse International, Myanmar (Remote)",
      points: [
        "UI/UX Redesign & Modernization: Redesigned the Myanmar Teacher Platform mobile app, translating Figma prototypes into responsive Flutter widgets and streamlining navigation flows to improve usability and engagement.",
        "State Management & Refactoring: Refactored codebase to adopt Provider-based state management, enhancing modularity and reducing page-load latency by 30%.",
        "Collaboration & Localization: Worked with product managers and UX designers to ensure culturally appropriate UI and accurate translations."
      ]
    },
    {
      date: "Jan 2024 — Aug 2024",
      title: "Flutter Developer",
      company: "Mall Plus",
      points: [
        "App Development & Redesign: Developed customer-facing food ordering app and redesigned delivery biker app to enhance usability.",
        "Backend Integration: Integrated Laravel backend for real-time order tracking, authentication, and push notifications.",
        "Deployment & Maintenance: Managed iOS App Store deployment and provided post-launch support."
      ]
    },
    {
      date: "May 2023 — Dec 2023",
      title: "Android Developer",
      company: "Unity Source",
      points: [
        "HR App Maintenance: Improved UI responsiveness and resolved bugs for cross-device compatibility.",
        "Distribution System: Built inventory dispatch and delivery tracking app with Laravel."
      ]
    },
    {
      date: "Jan 2022 — Apr 2023",
      title: "Software Engineer",
      company: "Blue Ocean Operation Management",
      points: [
        "AR Campaigns: Led development of 2D AR stickers and virtual try-ons for beer festival campaigns.",
        "Web Portals & Chatbots: Maintained campaign portal and orchestrated chatbot flows.",
        "Real-Time Chat System: Optimized Samsung Messenger for high concurrency."
      ]
    }
  ],
  projects: [
    {
      title: "Mall Plus Food Ordering App",
      description: "Developed a customer-facing food ordering app and redesigned the delivery biker app to enhance usability. Integrated Laravel backend for real-time order tracking, authentication, and push notifications.",
      tech: "Flutter, Laravel"
    },
    {
      title: "Yoma Beer New Year Campaign",
      description: "Developed 2D Augmented Reality for AR stickers and virtual try-ons in a festival promotional campaign. Collaborating with cross-functional teams, I conceptualized, designed, and executed immersive AR experiences, enhancing user engagement.",
      tech: "React JS, Nest JS"
    },
    {
      title: "Black Shield Beer New Year Campaign",
      description: "Planned and developed a festival promotional campaign by brainstorming and conceptualizing the campaign algorithm. Collaborated with a cross-functional team to successfully implement and execute the strategy.",
      tech: "React JS, Nest JS"
    },
    {
      title: "Samsung Messenger Real-time Chat System",
      description: "Maintained the Samsung Messenger Real-time Chat System. This system enabled real-time user interaction and in-depth user report analysis. Utilized Laravel on the backend and Vue.js on the frontend.",
      tech: "Laravel, Vue.js"
    },
  ],
  certifications: [
    { name: "Introduction to Android Mobile Application Development", link: "https://coursera.org/share/8267fc018c6753a43d376e6378baaa27" },
    { name: "Version Control", link: "https://www.coursera.org/share/f919e04fbf10f6159d77765e39b4bb74" },
    { name: "Technical Support", link: "https://coursera.org/share/8fcb90fb79b3bcac03e344855b72c76a" },
    { name: "Programming Fundamental", link: "https://coursera.org/share/df95725932f59786115d29537dc1df66" },
    { name: "Responsive Web Design", link: "https://www.freecodecamp.org/certification/Thiha_Ko_Ko/responsive-web-design" },
    { name: "Programming Foundation Fundamental", link: "https://www.linkedin.com/learning/certificates/7bff992ccf7a70beb60317350cd6d4e430b5795d076dc5cc6e99808bccfeee62" }
  ],
  skills: [
    { name: "PHP", level: 4 },
    { name: "JavaScript", level: 4 },
    { name: "Dart", level: 5 },
    { name: "HTML", level: 4 },
    { name: "CSS", level: 4 },
    { name: "Laravel", level: 4 },
    { name: "Flutter", level: 5 },
    { name: "React", level: 4 },
    { name: "MySQL", level: 5 },
    { name: "Firebase", level: 4 },
    { name: "Android", level: 3 }
  ],
  exportToPDF: function() {
    const element = document.getElementById('cv-container');
    if (!element) return;

    html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('Thiha_Ko_Ko_CV.pdf');
    });
  },
  exportToWord: function() {
    // Create DOCX document
    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          // Header with name and title
          new Paragraph({
            text: this.name,
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.LEFT,
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            text: this.title,
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.LEFT,
            spacing: {
              after: 400,
            },
          }),
          
          // Contact info
          new Paragraph({
            text: "CONTACT INFORMATION",
            heading: HeadingLevel.HEADING_3,
            alignment: AlignmentType.LEFT,
            thematicBreak: true,
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({ text: `Email: ${this.contact.email}` }),
          new Paragraph({ text: `Phone: ${this.contact.phone}` }),
          new Paragraph({ text: `Line: ${this.contact.line}` }),
          new Paragraph({ text: `Address: ${this.contact.address}` }),
          new Paragraph({ text: `LinkedIn: ${this.contact.linkedin}` }),
          new Paragraph({ text: `GitHub: ${this.contact.github}` }),
          new Paragraph({ 
            text: `Portfolio: ${this.contact.portfolio}`,
            spacing: {
              after: 400,
            },
          }),
          
          // Summary
          new Paragraph({
            text: "SUMMARY",
            heading: HeadingLevel.HEADING_3,
            alignment: AlignmentType.LEFT,
            thematicBreak: true,
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({ 
            text: this.summary,
            spacing: {
              after: 400,
            },
          }),
          
          // Experience
          new Paragraph({
            text: "EXPERIENCE",
            heading: HeadingLevel.HEADING_3,
            alignment: AlignmentType.LEFT,
            thematicBreak: true,
            spacing: {
              after: 200,
            },
          }),
          ...this.experience.flatMap(exp => [
            new Paragraph({
              text: `${exp.date}`,
              spacing: {
                after: 100,
              },
            }),
            new Paragraph({
              text: exp.title,
              heading: HeadingLevel.HEADING_4,
              spacing: {
                after: 100,
              },
            }),
            new Paragraph({
              text: exp.company,
              spacing: {
                after: 200,
              },
            }),
            ...exp.points.map(point => new Paragraph({
              text: `• ${point}`,
              spacing: {
                after: 100,
              },
            })),
            new Paragraph({
              text: "",
              spacing: {
                after: 200,
              },
            }),
          ]),
          
          // Projects
          new Paragraph({
            text: "PROJECTS",
            heading: HeadingLevel.HEADING_3,
            alignment: AlignmentType.LEFT,
            thematicBreak: true,
            spacing: {
              after: 200,
            },
          }),
          ...this.projects.flatMap(project => [
            new Paragraph({
              text: project.title,
              heading: HeadingLevel.HEADING_4,
              spacing: {
                after: 100,
              },
            }),
            new Paragraph({
              text: project.description,
              spacing: {
                after: 100,
              },
            }),
            new Paragraph({
              text: `Technologies: ${project.tech}`,
              spacing: {
                after: 200,
              },
            }),
          ]),
          
          // Skills
          new Paragraph({
            text: "SKILLS",
            heading: HeadingLevel.HEADING_3,
            alignment: AlignmentType.LEFT,
            thematicBreak: true,
            spacing: {
              after: 200,
            },
          }),
          ...this.skills.map(skill => new Paragraph({
            text: `${skill.name} - ${skill.level}/5`,
            spacing: {
              after: 100,
            },
          })),
          
          // Certifications
          new Paragraph({
            text: "CERTIFICATIONS",
            heading: HeadingLevel.HEADING_3,
            alignment: AlignmentType.LEFT,
            thematicBreak: true,
            spacing: {
              after: 200,
            },
          }),
          ...this.certifications.map(cert => new Paragraph({
            text: cert.name,
            spacing: {
              after: 100,
            },
          })),
        ],
      }],
    });

    // Generate and save document
    Packer.toBlob(doc).then(blob => {
      saveAs(blob, "Thiha_Ko_Ko_CV.docx");
    });
  }
};

export default cvData;