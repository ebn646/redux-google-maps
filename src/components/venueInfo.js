import React,{Component} from 'react';
require('../../style/infowindow.scss');

class VenueInfoWindow extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    // Reference to the DIV that wraps the bottom of infowindow
      var iwOuter = $('.gm-style-iw');
      iwOuter.addClass('active');
      var iwBackground = iwOuter.prev();
      //
      // // Removes background shadow DIV
      iwBackground.children(':nth-child(2)').css({'display' : 'none'});
      //
      // // Removes white background DIV
      iwBackground.children(':nth-child(4)').css({'display' : 'none'});
      //
      // // Moves the infowindow 115px to the right.
      // iwOuter.parent().parent().css({left: '115px'});
      //
      // // Moves the shadow of the arrow 76px to the left margin.
      // iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 76px !important;'});
      //
      // // Moves the arrow 76px to the left margin.
      // iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 76px !important;'});
      //
      // // Changes the desired tail shadow color.
      // iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'z-index' : '1'});
      //
      // // Reference to the div that groups the close button elements.
       var iwCloseBtn = iwOuter.next();
      //
      // // Apply the desired effect to the close button
      iwCloseBtn.css({opacity: '1', right: '45px', top: '3px', border: '10px solid #fff', 'border-radius': '13px'});
      //iwCloseBtn.css({opacity: '1', right: '45px', top: '3px', 'box-shadow': '0 0 5px #3990B9'});
      //
      // // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
      // if($('.iw-content').height() < 140){
      //   $('.iw-bottom-gradient').css({display: 'none'});
      // }
      //
      // // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
      iwCloseBtn.mouseout(function(){
        $(this).css({opacity: '1'});
      });
  }
  render(){
    return(
      <div id='iw-container'>
          <div className='iw-title'>
            {this.props.info.venue.name}
          </div>
          <div className='iw-content'>
            <img src={this.props.info.venue.featuredPhotos.items[0].prefix +'50x50' + this.props.info.venue.featuredPhotos.items[0].suffix} />
            <p>{this.props.info.venue.location.address}</p>
          </div>
      </div>
    )
  }
}

export default VenueInfoWindow
