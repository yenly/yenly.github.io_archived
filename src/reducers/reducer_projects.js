import zaria from '../images/tribute_zaria_app.gif';

console.log(zaria);

export default function() {
  return [
    {
      name: 'PetShare',
      description: 'PetShare is a web app that helps connect pet seekers to pet owners to share quality time and love of a pet. Do you have a job which involves traveling most of the time? Yenly loves to travel and is always on the go. She felt guilty about leaving her cat, Hobbes, behind and was concerned about his happiness with sitters. Because becoming a pet owner changed her quality of life, she wanted to share these experiences with others.',
      tech_stack: 'Application: Python, Flask, Jinja, PostgresSQL, SQL/SQLAlchemy APIs: Google Map, Twilio Front-End: HTML/CSS, Bootstrap, JQuery, Angularjs, JavaScript, AJAX',
      github_link: 'https://github.com/yenly/hb_project_petshare',
      demo_link: '',
      img_url: ''
    },
    {
      name: 'Tribue to Zaria',
      description: 'A tribute page made with the intention of being an exercise in using advance css techniques.',
      tech_stack: 'HTML, CSS',
      github_link: 'https://github.com/yenly/fcc_practice/tree/master/tribute_zaria',
      demo_link: 'https://yenly.github.io/fcc_practice/tribute_zaria/',
      img_url: `${zaria}`
      // img_url: {zaria}
    }
  ]
}
