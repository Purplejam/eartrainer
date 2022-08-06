import {combineReducers} from 'redux';
import testsInfoReducer from './testsInfoReducer';
import currentTestReducer from './currentTestRecuder';
import finishedTestReducer from './finishedTestReducer';


const rootReducer = combineReducers({
	testsInfo: testsInfoReducer,
	currentTest: currentTestReducer,
	finishedTest: finishedTestReducer
})

type rootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<rootReducerType>;


export default rootReducer;