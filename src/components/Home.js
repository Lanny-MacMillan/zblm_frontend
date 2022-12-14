import '../App.css';
import SocialIcons from '../components/SocialIcons'



const Home = () => {
    return (
        <>
        <div className='mainContainer'>
            <div className='home'>
                <h1 className='homeTextBen'>Ben &</h1>
                <h1 className='homeTextZach'>Zach &</h1>
                <h1 className='homeTextLanny'>Lanny &</h1>
                <h1 className='homeTextLeeman'>Leeman</h1>
                <br/>
                <SocialIcons />
            </div>
        </div>
        </>
    );
}

export default Home;
