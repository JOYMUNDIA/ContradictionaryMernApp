import { useParams } from "react-router-dom";
import { useState } from "react";
import FoodProfileCard from "../components/ProfileCards/FoodProfileCard";
import { foodCategoryDetails } from "../mockData/foodCategoryDetails";

const FoodCategoryPage = () => {
  const { category } = useParams();
  const [_activeTab, _setActiveTab] = useState("overview");

  const data = category ? foodCategoryDetails[category] : undefined;
  if (!data) return <div>Category not found</div>;

  return (
    <div className="background">
      <div className="main-container dynamic-category">

        {/* Header */}
        <div className="header-bar">
          <img src={data.image} alt={data.title} />
          <h1 className="header-title">{data.title}</h1>
        </div>

        <div className="card-row">
          <div className="card grey-card">
            <div className="card-content">

              {/* SEARCH */}
              <div className="searchbar">
                <div className="HeroSearchInputContainer food-hero-search-input-container">
                  <input
                    placeholder="🔍︎ Search by Food.."
                    className="input"
                    type="text"
                  />
                </div>
              </div>

              {/* OVERVIEW CARD using FoodProfileCard */}
              {data.hasOverview && (
                <div className="overview-card">
                    <FoodProfileCard
                    id={category || "unknown-category"}
                    name={data.title}
                    image={data.image}
                    scientificName={data.overview?.scientificClassification || ""}
                    forms={data.overview?.commonForms || []}
                    nutrients={data.overview?.nutritionalHighlights || []}
                    effect={data.overview?.effect || data.overview?.description || "Overview not available."}
                    interactions={data.overview?.interactions || []}
                    advice={data.overview?.advice || []}
                    scientificBackground={data.overview?.scientificBackground || []}
                    />
                </div>
                )}

              {/* SUBTITLE */}
              <div className="sub-title">
                Select an Item to learn more...
              </div>

              {/* ITEMS GRID */}
              <div className="card-row">
                {data.items.map((item, idx) => (
                  <div className="food-category-card" key={idx}>
                    <div className="card-image">
                      <img src={item.image} alt={item.name} />
                    </div>

                    <div className="card-content">
                      <h1>{item.name}</h1>
                    </div>

                    <div className="button-container">
                      <button className="food-category-contraindication-btn">
                        <div className="button-outer">
                          <div className="button-inner">
                            <span>Learn More...</span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FoodCategoryPage;