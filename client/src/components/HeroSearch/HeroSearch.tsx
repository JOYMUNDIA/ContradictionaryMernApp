import foodHeroImage from '../../assets/HeroImages/food-hero-image.jpeg'
import medsHeroImage from '../../assets/HeroImages/meds-hero-image.jpg'

const HeroSearch = () => {
  return (
    <div className="background">
      <div className="main-container">
        {/* Black Header */}
        <div className="header-bar">
          <h1 className="header-title">Contra-dictionary</h1>
        </div>

        {/* Subtitle */}
        <div className="sub-title">
          Discover which foods are sabotaging your meds...
        </div>

        {/* Cards Row */}
        <div className="card-row">
          {/* Card 1 */}
          <div className="card grey-card">
            <div className="card-content">
              <div className="HeroSearchInputContainer food-hero-search-input-container">
                <input
                  placeholder="🔍︎ Search by Food.."
                  id="foodSearchInput"
                  className="input"
                  name="text"
                  type="text"
                />
              </div>
              <img
                src={foodHeroImage}
                alt="Food"
                className="card-image"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="card grey-card">
            <div className="card-content">
              <div className="HeroSearchInputContainer meds-hero-search-input-container">
                <input
                  placeholder="🔍︎ Search by Meds..."
                  id="medSearchInput"
                  className="input"
                  name="text"
                  type="text"
                />
              </div>
              <img
                src={medsHeroImage}
                alt="Meds"
                className="card-image"
              />
            </div>
          </div>
        </div>
        {/* end hero section */}
      </div>
    </div>
  )
}

export default HeroSearch
