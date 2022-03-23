import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
type Props = {
  isFooter?: boolean;
};

function Logo({ isFooter }: Props) {
  const location = useLocation();
  const isBaseName = location.pathname.length === 1;
  const linkClass = classNames('logo__link', {
    'logo__link--light': isFooter,
  });

  return (
    <div className="logo">
      {isBaseName ? (
        <a className={linkClass}>
          <span
            className="logo__letter logo__letter--1"
            data-testid="logo-letter-1"
          >
            W
          </span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      ) : (
        <Link to="/" className={linkClass}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      )}
    </div>
  );
}

export default Logo;
