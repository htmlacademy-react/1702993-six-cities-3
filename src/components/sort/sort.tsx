import { useDispatch } from 'react-redux';
import { useBoolean } from '../../hooks/use-boolean';
import { useAppSelector } from '../../store';
import { SORT_OPTIONS } from '../const';
import { changeSortByValue } from '../../store/action';

function Sort() {
  const { isOn, toggle } = useBoolean(false);
  const selectedOption = useAppSelector((state) => state.sortBy);
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
// <li className="places__option places__option--active" tabIndex={1}>Popular</li>
// <li className="places__option" tabIndex={2}>Price: low to high</li>
// <li className="places__option" tabIndex={3}>Price: high to low</li>
// <li className="places__option" tabIndex={4}>Top rated first</li>
export default Sort;
