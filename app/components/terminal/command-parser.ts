export class CommandParser {
    static execute(command: string): string {
      const cmd = command.toLowerCase().trim();
  
      switch (cmd) {
        case "help":
          return `Available commands:
    resume      - View complete resume
    about       - About DhineshKumar
    experience  - Work experience
    education   - Educational background
    skills      - Technical skills
    contact     - Contact information
    clear       - Clear terminal
    exit        - Exit terminal`;
  
        case "resume":
          return `
  ╔════════════════════════════════════════════════════════════════════════════╗
  ║                            DHINESHKUMAR                                    ║
  ║                        Product Engineer & Architect                        ║
  ╚════════════════════════════════════════════════════════════════════════════╝
  
  ABOUT
  ─────
  A seasoned product engineer with over 15 years of experience in developing 
  scalable, reliable backend solutions. Has a proven track record of leading 
  teams to build high-quality products that meet and exceed user expectations.
  
  EXPERIENCE
  ──────────
  ▶ Architect
    Declarative Systems Pvt Ltd - Remote
    September 2022 - Present
  
  ▶ Senior Software Engineer
    BlockFi, Inc. - Remote
    January 2021 - August 2022
  
  ▶ Backend Architect
    One Championship Pvt Ltd - Bangalore
    November 2018 - June 2021
  
  ▶ Lead Engineer Backend
    Bombinate Technologies Pvt Ltd - Bangalore
    May 2016 - October 2018
  
  ▶ Senior Erlang Engineer
    Nimbuzz Internet India Pvt Ltd - Gurugram
    April 2013 - April 2016
  
  ▶ Lead Engineer
    Samsung India Software Operations Pvt Ltd - Bangalore
    July 2007 - March 2013
  
  EDUCATION
  ─────────
  ▶ National Institute of Technology, Warangal
    Bachelor of Technology
    2003 - 2007
    Electronics and Communication Engineering
  
  SKILLS
  ───────
  ▶ Programming Languages
    • Erlang/OTP
    • Elixir
    • Nodejs
    • Javascript
    • Typescript
    • Go
  
  ▶ Cloud Services
    • Amazon Web Services
    • Microsoft Azure
  
  ▶ Database Technologies
    • MySQL
    • MongoDB
    • Hasura/GraphQL
    • DynamoDB
    • Mnesia
    • Redis
    • Memcache
  
  CONTACT
  ───────
  📧 dhinesh.ravi@gmail.com
  📱 (91) 8826239556
  📍 Bangalore
  
  Type 'help' to see other available commands.`;
  
        case "about":
          return `DhineshKumar
  A seasoned product engineer with over 15 years of experience in developing scalable, reliable backend solutions.
  Has a proven track record of leading teams to build high-quality products that meet and exceed user expectations.
  Adept at working in large-scale environments with a strong focus on aligning technical decisions with business objectives.`;
  
        case "experience":
          return `Work Experience:
  
  Architect | Declarative Systems Pvt Ltd - Remote
  September 2022 - Present
  
  Senior Software Engineer | BlockFi, Inc. - Remote
  January 2021 - August 2022
  
  Backend Architect | One Championship Pvt Ltd - Bangalore
  November 2018 - June 2021
  
  Lead Engineer Backend | Bombinate Technologies Pvt Ltd - Bangalore
  May 2016 - October 2018
  
  Senior Erlang Engineer | Nimbuzz Internet India Pvt Ltd - Gurugram
  April 2013 - April 2016
  
  Lead Engineer | Samsung India Software Operations Pvt Ltd - Bangalore
  July 2007 - March 2013`;
  
        case "education":
          return `Education:
  
  National Institute of Technology, Warangal
  Bachelor of Technology
  2003 - 2007
  Electronics and Communication Engineering`;
  
        case "skills":
          return `Technical Skills:
  
  Programming Languages:
  - Erlang/OTP
  - Elixir
  - Nodejs
  - Javascript
  - Typescript
  - Go
  
  Cloud Services:
  - Amazon Web Services
  - Microsoft Azure
  
  Database Technologies:
  - MySQL
  - MongoDB
  - Hasura/GraphQL
  - DynamoDB
  - Mnesia
  - Redis
  - Memcache`;
  
        case "contact":
          return `Contact Information:
  
  Email: dhinesh.ravi@gmail.com
  Phone: (91) 8826239556
  Location: Bangalore`;
  
        default:
          return `Command not found: ${command}
  Type 'help' to see available commands`;
      }
    }
  }
  