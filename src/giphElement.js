import React from 'react';

export default class GifElement extends React.Component{

   constructor(props){
     super(props);

     this.state = {
       isHover: false
     };

   }

   handleMouseOver(e){
       this.setState({
         isHover: true
       });
   }

   handleMouseOut(e){

     this.setState({
       isHover: false
     });
   }

   render(){

     let output;
     if(!this.state.isHover){

       output = (
         <img src={ this.props.dataElmnt['images']['480w_still']['url'] }
              className="img-fluid mx-auto d-block image-thumb gif-cell"/>
       );

    }else{
       output = (
         <div className="embed-responsive embed-responsive-16by9 animated fadeIn fast gif-cell">
             <iframe src={this.props.dataElmnt.embed_url}
                     width="480"
                     height="270"
                     frameBorder="0"
                     className="giphy-embed embed-responsive-item"
                     allowFullScreen></iframe>
         </div>
       );
    }

    return (
     <div onMouseEnter={e => this.handleMouseOver(e)}
          onMouseLeave={e => this.handleMouseOut(e)}
          className="col-sm-4 col-md-4 col-xl-4 image-container"
          key={this.props.dataElmnt.id} >

               { output }

     </div>
   );


   }




}
