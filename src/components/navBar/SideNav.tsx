import React, { FC, memo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import One from "../../logos/One";
import Two from "../../logos/Two";

const SideNav: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeIcon, setActiveIcon] = useState<string>(location.pathname);
  const onClickOne = () => {
    navigate("/");
    setActiveIcon("/");
  };
  const onClickTwo = () => {
    navigate("/second");
    setActiveIcon("/second");
  };

  return (
    <div className="side-nav">
      <div className="side-centre">
        <span
          onClick={onClickOne}
          className={activeIcon === "/" ? "side-state active" : "side-state"}
        >
          <One />
        </span>
        <span
          onClick={onClickTwo}
          className={
            activeIcon === "/second" ? "side-state active" : "side-state"
          }
        >
          <Two />
        </span>
      </div>
    </div>
  );
};

export default memo(SideNav);
