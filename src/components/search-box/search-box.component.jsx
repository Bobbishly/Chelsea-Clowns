import { Component } from 'react';
import './search-box.styles.css';

class SearchBox extends Component {
    render() {
        const { onSearchChange, newPlaceHolder, newClassName } = this.props;

        return(
            <div>
                <input 
                    className={newClassName} 
                    type='search' 
                    placeholder={newPlaceHolder}
                    onChange={onSearchChange} 
                />
            </div>
        )
    }
}

export default SearchBox;