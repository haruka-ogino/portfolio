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
  })

  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          CV
        </Text>
        <Text style={styles.text} fixed>
          I am a former civil engineer who has found a new passion for software
          engineering. My time as a civil engineer has allowed me to develop
          excellent communication, problem-solving, and time-management skills.
          I worked on major infrastructure construction projects, being fully
          responsible for multiple sites simultaneously. Most recently, I have
          been undergoing a full-stack web development course at the Dev
          Academy. I have made projects using JavaScript and TypeScript
          alongside React, Express.js, and Knex SQLite3.{' '}
        </Text>
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
