import { useState } from "react"
import HeroSearch from "../components/HeroSearch/HeroSearch"
import FoodProfileCard from "../components/ProfileCards/FoodProfileCard"
import DrugProfileCard from "../components/ProfileCards/DrugProfileCard"
import FoodCategoryCard from "../components/ProfileCards/FoodCategoryCard"
import DrugSystemCard from "../components/ProfileCards/DrugSystemCard"

import { grapefruitMock } from "../mockData/foodMockData"
import { warfarinMock } from "../mockData/drugMockData"
import { foodCategoriesMock } from "../mockData/foodCardData"
import { drugSystemsMock } from "../mockData/drugCardData"

import Footer from "../components/Footer/Footer"

const Home = () => {
  const [view, setView] = useState<"food" | "drug">("food")

  return (
    <>
      <HeroSearch />

      <div className="profile-card-container-parent">
        <div className="sub-title">
          <h1>Common Food Drug Contraindications</h1>
        </div>
        <FoodProfileCard {...grapefruitMock} />
        <DrugProfileCard {...warfarinMock} />
      </div>

      <div className="choice-category-section">
        <div className="choices">
          <div className="instruction-radio-search-choice">
            <p>Please choose a search method that works best for you...</p>
          </div>

          <div className="hero-button-section">
            <button
              className={`toggle-button ${view === "food" ? "active" : ""}`}
              onClick={() => setView("food")}
            >
              <div className="button-outer">
                <div className="button-inner">
                  <span>
                    <span className="emoji">🍔 &nbsp;</span>Search by Food...
                  </span>
                </div>
              </div>
            </button>

            <button
              className={`toggle-button ${view === "drug" ? "active" : ""}`}
              onClick={() => setView("drug")}
            >
              <div className="button-outer">
                <div className="button-inner">
                  <span>
                    <span className="emoji">💊 &nbsp;</span>Search by Meds...
                  </span>
                </div>
              </div>
            </button>
          </div>

          {/* Food Cards */}
          {view === "food" && (
            <div className="food-card-row">
              {foodCategoriesMock.map((cat, idx) => (
                <FoodCategoryCard key={idx} {...cat} />
              ))}
            </div>
          )}

          {/* Drug Cards */}
          {view === "drug" && (
            <div className="drug-card-row">
              {drugSystemsMock.map((system, idx) => (
                <DrugSystemCard key={idx} {...system} />
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home
