import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { loginAction } from '../../store/api-actions';
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import VisuallyHidden from '../visually-hidden/visually-hidden';

function SignIn() {
  const { user, error: authError } = useAppSelector(({ USER }) => USER);

  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Unreachable code error
    if (user && location.state?.prevRoute) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Unreachable code error
      navigate(location.state?.prevRoute);
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Unreachable code error
  }, [user, navigate, location.state?.prevRoute]);

  const handleButtonClick = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    dispatch(loginAction({ email, password }));
  };

  const handleLoginChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.target.value);
    const re =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(evt.target.value).toLowerCase())) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handlePasswordChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
    const re =
      // eslint-disable-next-line no-useless-escape
      /^.*(?=.{2,})(?=.*\d)(?=.*[a-zA-Z]).*$/i;
    if (!re.test(String(evt.target.value).toLowerCase())) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const isValidForm =
    emailError || passwordError || email.length === 0 || password.length === 0;

  const fieldEmailClasses = classNames('sign-in__field', {
    'sign-in__field--error': emailError,
  });

  const fieldPasswordClasses = classNames('sign-in__field', {
    'sign-in__field--error': passwordError,
  });

  return (
    <>
      <VisuallyHidden />
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />
          <h1 className="page-title user-page__title">Sign in</h1>
        </header>
        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form">
            <div className="sign-in__fields">
              {emailError && email.length > 0 && (
                <div className="sign-in__message">
                  <p>Please enter a valid email address</p>
                </div>
              )}
              {passwordError && password.length > 0 && (
                <div className="sign-in__message">
                  <p>Please enter a valid password address</p>
                </div>
              )}
              {Boolean(authError) && (
                <div className="sign-in__message">
                  <p>
                    We can’t recognize this email and password combination.
                    Please try again.
                  </p>
                </div>
              )}
              <div className={fieldEmailClasses}>
                <input
                  onChange={handleLoginChange}
                  value={email}
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                  data-testid="login"
                />
                <label
                  className="sign-in__label visually-hidden"
                  htmlFor="user-email"
                >
                  Email address
                </label>
              </div>
              <div className={fieldPasswordClasses}>
                <input
                  onChange={handlePasswordChange}
                  value={password}
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                  data-testid="password"
                />
                <label
                  className="sign-in__label visually-hidden"
                  htmlFor="user-password"
                >
                  Password
                </label>
              </div>
            </div>

            <div className="sign-in__submit">
              <button
                style={{
                  opacity: isValidForm ? '0.3' : '1',
                  pointerEvents: isValidForm ? 'none' : 'auto',
                }}
                onClick={handleButtonClick}
                className="sign-in__btn"
                type="submit"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default SignIn;
