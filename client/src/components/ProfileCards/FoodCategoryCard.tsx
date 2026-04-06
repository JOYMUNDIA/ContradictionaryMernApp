import { useNavigate } from "react-router-dom"
import type { FoodCategory } from "../../mockData/foodCardData";

interface Props extends FoodCategory {}

const FoodCategoryCard = ({ title, image, items }: Props) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/food/${title.toLowerCase().replace(/\s+/g, "-")}`)
  }

  return (
    <div className="food-category-card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>

      <div className="card-content">
        <h1>{title}</h1>
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="button-container">
        <button
          onClick={handleClick}
          className="food-category-contraindication-btn"
        >
          <div className="button-outer">
            <div className="button-inner">
              <span>Drug Contraindications</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}

export default FoodCategoryCard