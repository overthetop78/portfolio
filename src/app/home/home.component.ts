import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  SavePDF() {
    let doc = new jsPDF();
    doc = this.createCV(doc);
    doc.save('Truche_Gael_CV.pdf');
  }

  createCV(doc: jsPDF): jsPDF {
    let objectiveHtml = document.getElementById('objective')?.innerHTML;
    let objective = objectiveHtml?.replace(/<[^>]*>/g, '');
    if (objective == null || objective == undefined) {
      objective = '';
    }

    const cv = {
      name: 'Truche Gaël',
      address: '37 rue de Soultz',
      zipCode: '68200',
      city: 'Mulhouse',
      phone: '06 58 75 82 64',
      email: 'overthetop_for_ever@live.fr',
      website: '',
      objective: objective,
      education: [
        {
          school: 'GEFI - Groupe Ecole de Formation Informatique',
          degree: 'Formation Technicien de Service Informatique Option Helpdesk',
          gpa: 'Bac Professionnel',
          date: '2008 - 2009',
        },
        {
          school: 'UHA 4.0 - Université de Haute Alsace',
          degree: 'Formation Développeur Web et Applications',
          gpa: 'Licence Professionnelle',
          date: '2021 - 2023',
        }
      ],
      experience: [
        {
          project: 'MDC - Marre Du Célibat',
          date: '11/2021 - 12/2021',
          description: 'Développement d\'une application mobile de rencontre.',
          technologies: 'Ionic, Angular, NestJS, MariaDB, Docker, Agile',
        },
        {
          project: 'e-ProMoov',
          date: '01/2022 - 02/2022',
          description: 'e-ProMoov est un sous-système en charge de rendre fonctionnelle la surveillance à distance de robots médicaux.',
          technologies: 'Angular, NestJS, C++, MongoDB, MariaDB, Docker, Agile',
        },
        {
          project: 'Steamer',
          date: '04/2022 - 05/2022',
          description: 'Steamer est une application mobile de rencontre entre joueurs de la plate-forme de jeux-vidéo Steam.',
          technologies: 'Ionic, Angular, NestJS, MariaDB, Docker, Agile, OpenID',
        },
        {
          project: 'TUBA - AlterAlsace',
          date: '06/2022 - 07/2022',
          description: 'Le projet consiste à développer une application web et mobile de gestion de l\'énergie de bâtiments administratifs.',
          technologies: 'React Native, VueJS, ExpressJS, MariaDB, Docker, Agile',
        },
      ],
      skills: {
        technologies: [
          "HTML",
          "CSS",
          "JavaScript",
          "PHP",
          "SQL",
          "Java",
          "C#",
          "VB.NET",
        ],
        frameworks: [
          "Angular",
          "React",
          "VueJS",
          "NestJS",
          "Spring",
          "NodeJS",
          "ExpressJS",
        ],
        databases: [
          "MySQL",
          "MariaDB",
          "MongoDB",
          "PostgreSQL",
        ],
        tools: [
          "Git",
          "Jira",
          "Scrum",
          "Agile",
          "UML",
          "Confluence",
        ],
        ide: [
          "Visual Studio",
          "Android Studio",
          "Visual Studio Code",
          "Eclipse",
        ],
        os: [
          "Windows",
          "Linux",
          "MacOS",
          "Android",
          "iOS",
        ],
      },
    };

    // Name
    let firstLine: number = 20;
    let tab:number = 15;
    doc.setFontSize(24);
    doc.setFont('verdana', 'bold');
    doc.text(cv.name, tab, firstLine, { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });

    // Address
    doc.setFontSize(10);
    doc.setFont('verdana', 'normal');
    doc.text(cv.address, tab, firstLine + 6 , { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });
    doc.text(cv.zipCode + ' ' + cv.city, tab, firstLine + 10, { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });

    // Phone
    doc.text(cv.phone, tab, firstLine + 14, { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });

    // Email
    doc.text(cv.email, tab, firstLine + 18, { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });

    // Website
    doc.text(cv.website, tab, firstLine + 22, { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });

    // Objective
    doc.setFontSize(16);
    doc.setFont('verdana', 'bolditalic');
    doc.text('Objectif', tab, firstLine + 30, { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });
    doc.setFontSize(10);
    doc.setFont('verdana', 'normal');
    doc.text(cv.objective, tab, firstLine + 36, { align: 'justify', maxWidth: 180, lineHeightFactor: 1.5 });

    let educationLine = firstLine + 65;
    // Education
    doc.setFontSize(16);
    doc.setFont('verdana', 'bolditalic');
    doc.text('Education', tab, educationLine, { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });
    doc.setFontSize(10);
    doc.setFont('verdana', 'normal');
    cv.education.forEach((education, index) => {
      doc.text(education.degree, tab, educationLine + 8 + (index * 20), { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });
      doc.text(education.school, tab, educationLine + 12 + (index * 20), { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });
      doc.text(education.gpa, tab, educationLine + 16 + (index * 20), { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });
      doc.text(education.date, tab + 100, educationLine + 8 + (index * 20), { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });
    });

    let experienceLine = educationLine + 50;
    // Experience
    doc.setFontSize(16);
    doc.setFont('verdana', 'bolditalic');
    doc.text('Experience', tab, experienceLine, { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });
    cv.experience.forEach((experience, index) => {
      doc.setFontSize(10);
      doc.setFont('verdana', 'italic');
      doc.text(experience.date, tab + 100, experienceLine + 8 + (index * 15), { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });
      doc.setFont('verdana', 'bold');
      doc.text(experience.project, tab, experienceLine + 8 + (index * 15), { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });
      doc.setFont('verdana', 'normal');
      doc.text(experience.description, tab, experienceLine + 12  + (index * 15), { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });
      doc.setFontSize(8);
      doc.text(experience.technologies, tab, experienceLine + 16 + (index * 15), { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });
    });

    let skillsLine = experienceLine + 80;
    // Skills
    doc.setFontSize(16);
    doc.setFont('verdana', 'bolditalic');
    doc.text('Compétences', tab, skillsLine, { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });

    let technologies: string = '';
    cv.skills.technologies.forEach((technology, index) => {
      technologies += technology;
      if (index < cv.skills.technologies.length - 1) {
        technologies += ', ';
      }
    });
    doc.setFontSize(12);
    doc.setFont('verdana', 'bold');
    doc.text('Technologies', tab, skillsLine + 10, { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });
    doc.setFontSize(10);
    doc.setFont('verdana', 'italic');
    doc.text(technologies, tab, skillsLine + 14, { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });

    let frameworks: string = '';
    cv.skills.frameworks.forEach((framework, index) => {
      frameworks += framework;
      if (index < cv.skills.frameworks.length - 1) {
        frameworks += ', ';
      }
    });
    doc.setFontSize(12);
    doc.setFont('verdana', 'bold');
    doc.text('Frameworks', tab, skillsLine + 20, { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });
    doc.setFontSize(10);
    doc.setFont('verdana', 'italic');
    doc.text(frameworks, tab, skillsLine + 24, { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });
    
    let databases: string = '';
    cv.skills.databases.forEach((database, index) => {
      databases += database;
      if (index < cv.skills.databases.length - 1) {
        databases += ', ';
      }
    });
    doc.setFontSize(12);
    doc.setFont('verdana', 'bold');
    doc.text('Bases de données', tab, skillsLine + 30, { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });
    doc.setFontSize(10);
    doc.setFont('verdana', 'italic');
    doc.text(databases, tab, skillsLine + 34, { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });

    let tools: string = '';
    cv.skills.tools.forEach((tool, index) => {
      tools += tool;
      if (index < cv.skills.tools.length - 1) {
        tools += ', ';
      }
    });
    doc.setFontSize(12);
    doc.setFont('verdana', 'bold');
    doc.text('Outils', tab, skillsLine + 40, { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });
    doc.setFontSize(10);
    doc.setFont('verdana', 'italic');
    doc.text(tools, tab, skillsLine + 44, { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });

    let ides: string = '';
    cv.skills.ide.forEach((ide, index) => {
      ides += ide;
      if (index < cv.skills.ide.length - 1) {
        ides += ', ';
      }
    });
    doc.setFontSize(12);
    doc.setFont('verdana', 'bold');
    doc.text('Editeurs et IDE', tab, skillsLine + 50, { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });
    doc.setFontSize(10);
    doc.setFont('verdana', 'italic');
    doc.text(ides, tab, skillsLine + 54, { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });

    let oss: string = '';
    cv.skills.os.forEach((os, index) => {
      oss += os;
      if (index < cv.skills.os.length - 1) {
        oss += ', ';
      }
    });
    doc.setFontSize(12);
    doc.setFont('verdana', 'bold');
    doc.text('Systèmes d\'exploitation', tab, skillsLine + 60, { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });
    doc.setFontSize(10);
    doc.setFont('verdana', 'italic');
    doc.text(oss, tab, skillsLine + 64, { align: 'left', maxWidth: 180, lineHeightFactor: 1.5 });
    return doc;
  }
}
