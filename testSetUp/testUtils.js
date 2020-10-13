import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { createStore, applyMiddleware } from 'redux';
// import rootReducer from '../src/reducers';
// import { middlewares  } from '../src/configStore';

/**
 *
 * @param {Element} CustomComponent
 * @param {Object} props
 * @param {Object} state
 * @return {ShallowWrapper}
 */

export const setUpComponent = (CustomComponent,  props = {}, state = null) => {
    let wrapper = shallow(<CustomComponent {...props} />);
    if (state) {
        wrapper.setState(state);
    }
    return wrapper
}

/**
 *
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 * @return {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`)
}

/**
 *
 * @param {ShallowWrapper} wrapper
 * @param {string} id
 * @return {ShallowWrapper}
 */

export const findByTestId = (wrapper, id) => {
    return wrapper.find(`[testID='${id}']`)
}


// export const checkProps = (CustomComponent, props = {}) => {
//     if (CustomComponent.propTypesToCheck && CustomComponent.propTypesToCheck.checkProps) {
//         CustomComponent.propTypesToCheck.checkProps(props)
//     }
// }
//
// export const storeFactory = (initState) => {
//     const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore)
//     return createStoreWithMiddlewares(rootReducer, initState);
// }