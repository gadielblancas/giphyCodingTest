import React from 'react';


export default class GiphyList extends React.Component {

   renderListElmnt(giphyElmnt){

     return(
        <div key={giphyElmnt.id} className="embed-responsive embed-responsive-16by9 col-sm-4 col-md-4 col-xl-4 animated fadeIn fast">
         <iframe src={giphyElmnt.embed_url} width="480" height="270" frameBorder="0" className="giphy-embed embed-responsive-item gif-cell" allowFullScreen></iframe>
        </div>
     );

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
