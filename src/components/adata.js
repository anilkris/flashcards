import React, { Component } from 'react';
import './adata.css';

class AllWords extends Component {
    constructor(props) {
        super(props);

        console.log(this.props);
        this.state = {flip: false, count: 0}
    }

    handleClick() {
        this.setState(
            {
                flip: !this.state.flip 
            }
        );
    }
    previousClick() {

       if(this.state.count>0) {
          this.setState({
              ...this.state,
              count: this.state.count-1,
              flip: false
          }
          );
       }
    }
    nextClick() {
        const {words} = this.props;
        if(this.state.count<words.length-1) {
          this.setState({
              ...this.state,
              count: this.state.count+1,
              flip: false
          }
          );
        }

    }




    render() {
        const {words} = this.props;


        let len = words.length;
        console.log("Total Words" + words.length);
        let index = this.state.count;

        if(index<0){
            index = 0;
        }
        if(index> len-1) {
            index = len-1;

        }
        console.log(words);

        const word = words[index].word;
        const meaning = words[index].meaning;
        const id = words[index].id;

        let display =word; 
        if(this.state.flip){
            display = meaning;
        }

        return(
            <div class="jumbotron vertical-center">
               <div className="container mycontainer">
            
                <h1>FlashCards </h1>
                
                <div className="card-columns">
                <div className="card" onClick={()=> this.handleClick() }>
                <div className="card-body">
                <h4 className="card-title">{id}</h4>
            <p className="card-text">
                 {display}
             </p>
                </div>
                </div>
                <button type="button" className="btn btn-outline-dark btn-sm flaot-left" onClick ={()=> this.previousClick() }>previous</button>
                {'    '}
                <button type="button" className="btn btn-outline-dark btn-sm flaot-right" onClick ={()=> this.nextClick() }> next</button>
              </div>
            </div>
            </div>

              );
    }
}

export default AllWords;
