// Central content config. Replace database URLs with official institutional login links when supplied.
export const UNIVERSITY_URL = "https://www.madonnauniversity.edu.ng/";
export const REPOSITORY_URL = "https://www.madonnauniversity.edu.ng/journals-and-publications/";

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/library-profile", label: "Library Profile" },
  { href: "/databases", label: "Databases" },
];

export const databases = [
  { abbr: "R4L", name: "Research4Life", desc: "Access to academic research and scholarly resources.", url: "https://www.research4life.org/" },
  { abbr: "EBSCO", name: "EBSCOhost", desc: "Academic research platform offering access to scholarly information.", url: "https://about.ebsco.com/products/ebscohost-research-platform" },
  { abbr: "PQ", name: "ProQuest", desc: "Academic research and electronic book resources.", url: "https://about.proquest.com/en/products-services/ProQuest_Central/" },
  { abbr: "AJOL", name: "African Journals Online (AJOL)", desc: "Discover scholarly journals published across Africa.", url: "https://www.ajol.info/index.php/ajol" },
  { abbr: "JSTOR", name: "JSTOR", desc: "Explore scholarly journals, books and primary sources.", url: "https://www.jstor.org/" },
  { abbr: "DOAJ", name: "Directory of Open Access Journals (DOAJ)", desc: "Discover quality open-access scholarly journals.", url: "https://doaj.org/" },
];

export const serviceGroups = [
  { title: "Lending and Circulation", items: [
    { icon: "BookmarkCheck", name: "Reservations", desc: "Reserve library materials so they are set aside for you." },
    { icon: "Repeat", name: "Interlibrary Loan", desc: "Request materials held by other libraries." },
    { icon: "ArrowLeftRight", name: "Checking In and Checking Out", desc: "Borrow and return library materials." } ] },
  { title: "Reference and Information Services", items: [
    { icon: "LifeBuoy", name: "Reference Assistance", desc: "Get help finding and using information resources." },
    { icon: "SearchCheck", name: "Literature Searches", desc: "Support with searching the literature on a topic." },
    { icon: "ListOrdered", name: "Bibliographies", desc: "Help compiling lists of sources on a subject." } ] },
  { title: "Current Awareness and Information Dissemination", items: [
    { icon: "Bell", name: "Current Awareness Service (CAS)", desc: "Keeps users informed of new publications and developments." },
    { icon: "Send", name: "Selective Dissemination of Information (SDI)", desc: "Information matched to users' individual interests." } ] },
  { title: "Indexing and Abstracting", items: [
    { icon: "Tags", name: "Indexing Services", desc: "Organised access to the contents of publications." },
    { icon: "FileText", name: "Abstracting Services", desc: "Concise summaries of scholarly works." } ] },
  { title: "Community, Education and Support", items: [
    { icon: "Megaphone", name: "Digital Marketing", desc: "Promoting library resources and services online." },
    { icon: "MonitorSmartphone", name: "Digital Searching", desc: "Assistance searching electronic resources." },
    { icon: "Newspaper", name: "Serial Services", desc: "Access to journals, magazines and other periodicals." },
    { icon: "Copy", name: "Photocopy Services", desc: "Photocopying of library materials." },
    { icon: "Printer", name: "Printing Services", desc: "Printing support for library users." } ] },
];

export const missions = [
  { title: "Advancing Academic Excellence", text: "We provide comprehensive, authoritative, and accessible resources—both physical and digital—that support rigorous scholarship, research, and the curricula of the University." },
  { title: "Fostering Total Person Formation", text: "We create an inclusive and welcoming environment that encourages intellectual curiosity, critical thinking, and lifelong learning, supporting the development of the whole person." },
  { title: "Promoting Integrity and Humility", text: "We uphold the highest standards of academic integrity and intellectual freedom. Through our services and collections, we model and encourage ethical scholarship, responsible citizenship, and a spirit of humble service to others." },
  { title: "Serving with Compassion", text: "We provide user-centered services delivered by a dedicated staff who treat every student, faculty, and researcher with dignity and respect, ensuring equitable access to information for all." },
];

export const VISION = "To be the intellectual heart of Madonna University—a dynamic center of discovery and learning that empowers the university community to achieve the highest standards of academic excellence while nurturing the spiritual and ethical formation of the total person.";
export const MISSION_INTRO = "In alignment with Madonna University's dedication to defining the path of academic and spiritual growth, the Library commits to:";
