import useHomeModel from "./Home/model"
import HomeView from "./Home/view"

export default function HomeScreen() {
  const HomeModel = useHomeModel()

  return <HomeView {...HomeModel}/>
}