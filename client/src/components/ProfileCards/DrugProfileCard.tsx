import { useState } from "react"
import type { DrugProfile } from "../../types/drug"

const DrugProfileCard = (props: DrugProfile) => {
  const { name, image, drugClass, system, uses, interactions, advice, scientificBackground } = props

  const [activeTab, setActiveTab] =
    useState<"overview" | "interactions" | "advice">("overview")

  const [openAccordion, setOpenAccordion] = useState<number | null>(null)
  const [showModal, setShowModal] = useState(false)

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
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
                setOpenAccordion(null)
              }}
            >
              Overview
            </div>

            <div
              className={`tab ${activeTab === "interactions" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("interactions")
                setOpenAccordion(null)
              }}
            >
              Food Interactions
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
              <p><strong>Drug Class:</strong> {drugClass}</p>
              <p><strong>System:</strong> {system}</p>
              <p><strong>Uses:</strong> {uses.join(", ")}</p>

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
                  className={`accordion ${openAccordion === index ? "active" : ""}`}
                  key={item.foodCategory}
                >
                  <div
                    className="accordion-header"
                    onClick={() => toggleAccordion(index)}
                  >
                    {item.foodCategory}
                    {item.examples && <small>{item.examples}</small>}
                    <span className="accordion-icon">
                      {openAccordion === index ? "−" : "+"}
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

export default DrugProfileCard
