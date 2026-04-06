import { useState } from "react"
import type { FoodProfile } from "../../types/food"

type Props = FoodProfile & {
  items?: { id: string; name: string }[]
}

const FoodProfileCard = (props: Props) => {
  const {
    name,
    image,
    scientificName,
    forms,
    nutrients,
    effect,
    interactions,
    advice,
    scientificBackground,
    items = [],
  } = props

  const [activeTab, setActiveTab] = useState<
    "overview" | "interactions" | "advice" | "items"
  >("overview")

  const [openAccordions, setOpenAccordions] = useState<number[]>([])
  const [showModal, setShowModal] = useState(false)

  const toggleAccordion = (index: number) => {
    setOpenAccordions((prev) =>
      prev.includes(index) ? [] : [index]
    )
  }

  return (
    <div className="profile-card-container">
      <div className="profile-card">
        <div className="profile-card-content">

          {/* Header */}
          <div className="header">
            <h2>{name} Overview Profile</h2>
            <img src={image} alt={name} />
          </div>

          {/* Tabs */}
          <div className="tabs">
            {scientificName || forms.length || nutrients.length || effect ? (
              <div
                className={`tab ${activeTab === "overview" ? "active" : ""}`}
                onClick={() => {
                  setActiveTab("overview");
                  setOpenAccordions([]);
                }}
              >
                Overview
              </div>
            ) : null}

            {interactions.length > 0 && (
              <div
                className={`tab ${activeTab === "interactions" ? "active" : ""}`}
                onClick={() => {
                  setActiveTab("interactions");
                  setOpenAccordions([]);
                }}
              >
                Drug Interactions
              </div>
            )}

            {advice.length > 0 && (
              <div
                className={`tab ${activeTab === "advice" ? "active" : ""}`}
                onClick={() => setActiveTab("advice")}
              >
                Patient Advice
              </div>
            )}

            {items.length > 0 && (
              <div
                className={`tab ${activeTab === "items" ? "active" : ""}`}
                onClick={() => setActiveTab("items")}
              >
                Items
              </div>
            )}
          </div>

          {/* OVERVIEW */}
          {activeTab === "overview" && (
            <div className="tab-content active">
              <p><strong>Scientific Name:</strong> {scientificName}</p>
              <p><strong>Common Forms:</strong> {forms.join(", ")}</p>
              <p><strong>Nutritional Highlights:</strong> {nutrients.join(", ")}</p>
              <p><strong>Effect:</strong> {effect}</p>

              {scientificBackground.length > 0 && (
              <button className="btn" onClick={() => setShowModal(true)}>
                <div className="button-outer">
                  <div className="button-inner">
                    <span><span className="emoji">🧪</span> View Scientific Background</span>
                  </div>
                </div>
              </button>
            )}

            </div>
          )}

          {/* INTERACTIONS */}
          {activeTab === "interactions" && (
            <div className="tab-content active">
              {interactions.map((item, index) => (
                <div
                  className={`accordion ${openAccordions.includes(index) ? "active" : ""}`}
                  key={index}
                >
                  <div
                    className="accordion-header"
                    onClick={() => toggleAccordion(index)}
                  >
                    {item.drugClass} {item.category && <small>{item.category}</small>}
                    <span className="accordion-icon">
                      {openAccordions.includes(index) ? "−" : "+"}
                    </span>
                  </div>

                  <div className="accordion-body">
                    <p><strong>Interaction:</strong> {item.interaction}</p>
                    <p><strong>Layman:</strong> {item.layman}</p>
                    <p><strong>Scientific:</strong> {item.scientific}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ADVICE */}
          {activeTab === "advice" && (
            <div className="tab-content active">
              <ul>
                {advice.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
          )}

          {/* ITEMS TAB (matches static design) */}
          {activeTab === "items" && (
            <div className="tab-content active">
              <div className="disclaimer-box">
                <strong>Disclaimer:</strong> This is a representative list and not exhaustive.
              </div>

              <ul>
                {items.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="profileModal" onClick={() => setShowModal(false)}>
          <div
            className="profileModal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="profileModal-close"
              onClick={() => setShowModal(false)}
            >
              <span className="close-styling-class">×</span>
            </span>

            <h3>🧪 Scientific Background</h3>

            {scientificBackground.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default FoodProfileCard