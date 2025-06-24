const SORT_OPTIONS = [
  {
    option: 'Popular'
  },
  {
    option: 'Price: low to high'
  },
  {
    option: 'Price: high to low'
  },
  {
    option: 'Top rated first'
  }
];

function Sort() {
  let isActive = false;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className='places__options places__options--custom places__options--opened'>
        {
          SORT_OPTIONS.map((option) => (
            <li
              key={option.option}
              className="places__option places__option--active"
            >
              {option.option}
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
