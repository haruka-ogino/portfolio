import { Page, Text, Document, StyleSheet } from '@react-pdf/renderer'
export default function CV() {
  const styles = StyleSheet.create({
    body: { paddingTop: 35, paddingHorizontal: 35 },
    title: { fontSize: 24, textAlign: 'center' },
    text: { margin: 12, fontSize: 14, textAlign: 'justify' },
    header: {
      marginBottom: 20,
      fontSize: 12,
      textAlign: 'justify',
      color: 'grey',
    },
    pageNumber: {
      position: 'absolute',
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
    },
    point: { margin: 2, fontSize: '11px', textAlign: 'justify' },
  })

  const CV = {
    about:
      'I am a former civil engineer who has found a new passion for software engineering. My time as a civil engineer has allowed me to develop excellent communication, problem-solving, and time-management skills. I worked on major infrastructure construction projects, being fully responsible for multiple sites simultaneously. Most recently, I have been undergoing a full-stack web development course at the Dev Academy. I have made projects using JavaScript and TypeScript alongside React, Express.js, and Knex SQLite3.',
  }

  const education = [
    {
      school: 'Dev Academy Aotearoa',
      certification:
        'NZQA Level 6 Certificate in Applied Software Development, Jan - May 2024',
      bulletPoints: [
        'Intensive 17-week long course focused on full stack web development.',
        'Developed proficiency in JavaScript and TypeScript for front-end development, using the React framework.',
        'Gained experience in server-side programming with Express.js, and database management using Knex.js with SQLite.',
        'Implemented authentication and authorisation features using Auth0 and JSON Web Tokens.',
        'Completed multiple projects in-class as well as personal ones, using frameworks outlined above, both collaboratively and independently.',
      ],
    },
  ]

  const work = [
    {
      title: 'Temporary Site Administrator',
      company: 'Leighs Construction',
      bulletPoints: [
        'Assemble QA (Quality Assurance) packages.',
        'Supply management and upkeep.',
        'Management of H&S (Health & Safety) documentation.',
      ],
      date: 'Jul 2023 - Jan 2024 ',
    },
    {
      title: 'Overseas Experience in Japan',
      bulletPoints: [
        'Language School Student',
        'I also worked while travelling as at a café, in a hotel, and as an au pair.',
      ],
      date: 'Oct 2022 - Jun 2023',
    },
    {
      title: 'Site Engineer',
      company: 'HEB Construction',
      bulletPoints: [
        'Production of H&S and quality assurance documentation.',
        'Daily organisation of worksite.',
        'Produced accurate site diary with quantities, to be used in monthly measures.',
        'Managed multiple sub-contractors simultaneously.',
        'Oversaw graduate engineers.',
      ],
      date: 'Mar - Sep 2022 ',
    },
    {
      title: 'Temporary Operations Administrator',
      company: 'Madison Recruitment for Meadowlark Jewellery',
      bulletPoints: [
        'Coordination of the jewellery making process, quality control and inventory.',
        'Cin7 project management.',
        'Assisted with packing and dispatch of orders.',
      ],
      date: 'Jan - Mar 2022 ',
    },
    {
      title: 'Geotechnical Engineer',
      company: 'Pattle Delamore Partners Ltd',
      bulletPoints: [
        'Carried out site visits to undertake ground investigations.',
        'Managed my time between projects both in-office and on site.',
        'Modelled ground profiles on several different software.',
      ],
      date: 'Jul - Nov 2021 ',
    },
    {
      title: 'Graduate Site Engineer',
      company: 'Fulton Hogan for Northern Corridor Improvements (NCI)',
      bulletPoints: [
        'Production of H&S and QA documentation prior to commencement of works.',
        'Daily organisation of multiple worksites; ground testing, land surveys, third-party testing and estimated daily quantities.',
        'Produced accurate site diary with quantities, to be used in monthly measures.',
        'Liaised with different disciplines to ensure sequence of works was followed.',
        'Managed design changes from the client on the footpath alignment.',
        'Lead my own worksites and crews by making decisions as unexpected issues arose.',
      ],
      date: 'Jan 2020 - Jun 2021',
    },
    {
      title: 'Student Engineer',
      company: 'Fulton Hogan for Glendowie Branch Sewer Upgrade',
      bulletPoints: [
        'Managed material take-offs and stocktakes.',
        'Executed environmental audits around the sites and hold points with designers',
      ],
      date: 'Jul - Oct 2019',
    },
    // { title: '', company: '', bulletPoints: '', date: '' },
  ]

  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header}>CV</Text>
        <Text style={styles.text}>{CV.about}</Text>
        <div>
          {work.map((experience, i) => (
            <div className="experience" key={i}>
              <Text style={styles.text} fixed>
                {experience.date}
              </Text>
              <div>
                <Text style={styles.text} fixed>
                  {experience.title}
                </Text>
                {experience.company && (
                  <Text style={styles.text} fixed>
                    {experience.company}
                  </Text>
                )}
                <ul>
                  {experience.bulletPoints.map((point, i) => (
                    <Text
                      style={styles.point}
                      key={i}
                    >{`\u2022 ${point}`}</Text>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} of ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  )
}
