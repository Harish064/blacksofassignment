import styles from './App.module.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import Hyphens from './components/Hyphens/Hyphens';
import MainContainer from './components/MainContainer/MainContainer';

function App() {
  return (
    <>
      <Header height="755px" header="header" image="image" layer="layer">
            <p className={styles.text}>All-IN-ONE SOLUTION PROVIDER FOR YOUR TECHNOLOGICAL NEEDS SYSTEM LEVEL SOLUTIONS</p>
            <hr className={styles.line}></hr>
            <p className={styles.sub_text}>Industry leaders in providing solutions catering to the domains of intellectual property, hardware design & prototyping, software design, and manufacturing.</p>
      </Header>
      <Home />
      <Header height="600px" header="header_1" image="image_1" layer="layer_1">
            <p className={styles.text_1}>Reshaping the future of THE world</p>
            <hr className={styles.line_1}></hr>
            <p className={styles.sub_text_1}>We aim to leverage technology as a tool to build solutions that have the potential of bringing a transformational shift across sectors.</p>
            <p className={styles.sub_text_2}>MARKET LEADERS IN MULTIPLE PRODUCT DOMAINS</p>
            <div className={styles.hyphens}>
              <Hyphens container="container" item="item" active="active" />
            </div>
      </Header>
      <MainContainer />
    </>
  );
}

export default App;
