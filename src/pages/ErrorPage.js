import NavBar from '../Components/NavBar';
import { useRouteError } from "react-router-dom";

function ErrorPage() {
 const error = useRouteError();
// console.error(error);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Whoops! This page got lost in our clutter!</h1>
      </main>
    </>
  );
}

export default ErrorPage;