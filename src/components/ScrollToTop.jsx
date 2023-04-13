import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { toggleMenu } from "../redux/slice/showShoppingCartSlice";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    window.scrollTo(0, 0);
    dispatch(toggleMenu({ scroll: true, showCart: false }));
    document.body.style.overflow = "visible";
  }, [pathname]);

  return null;
}
