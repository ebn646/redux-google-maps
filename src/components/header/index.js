import React,{ Component } from 'react';
import DropDown from '../../containers/dropdown-list'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from '../../helpers';
require('./header.scss');

class Header extends Component{
  constructor(props){
    super(props)
    this.state = {
      address: '',
      geocodeResults: null,
      loading: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.renderGeocodeFailure = this.renderGeocodeFailure.bind(this)
    this.renderGeocodeSuccess = this.renderGeocodeSuccess.bind(this)
  }
  handleSelect(address){
    this.setState({
      address,
      loading: true
    })
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log('Success Yay', { lat, lng },this.props);
        this.props.onLatLngChange({ lat, lng });
        this.props.onGetLocations(null,{ lat, lng });
      })
      .catch((error) => {
        console.log('Oh no!', error)
      })
  }
  renderGeocodeFailure(err) {
    return (
      <div className="alert alert-danger" role="alert">
        <strong>Error!</strong> {err}
      </div>
    )
  }
  renderGeocodeSuccess(lat, lng) {
    return (
      <div className="alert alert-success" role="alert">
        <strong>Success!</strong> Geocoder found latitude and longitude: <strong>{lat}, {lng}</strong>
      </div>
    )
  }
  handleChange(address){
    this.setState({
      address,
      geocodeResults: null
    })
  }
  render(){
    const cssClasses  = {
      root: 'form-group',
      input: 'Demo__search-input',
      autocompleteContainer: 'Demo__autocomplete-container',
    }
    const AutocompleteItem = ({ formattedSuggestion }) => (
      <div className="Demo__suggestion-item">
        <i className='fa fa-map-marker Demo__suggestion-icon'/>
        <strong>{formattedSuggestion.mainText}</strong>{' '}
        <small className="text-muted">{formattedSuggestion.secondaryText}</small>
      </div>)
    const inputProps = {
        type: "text",
        value: this.state.address,
        onChange: this.handleChange,
        onBlur: () => { console.log('Blur event!'); },
        onFocus: () => { console.log('Focused!'); },
        autoFocus: true,
        placeholder: "Search Places",
        name: 'Demo__input',
        id: "my-input-id",
    }
    return (
      <div className="page-header row" style={{color:"#333"}}>
          <div className="col-md-1">
              <h4 style={{display:'inline-block'}}><img src="images/foursquare.png"/></h4>
          </div>
          <div className="col-sm-4 col-left" style={{textAlign:'left'}}>
            <PlacesAutocomplete
              onSelect={this.handleSelect}
              autocompleteItem={AutocompleteItem}
              onEnterKeyDown={this.handleSelect}
              classNames={cssClasses}
              inputProps={inputProps}
            />
          <DropDown {...this.props} />
            {this.state.loading ? <div><i className="fa fa-spinner fa-pulse fa-3x fa-fw Demo__spinner" /></div> : null}
            {!this.state.loading && this.state.geocodeResults ?
              <div className='geocoding-results'>{this.state.geocodeResults}</div> : null}
          </div>
        <div className="logo-holder">
            <img className="App-logo" src="images/logo.svg" />
        </div>
      </div>
    )
  }
}

export default Header
