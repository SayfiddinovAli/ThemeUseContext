import React from "react";
import './App.css';
import Header from './Component/Header/Header';
import Section from './Component/Section/Section';
import ThemeContext from './Context/ThemeContext';
import Home from './Component/Home/Home';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "light", // Boshlang'ich rangni 'light' qilib o'rnating
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === "light" ? "dark" : "light" // Fon rangini o'zgartirish
    }));
  }

  render() {
    return (
      <ThemeContext.Provider value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}>
        <div className={`App ${this.state.theme}`}> {/* App'ning sinfini yangilang */}
          <Home />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
