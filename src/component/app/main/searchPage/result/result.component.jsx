import React from 'react';
import './result.styles.scss';

//reusable component
import InfoCard from '../../../../reusableComponent/infoCard/infoCard.component.';

const data = [
    { name: 'Name', type: 'doctor', avatar: 'https://pickaface.net/gallery/avatar/20130418_030937_4133_dp.png', address: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', stars: 5, isVarified: true, distance: '5.5km', closeBy: '10pm', id: 1 },
    { name: 'Name', type: 'pharmacy', avatar: 'https://pickaface.net/gallery/avatar/20130418_030937_4133_dp.png', address: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ', stars: 4, isVarified: true, distance: '3.0km', closeBy: '10pm', id: 2 },
    { name: 'Medical Store', type: 'hospital', avatar: 'https://pickaface.net/gallery/avatar/20130418_030937_4133_dp.png', address: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', stars: 3, isVarified: true, distance: '1.0km', closeBy: '10pm', id: 3 },
    { name: 'Name', type: 'pathology', avatar: 'https://pickaface.net/gallery/avatar/20130418_030937_4133_dp.png', address: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ', stars: 1, isVarified: true, distance: '3.5km', closeBy: '10pm', id: 4 },
    { name: 'Medical Store', type: 'doctor', avatar: 'https://pickaface.net/gallery/avatar/20130418_030937_4133_dp.png', address: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ', stars: 4, isVarified: true, distance: '4.0km', closeBy: '10pm', id: 5 }
]

const Search = ({ results }) => {

    return (
        <div className="result">
            {
                data.map((item, index) => <InfoCard {...item} key={index} />)
            }
        </div>
    );
}

export default Search;