// src/components/ProfileCards/DrugSystemCard.tsx
import type { DrugSystem } from "../../mockData/drugCardData"

interface Props extends DrugSystem {}

const DrugSystemCard = ({ system, image, miniCards }: Props) => {
  return (
    <div className="drug-system-card">
      <div className="card-image">
        <img src={image} alt={system} />
      </div>
      <div className="card-content">
        <h2>{system}</h2>

        {miniCards.map((card, idx) => (
          <div className="mini-card expandable-card" key={idx}>
            <h3>{card.title}</h3>

            {/* Toggle button to expand cards */}
            <div className="expand-toggle">
              <input type="checkbox" className="expand-toggle-input" aria-label="Expand" />
              <span className="expand-toggle-button"></span>
              <span className="expand-toggle-label">+</span>
            </div>

            <ul>
              {card.items.map((drug, index) => (
                <li key={index} className={index > 0 ? "extra-item" : ""}>
                  {drug}
                </li>
              ))}
              {card.items.length > 3 && <li className="show-more">...</li>}
            </ul>

            {card.link && (
              <div className="button-container">
                <a href={card.link}>
                  <button className="drug-category-contraindication-btn" role="button">
                    <div className="button-outer">
                      <div className="button-inner">
                        <span>Food Contraindications</span>
                      </div>
                    </div>
                  </button>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DrugSystemCard
