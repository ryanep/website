import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};

global.shallow = shallow;
global.render = render;
global.mount = mount;
