import { useDispatch } from 'react-redux';
import { useBoolean } from '../../hooks/use-boolean';
import { useAppSelector } from '../../store';
import { SORT_OPTIONS } from '../const';
import { changeSortByValue } from '../../store/offers-process/offers-process.slice';
import { getSort } from '../../store/offers-process/offers-selectors';

function Sort() {
  const { isOn, toggle } = useBoolean(false);
  const selectedOption = useAppSelector(getSort);
  const dispatch = useDispatch();

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onClick={toggle}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
      >
        {selectedOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOn ? 'places__options--opened' : ''}`}>
        {
          SORT_OPTIONS.map((option) => (
            <li
              key={option}
              className={`places__option ${selectedOption === option ? 'places__option--active' : ''}`}
              onClick={() => dispatch(changeSortByValue(option))}
            >
              {option}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default Sort;
