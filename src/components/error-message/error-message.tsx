import { useAppSelector } from '../../store';
import { getError } from '../../store/slices/data-slice/data-selectors';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getError);

  return (error)
    ?
    <div style={{
      position: 'fixed',
      top: '30px',
      right: '30px',
      padding: '10px',
      backgroundColor: '#d95555',
      color: 'white',
      borderRadius: '5px'
    }}
    >
      {error}
    </div>
    : null;
}

export default ErrorMessage;
