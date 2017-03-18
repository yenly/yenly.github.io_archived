import zaria from '../images/tribute_zaria_app.gif';
import petshare from '../images/petshare_app.gif';

export default function() {
  return [
    {
      name: 'PetShare',
      description: 'PetShare is a web app that helps connect pet seekers to pet owners to share quality time and love of a pet. Do you have a job which involves traveling most of the time? Yenly loves to travel and is always on the go. She felt guilty about leaving her cat, Hobbes, behind and was concerned about his happiness with sitters. Because becoming a pet owner changed her quality of life, she wanted to share these experiences with others.',
      tech_stack: 'Python, Flask, Jinja, PostgresSQL, SQL/SQLAlchemy, HTML/CSS, Bootstrap, JQuery, AngularJS, JavaScript, AJAX, Google Map API, Twilio API',
      github_link: 'https://github.com/yenly/hb_project_petshare',
      demo_link: null,
      img_url: `${petshare}`
    },
    {
      name: 'Random Quote',
      description: 'A simple React app written in ES6 using Firebase database to serve up my favorite quotes.',
      tech_stack: 'ES6, ReactJS, Firebase database, & React-Bootstrap ',
      github_link: 'https://github.com/yenly/random_quote',
      demo_link: 'https://yenly.github.io/random_quote/',
      img_url: ``
    },
    {
      name: 'Tribue to Zaria',
      description: 'A tribute page made with the intention of being an exercise in using advance css techniques.',
      tech_stack: 'HTML, CSS',
      github_link: 'https://github.com/yenly/fcc_practice/tree/master/tribute_zaria',
      demo_link: 'https://yenly.github.io/fcc_practice/tribute_zaria/',
      img_url: `${zaria}`
    }
  ]
}
