import React, { KeyboardEvent, MouseEvent } from 'react';
import Styles from './index.module.css';
import { Ibutton } from '../../../interfaces';
import { ReactComponent as Loader } from '../../svgs/Roll.svg';

// tslint:disable-next-line: typedef
const iButton: React.FunctionComponent<Ibutton> = ({
  full,
  light,
  circle,
  smallCircle,
  children,
  className,
  sign,
  onClick,
  loading,
  active,
}): JSX.Element => (
  <>
    {
      <button
        className={`${full && Styles.full} ${light && Styles.light} ${circle &&
          Styles.circle} ${smallCircle && Styles.smallCircle} ${sign &&
          Styles.sign} ${className && className} ${active &&
          Styles.smallActive}`}
        onClick={
          loading
            ? null
            : (
                e:
                  | KeyboardEvent<HTMLButtonElement>
                  | MouseEvent<HTMLButtonElement>,
              ): void => {
                onClick(e);
              }
        }
      >
        {loading ? (
          <Loader
            className={`${full && Styles.lightLoader} ${Styles.loader}`}
          />
        ) : (
          children
        )}
      </button>
    }
  </>
);

export default iButton;
