import React, { Component } from 'react'
import './ImageClickGame.css';
import one from '../images/one.jpg';
import two from '../images/two.jpg';
import three from '../images/three.jpg';
import four from '../images/four.jpg';
import five from '../images/five.jpg';
import six from '../images/six.jpg';

class ImageClickGame extends Component {
    constructor(){
        super();
        this.state = {
            count : 0,
            time: 15,
            victMessage1 : '',
            victMessage2 : '',
            message : '',
            src : one
        }       
    }
    incrementCount = () =>{
        if(this.state.time!== 0 && this.state.count <75){
            this.setState({
                count : this.state.count + 1,
            });
            if(this.state.count===15){
                this.setState({
                    src : two
                })  
            };
            if(this.state.count===30){
                this.setState({
                    src : three
                })  
            };
            if(this.state.count===45){
                this.setState({
                    src : four
                })  
            };
            if(this.state.count===60){
                this.setState({
                    src : five
                })  
            };
            if(this.state.count===74){
                this.setState({
                    src : six,
                    victMessage1 : "Hurray !! 🥳",
                    message : ` You Completed the full picture in ${15-this.state.time} secs`
                });  
            };
        };
    }
    handleRestart = () =>{
        this.setState({
            time : 15,
            count : 0,
            src : one,
            message : "",
            victMessage1 : '',
            victMessage2 : ''
        })
    }
    componentDidMount(){
        this.interval = setInterval(this.tick,1000);
    };

    tick = () =>{
        if(this.state.time!==0 && this.state.count<75){
            this.setState({
                time : this.state.time - 1
            })
        }
        else
        {
            if(this.state.count<75){
                this.setState({
                    victMessage2 : "Time Up !! 😔",
                    message : " You didn't Completed the full picture on time.",   
                })
            }
        }
    }
  render() {
    return (
      <div>
        <h1>Quick Touch Game</h1><br/><br/>
        <h6>Click the below picture as <span className='green'> FAST </span> as you can to complete the <span className='green'> FULL PICTURE </span></h6>
        <h3>Time Remaining : {this.state.time}</h3>
        <img onClick={this.incrementCount} width={200} height={200} src={this.state.src}/>
        <h6 className='score'>SCORE : {this.state.count}</h6>
        <p>
            <span className='vict'>{this.state.victMessage1}</span>
            <span className='fail'>{this.state.victMessage2}</span>
            {this.state.message}
        </p>
        <button onClick={this.handleRestart}>Restart</button>
      </div>
    )
  }
}
export default ImageClickGame