import { useParams } from 'react-router-dom'
import { blogEntries } from './Blog'
import { BlogEntry } from '../../models/blog'
export default function BlogPage() {
  const { entry } = useParams()

  if (entry) {
    const id = parseInt(entry) - 1
    const blog: BlogEntry = blogEntries[id]
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
              {blog.images && blog.images.length > 0 && (
                <figure>
                  <img
                    src={blog.images[0].link}
                    alt={blog.images[0].description}
                  />
                  <figcaption>{blog.images[0].description}</figcaption>
                </figure>
              )}
            </div>
          </div>
        </section>
      </>
    )
  }
}
