import { useState } from "react"
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

        {miniCards.map((card, idx) => {
          const [expanded, setExpanded] = useState(false)

          return (
            <div className="mini-card expandable-card" key={idx}>
              <h3>{card.title}</h3>

              {/* Toggle */}
              <div
                className="expand-toggle"
                onClick={() => setExpanded(!expanded)}
              >
                <span className="expand-toggle-button"></span>
                <span className="expand-toggle-label">
                  {expanded ? "−" : "+"}
                </span>
              </div>

              <ul>
                {card.items.map((drug, index) => {
                  // show all if expanded, otherwise only first item
                  if (!expanded && index > 0) return null

                  return (
                    <li key={index}>
                      {drug}
                    </li>
                  )
                })}

                {!expanded && card.items.length > 1 && (
                  <li className="show-more">...</li>
                )}
              </ul>

              {card.link && (
                <div className="button-container">
                  <a href={card.link}>
                    <button className="drug-category-contraindication-btn">
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
          )
        })}
      </div>
    </div>
  )
}

export default DrugSystemCard