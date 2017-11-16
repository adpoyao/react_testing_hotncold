import React from 'react';
import {shallow} from 'enzyme';
import InfoModal from './info-modal';
import {Header} from './header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    });

    it('Hides the info modal initially', () => {
        const wrapper = shallow(<Header showInfoModal={false}/>);
        expect(wrapper.find(InfoModal).exists()).toEqual(false);
    });

    it('Should render the info modal when toggled', () => {
        const wrapper = shallow(<Header showInfoModal={true}/>);
        expect(wrapper.find(InfoModal).exists()).toEqual(true);
    });
});
