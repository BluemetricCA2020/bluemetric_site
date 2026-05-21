import { useParams, Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { getPost } from '../content'
import Footer from '../components/layout/Footer'

function renderBody(body: string): string {
  return body
    .split('\n\n')
    .map(block => {
      if (block.startsWith('## ')) return `<h2>${block.slice(3)}</h2>`
      if (block.startsWith('### ')) return `<h3>${block.slice(4)}</h3>`
      if (block.startsWith('> ')) return `<blockquote>${block.replace(/^> /gm, '').replace(/\n/g, '<br>')}</blockquote>`
      const imgMatch = block.match(/^!\[([^\]]*)\]\(([^)]+)\)$/)
      if (imgMatch) return `<figure class="blog-post-figure"><img src="${imgMatch[2]}" alt="${imgMatch[1]}" /></figure>`
      return `<p>${block
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/_(.+?)_/g, '<em>$1</em>')
        .replace(/\n/g, '<br />')
      }</p>`
    })
    .join('\n')
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPost(slug) : undefined
  useDocumentTitle(post ? `${post.title} | Bluemetric` : 'Bluemetric')
  useScrollAnimation()

  if (!post) {
    return (
      <>
        <section className="blog-post-not-found">
          <p>Article not found. <Link to="/research">Back to Research</Link></p>
        </section>
        <Footer />
      </>
    )
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <>
      <article className="blog-post">
        <div className="blog-post-inner">
          <div className="blog-post-header-row">
            <Link to="/research" className="blog-post-back">← Back to Research</Link>
            <div className="research-tag">{post.tag}</div>
          </div>
          <h1 className="blog-post-title">{post.title}</h1>
          <p className="blog-post-meta">{post.author} · {formattedDate}</p>
          <div
            className="blog-post-body"
            dangerouslySetInnerHTML={{ __html: renderBody(post.body) }}
          />
        </div>
      </article>
      <Footer />
    </>
  )
}
