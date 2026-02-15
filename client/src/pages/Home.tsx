import HeroSearch from '../components/HeroSearch/HeroSearch'
import FoodProfileCard from "../components/ProfileCards/FoodProfileCard";
import DrugProfileCard from "../components/ProfileCards/DrugProfileCard";

import { grapefruitMock } from "../mockData/foodMockData";
import { warfarinMock } from "../mockData/drugMockData";

const Home = () => {
  return (
    <>
      <HeroSearch />
      <FoodProfileCard {...grapefruitMock} />
      <DrugProfileCard {...warfarinMock} />
    </>
  )
}

export default Home
