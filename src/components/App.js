import React, { Component } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import ImageList from './ImageList';

class App extends Component {

    state = { images: [] }

    onSearchBarSubmit = async value => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: value
            },
            headers: {
                Authorization: 'Client-ID 2d42b97a53dce019294f95a1fe4b2cebe8a05c72f4abbc833d5562d4eb7d382e'
            }
        });
        this.setState({
            images: response.data.results
        })
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchBarSubmit={this.onSearchBarSubmit} />
                <ImageList images = {this.state.images} />
            </div>
        )
    }
}

export default App;