import {createStore,applyMiddleware} from 'redux' ;
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import {persistStore} from 'redux-persist';


const middelwares=[];
if(process.env.NODE_ENV==='development'){
	middelwares.push(logger);
}

export const store= createStore(rootReducer,applyMiddleware(...middelwares));
 export const persistor= persistStore(store);
