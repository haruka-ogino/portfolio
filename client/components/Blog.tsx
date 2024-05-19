export default function Blog() {
  const blogEntries = [
    {
      title: 'The Growth Mindset',
      date: '10th of May 2024',
      text: "As my bootcamp finished, I realised how much I was able to learn and accomplish.\n\nPrior to bootcamp, we were taught about the Growth Mindset (vs a fixed one). It was then that I realised how much my learning had suffered when I went to university fresh out of highschool to study Civil Engineering. I didn't believe that I could learn the complex concepts that make up structural engineering, so I didn't learn these. I often gave up prior to even trying to understand something.\n\nHowever, having learnt about the Growth Mindset prior to the beginning of bootcamp, I started practicing it. I told myself that things didn't need to be easy for me to understand them, and that I could work hard to learn things.\n\nStarting bootcamp with this mindset, I was able to tackle daunting concepts and get the most learning that I could.\n\nMy outlook on education and learning has forever changed following this experience.\n\nI will keep putting my Growth Mindset to practice and encourage others to do the same.",
    },
  ]
  return (
    <section className="text" id="blog-entries">
      <h2>Blog Entries</h2>
      <div className="blog-container">
        {blogEntries.map((blog, i) => (
          <div className="blog" key={i}>
            <div className="blog-inside">
              <h3>{blog.title}</h3>
              <em>posted on {blog.date}</em>
              <p
                dangerouslySetInnerHTML={{
                  __html: blog.text.replace(/\n/g, '<br>'),
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
