import React from 'react';
import './result.styles.scss';

import SearchResultcard from './searchResultCard/searchResultCard.component';

const data = [
    { name: 'Name', type: 'doctor', avatar: 'https://pickaface.net/gallery/avatar/20130418_030937_4133_dp.png', address: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', stars: 5, isVarified: true, distance: '5.5km', closeBy: '10pm' },
    { name: 'Name', type: 'pharmacy', avatar: 'https://pickaface.net/gallery/avatar/20130418_030937_4133_dp.png', address: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ', stars: 4, isVarified: true, distance: '3.0km', closeBy: '10pm' },
    { name: 'Medical Store', type: 'pharmacy', avatar: 'https://pickaface.net/gallery/avatar/20130418_030937_4133_dp.png', address: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', stars: 3, isVarified: true, distance: '1.0km', closeBy: '10pm' },
    { name: 'Name', type: 'doctor', avatar: 'https://pickaface.net/gallery/avatar/20130418_030937_4133_dp.png', address: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ', stars: 1, isVarified: true, distance: '3.5km', closeBy: '10pm' },
    { name: 'Medical Store', type: 'doctor', avatar: 'https://pickaface.net/gallery/avatar/20130418_030937_4133_dp.png', address: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ', stars: 4, isVarified: true, distance: '4.0km', closeBy: '10pm' }
]

const Search = () => {

    return (
        <div className="result">
            {
                data.map((item, index) => <SearchResultcard {...item} key={index} />)
            }
            {
                data.map((item, index) => <SearchResultcard {...item} key={index} />)
            }
            {
                data.map((item, index) => <SearchResultcard {...item} key={index} />)
            }
            {
                data.map((item, index) => <SearchResultcard {...item} key={index} />)
            }
        </div>
    );
}

export default Search;