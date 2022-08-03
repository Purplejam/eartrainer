import {combineReducers} from 'redux';
import testsInfoReducer from './testsInfoReducer';


const rootReducer = combineReducers({
	testsInfo: testsInfoReducer
})

type rootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<rootReducerType>;


export default rootReducer;