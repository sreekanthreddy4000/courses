import './index.css'

const CourseItem = props => {
  const {courseItemDetails} = props
  const {name, imageUrl, description} = courseItemDetails

  return (
    <div>
      <img src={imageUrl} alt={name} className="image" />
      <h1 className="heading">{name}</h1>
      <p className="paragraph">{description}</p>
    </div>
  )
}
export default CourseItem
