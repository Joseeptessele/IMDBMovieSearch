import { all } from 'redux-saga/effects';
import search from './Search';

export default function* rootSaga() {
	yield all([search()]);
}
