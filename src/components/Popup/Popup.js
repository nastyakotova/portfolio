import { useDispatch, useSelector } from "react-redux";
import { deactivatePopup } from "../../store/popup/actionsCreators";
import './Popup.scss';

export default function Popup({ children }) {
  const dispatch = useDispatch();
  const isPopupActive = useSelector(state => state.popup.isActive);

  return (
    <div
      className={`popup ${isPopupActive ? 'active' : ''}`}
      onClick={() => dispatch(deactivatePopup())}
    >
      <div
        className={`content ${isPopupActive ? 'active' : ''}`}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
