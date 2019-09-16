import React from 'react';
import { RichUtils } from 'draft-js';
import { useDispatch, useSelector } from 'react-redux';
import { BOLD, REMOVE_EFFECT, ITALIC } from '../../reducer/actions';
import Ibutton from '../elements/Ibutton';
import { FooterType, UserStates } from '../../interfaces';
import { ReactComponent as Check } from '../svgs/check.svg';
import Styles from './index.module.css';

const Footer: React.FC<FooterType> = ({ check }: FooterType): JSX.Element => {
  const dispatch = useDispatch();
  const { bold, italic, editorState } = useSelector(
    (state: UserStates) => state,
  );
  return (
    <footer>
      <div className={Styles.footer}>
        {check && (
          <Ibutton
            smallCircle={true}
            onClick={(): void => {
              dispatch({
                type: bold ? REMOVE_EFFECT : BOLD,
                payload: RichUtils.toggleInlineStyle(editorState, 'BOLD'),
              });
            }}
            active={bold ? true : false}
          >
            B
          </Ibutton>
        )}
        <Ibutton circle={true}>{check ? <Check /> : '+'}</Ibutton>
        {check && (
          <Ibutton
            smallCircle={true}
            onClick={(): void => {
              dispatch({
                type: italic ? REMOVE_EFFECT : ITALIC,
                payload: RichUtils.toggleInlineStyle(editorState, 'ITALIC'),
              });
            }}
            active={italic ? true : false}
          >
            <i>I</i>
          </Ibutton>
        )}
      </div>
    </footer>
  );
};
export default Footer;
