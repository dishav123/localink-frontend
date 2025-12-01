import Banner from '../components/HomePageComponents/Banner';
import Header from '../components/HomePageComponents/Header'
import MapSection from '../components/HomePageComponents/MapSection';
import ReviewSection from '../components/HomePageComponents/ReviewSection';
import SpecialityMenu from '../components/HomePageComponents/SpecialityMenu';
import TopServiceProvider from '../components/HomePageComponents/TopServiceProvider';

function Home() {
    return ( 
        <div>
            <Header/>
            <SpecialityMenu/>
            <TopServiceProvider/>
            <Banner/>
            <MapSection/>
            <ReviewSection/>
        </div>
     );
}

export default Home;