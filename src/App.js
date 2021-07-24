import styles from './App.module.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home';
function App() {
  return (
    <>
      <Header height="755px">
            <p className={styles.text}>All-IN-ONE SOLUTION PROVIDER FOR YOUR TECHNOLOGICAL NEEDS SYSTEM LEVEL SOLUTIONS</p>
            <hr className={styles.line}></hr>
            <p className={styles.sub_text}>Industry leaders in providing solutions catering to the domains of intellectual property, hardware design & prototyping, software design, and manufacturing.</p>
      </Header>
      <Home />
    </>
  );
}

export default App;
