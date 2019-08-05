import React, { Component } from 'react';

class SearchBar extends Component {
    state = { inputValue: '' };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchBarSubmit(this.state.inputValue);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text"
                            value={this.state.inputValue}
                            onChange={(e) => this.setState({ inputValue: e.target.value })}
                        />
                    </div>
                </form>
            </div >
        )
    }
}

export default SearchBar;