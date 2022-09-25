import Departments from '../components/Departments';
import Doctors from '../components/Doctors';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import WindowWrapper from '../layout/WindowWrapper';

const Home = () => {
	return (
		<WindowWrapper>
			<div className="border drop-shadow-xl md:rounded-3xl h-screen w-full md:h-max md:w-80 bg-white py-4">
				<Header />
				<SearchBar />
				<Departments />
				<Doctors />
				<Footer />
			</div>
		</WindowWrapper>
	);
};

export default Home;
