import React from 'react'
import './form.css';
import { updateSearch } from '../../store/search/actions'
import {connect} from "react-redux";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const Form = ({updateSearch}) => {
    const [address, setAddress] = React.useState("");
    const [coordinates, setCoordinates] = React.useState({
        lat: null,
        lng: null
    });
    const handleSelect = async (value) => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);

        setAddress(value);
        setCoordinates(latLng);
        await updateSearch({lat:latLng.lat, lng:latLng.lng, address:value})
    };

    return (
        <div className={"input-autocomplete"}>
            <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div className={'input-autocomplete__wrapper'}>
                        <input className={'input-autocomplete__input'} {...getInputProps({ placeholder: "Type address" })} />

                        <div className={'input-autocomplete__suggestions'}>
                            {loading ? <div>...loading</div> : null}
                            {suggestions.map((suggestion, index)=> {

                                const style = {
                                    backgroundColor: suggestion.active ? "rgb(170,168,172)" : "rgba(255,255,255,0.6)",
                                    padding: 5
                                };

                                return (
                                    <div
                                        key = {index}
                                        {...getSuggestionItemProps(suggestion, { style })}>
                                        {suggestion.description}

                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        </div>
    );
};

export default connect(null, { updateSearch })(Form);
