import './index.css'

const BlogList = props => {
  const {items} = props
  const {title, description, publishedDate} = items
  return (
    <div className="itemCont">
      <div className="itemContHeader">
        <h1 className="headEdit">{title}</h1>
        <p className="paraEdit3">{publishedDate}</p>
      </div>
      <p className="paraEdit2">{description}</p>
    </div>
  )
}

export default BlogList
