import {combineReducers} from 'redux';
import testsInfoReducer from './testsInfoReducer';
import currentTestReducer from './currentTestRecuder';


const rootReducer = combineReducers({
	testsInfo: testsInfoReducer,
	currentTest: currentTestReducer
})

type rootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<rootReducerType>;


export default rootReducer;