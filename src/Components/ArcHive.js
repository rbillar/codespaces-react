import Header from './Header'
import TechStack from './TechStack'
import Footer from './Footer'
import Counter from './Counter'

const ArcHive = () => {

  return (
    <>
        <Header />
        <div className="AppBody">
          <TechStack />
          <Counter />
        </div>  
        <Footer />
    </>
  );

 
}

export default ArcHive;
