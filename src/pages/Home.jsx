import Header from '../components/Header'
import ReviewSection from '../components/ReviewSection';
import SpecialityMenu from '../components/SpecialityMenu';
import TopServiceProvider from '../components/TopServiceProvider';

function Home() {
    return ( 
        <div>
            <Header/>
            <SpecialityMenu/>
            <TopServiceProvider/>
            {/* <ReviewSection/> */}
        </div>
     );
}

export default Home;