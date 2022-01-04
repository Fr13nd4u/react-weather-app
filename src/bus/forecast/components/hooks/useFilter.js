import {useDispatch, useSelector} from 'react-redux';

import { filterAction } from '../Filter/redux/actions';

export const useFilter = () => {
  const selector = (state) => state.filter;
  const {data} = useSelector(selector);
  const dispatch = useDispatch();

  const fillFilter = (value) => {
    const action = filterAction.fillFilter(value);

    dispatch(action);
  }

  return {
    filter: data,
    fillFilter,
  }
}