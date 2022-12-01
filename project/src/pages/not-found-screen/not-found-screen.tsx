import {Link} from 'react-router-dom';

function NotFoundScreen() {
  return (
    <div style={{textAlign:'center'}}>
      <h1>
        404 Not Found
      </h1>
      <Link to="/">Главная страница</Link>
    </div>
  );
}

export default NotFoundScreen;