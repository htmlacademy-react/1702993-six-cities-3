import GetMain from '../../pages/main-page/main-page';

type AppMainPageProps = {
  offersRentalCount: number;
}

function App({offersRentalCount}: AppMainPageProps): JSX.Element {
  return (
    <GetMain offersRentalCount={offersRentalCount}/>
  );
}

export default App;
