import { useParams } from 'react-router-dom'
import { blogEntries } from './Blog'
export default function BlogEntry() {
  const { entry } = useParams()

  if (entry) {
    const id = parseInt(entry) - 1
    return (
      <>
        <section>
          <div className="blog">
            <div className="blog-inside">
              <h3>{blogEntries[id].title}</h3>
              <em>posted on {blogEntries[id].date}</em>
              <p
                dangerouslySetInnerHTML={{
                  __html: blogEntries[id].text.replace(/\n/g, '<br>'),
                }}
              />
            </div>
          </div>
        </section>
      </>
    )
  }
}
