import { useState } from "react"
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu"
import Header from "../../components/Header/Header"
import "./Home.scss"

export default function Home(){
	const [category, setCategory] = useState<string>("All");
	return (
		<>
			<Header />
			<ExploreMenu category={category} setCategory={setCategory} />
		</>
	)
}
