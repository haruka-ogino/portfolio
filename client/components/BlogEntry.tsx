import { useParams } from 'react-router-dom'

export default function BlogEntry() {
  const { entry } = useParams()
  // const entryStr = entry.toString()
  return (
    <>
      <section>
        <h1>Blog Entry {entry}</h1>
      </section>
    </>
  )
}
