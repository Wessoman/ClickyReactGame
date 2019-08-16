import React, { Component }from 'react';
import BoxCard from "./components/BoxCard";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import chars from "./chars.json";
import "./App.css";

class App extends Component {
    state = {
      chars,
      isClicked: false,
      count: 0
    }
  
    shuffle = chars => {
      let a = chars.length;
      let t;
      let i;
      while (a) {
        i = Math.floor(Math.random() * a--)
        t = chars[a];
        chars[a] = chars[i];
        chars[i] = t;
      }
      return chars;
    }
  
    handleClick = (id, name) => {
      console.log(`Stop wasting your time sucker, the MS id is ${id}`);
      const char = this.state.chars;
      let charPickedIndex;
      for (let i = 0; i < char.length; i++) {
        const element = char[i];
        if(element.id===id){
          charPickedIndex = i;
        }
      }
      if(char[charPickedIndex].isClicked){
        console.log("You already clicked on that MS!");
        alert(`Amuro, you already clicked on the ${name}!
        Your final score is ${this.state.count}.
        Press 'OK' to play again, Feddy punk!`)
        window.location.reload();
      }else{
        char[charPickedIndex].isClicked = true;
        this.shuffle(char);
        // const count = this.state.count;
        this.setState({chars: char, count: this.state.count + 1});
        if(this.state.count === 11){
          alert("You win! You must be a newtype...Play again?");
        }
      }
      console.log(char);
    }
  
    //alert function????
  
    render(){
      return (
        <div className="App">
          <Nav count={this.state.count}/>
          <Header />
          <Wrapper>
            {
              chars.map(char =>
                <BoxCard 
                  key={char.id}
                  id={char.id}
                  image={char.image}
                  name={char.name}
                  isclicked={char.isClicked}
                  handleClick={this.handleClick}
                />
              )
            }
          </Wrapper>
        </div>
      );
    }
  
  }
  
  export default App;