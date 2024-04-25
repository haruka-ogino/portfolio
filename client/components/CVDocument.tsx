export default function CVDocument() {
  const pdfUrl = '/Haruka-Ogino-CV.pdf'
  return (
    <div>
      {/* <iframe
        title="PDF Viewer"
        src={pdfUrl}
        style={{ width: '100%', height: '100vh', border: 'none' }}
      /> */}
      <p>{pdfUrl}</p>
    </div>
  )
}
