// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

// Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#E4E4E4',
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
// })

export default function CVDocument() {
  const pdfUrl = '/Haruka-Ogino-CV.pdf'
  return (
    <div>
      <iframe
        title="PDF Viewer"
        src={pdfUrl}
        style={{ width: '100%', height: '100vh', border: 'none' }}
      />
    </div>
  )
}
