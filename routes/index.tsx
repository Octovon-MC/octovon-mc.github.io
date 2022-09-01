import Header from "../components/Header.tsx"
import Footer from "../components/Footer.tsx"
import Card from "../components/Card.tsx"

export default function Index() {
	return (
		<>
			<Header />
			<Card title="Welcome to Octovon!" content="Octovon is a Minecraft Marketplace Partner working on sick content!" />
			{Array.from(Array(10).keys()).map((i) => (
				<Card title="Test" />
			))}
			<Footer />
		</>
	)
}
