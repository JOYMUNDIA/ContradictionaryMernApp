import { useState } from "react"
import type { FoodProfile } from "../../types/food"

const FoodProfileCard = (props: FoodProfile) => {
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
  } = props

  const [activeTab, setActiveTab] =
    useState<"overview" | "interactions" | "advice">("overview")

  // Track which accordions are open
  const [openAccordions, setOpenAccordions] = useState<number[]>([])
  const [showModal, setShowModal] = useState(false)

  // Toggle accordion open/close
  const toggleAccordion = (index: number) => {
    setOpenAccordions((prev) =>
      prev.includes(index) ? [] : [index] // single-open behavior like static
    )
  }

  return (
    <div className="profile-card-container">
      <div className="profile-card">
        <div className="profile-card-content">

          {/* Header */}
          <div className="header">
            <h2>{name} Profile</h2>
            <img src={image} alt={name} />
          </div>

          {/* Tabs */}
          <div className="tabs">
            <div
              className={`tab ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("overview")
                setOpenAccordions([])
              }}
            >
              Overview
            </div>
            <div
              className={`tab ${activeTab === "interactions" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("interactions")
                setOpenAccordions([])
              }}
            >
              Drug Interactions
            </div>
            <div
              className={`tab ${activeTab === "advice" ? "active" : ""}`}
              onClick={() => setActiveTab("advice")}
            >
              Patient Advice
            </div>
          </div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="tab-content active">
              <p><strong>Scientific Name:</strong> {scientificName}</p>
              <p><strong>Common Forms:</strong> {forms.join(", ")}</p>
              <p><strong>Nutritional:</strong> {nutrients.join(", ")}</p>
              <p><strong>Effect:</strong> {effect}</p>

              <button
                className="btn"
                role="button"
                onClick={() => setShowModal(true)}
              >
                <div className="button-outer">
                  <div className="button-inner">
                    <span>
                      <span className="emoji">🧪</span> View Scientific Background
                    </span>
                  </div>
                </div>
              </button>
            </div>
          )}

          {/* Interactions Tab */}
          {activeTab === "interactions" && (
            <div className="tab-content active">
              {interactions.map((item, index) => (
                <div
                  className={`accordion ${openAccordions.includes(index) ? "active" : ""}`}
                  key={item.drugClass}
                >
                  <div
                    className="accordion-header"
                    onClick={() => toggleAccordion(index)}
                  >
                    {item.drugClass}{" "}
                    {item.category && <small>{item.category}</small>}
                    <span className="accordion-icon">
                      {openAccordions.includes(index) ? "−" : "+"}
                    </span>
                  </div>

                  <div className="accordion-body">
                    <p><strong>Interaction:</strong> {item.interaction}</p>
                    <p><strong>Layman Explanation:</strong> {item.layman}</p>
                    <p><strong>Scientific Explanation:</strong> {item.scientific}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Advice Tab */}
          {activeTab === "advice" && (
            <div className="tab-content active">
              <ul>
                {advice.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>

      {/* Scientific Background Modal */}
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

            {scientificBackground.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default FoodProfileCard
