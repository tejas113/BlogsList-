import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {details} = props
  const {id} = details
  return (
    <li className="listED">
      <BlogItem items={details} key={id} />
    </li>
  )
}

export default BlogList
