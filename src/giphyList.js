import React from 'react';
import GifElement from './giphElement';


export default class GiphyList extends React.Component {

  constructor(props) {
    super(props);

    this.renderListElmnt = this.renderListElmnt.bind(this);

   }


   renderListElmnt(giphyElmnt){

     return <GifElement dataElmnt= {giphyElmnt} />

   }

   render(){

       let display;
       let title;

       if(this.props.giphydata.length ){
         title = <div className="results-container">Results:</div>;
         display = this.props.giphydata.map( this.renderListElmnt );
       }else{
         title = '';
         display = '';
       }

       return(
        <div className="row">
             {title}
             {display}
        </div>

       );
   }


}
