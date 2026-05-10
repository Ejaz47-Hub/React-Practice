import React from 'react'
import Cards from './components/Cards.jsx'

const App = () => {
    const jobCards = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    posted: "5 days ago",
    role: "Senior UI/UX Designer",
    type: "Part-Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India",
    buttonText: "Apply now",
  },

  {
    id: 2,
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    posted: "2 days ago",
    role: "Frontend Developer",
    type: "Full-Time",
    level: "Mid Level",
    salary: "$95/hr",
    location: "Bangalore, India",
    buttonText: "Apply now",
  },

  {
    id: 3,
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    posted: "1 week ago",
    role: "React Developer",
    type: "Remote",
    level: "Junior Level",
    salary: "$80/hr",
    location: "Hyderabad, India",
    buttonText: "Apply now",
  },

  {
    id: 4,
    company: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    posted: "3 days ago",
    role: "Product Designer",
    type: "Contract",
    level: "Senior Level",
    salary: "$140/hr",
    location: "Pune, India",
    buttonText: "Apply now",
  },

  {
    id: 5,
    company: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    posted: "Today",
    role: "UI Designer",
    type: "Internship",
    level: "Entry Level",
    salary: "$45/hr",
    location: "Delhi, India",
    buttonText: "Apply now",
  },
];
  return (
    <div className='flex flex-wrap box-border p-5'>
      {jobCards.map((itm,idx)=>{
        return <Cards key={idx} company={itm.company} logo={itm.logo} posted={itm.posted} type={itm.type} level={itm.level} salary={itm.salary} location={itm.location}/>
      })}
    </div>
  )
}

export default App