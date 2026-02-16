// src/components/ProfileCards/FoodCategoryCard.tsx
import type { FoodCategory } from "../../mockData/foodCardData";

interface Props extends FoodCategory {}

const FoodCategoryCard = ({ title, image, items, link }: Props) => {
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

      {link && (
        <div className="button-container">
          <a href={link}>
            <button className="food-category-contraindication-btn" role="button">
              <div className="button-outer">
                <div className="button-inner">
                  <span>Drug Contraindications</span>
                </div>
              </div>
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default FoodCategoryCard;
