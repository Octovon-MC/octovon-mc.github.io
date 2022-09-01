import Header from "../components/Header.tsx"
import Footer from "../components/Footer.tsx"
import Card from "../components/Card.tsx"

export default function E404() {
	return (
		<>
			<Header />
			<Card title="Whoops!" content="Sorry, we cant find the page you were looking for!"  />
			<Footer />
		</>
	)
}
