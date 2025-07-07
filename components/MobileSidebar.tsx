import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import React, { useRef } from "react";
import { Link } from "react-router";
import NavItems from "./NavItems";

const MobileSidebar = () => {
  const sidebarRef = useRef<SidebarComponent | null>(null);
  const toggleSidebar = () => {
    sidebarRef.current?.toggle();
  };

  return (
    <div className="mobile-sidebar wrapper">
      <header>
        <Link to="/">
          <img
            src="/assets/icons/logo.svg"
            alt="Logo"
            className="size-[30px]"
          />
          <h1>Dashboard</h1>
        </Link>
        <button>
          <img
            src="/assets/icons/menu.svg"
            alt="menu"
            className="size-7"
            onClick={toggleSidebar}
          />
        </button>
      </header>
      <SidebarComponent
        style={{ borderRadius: "50%" }}
        width={270}
        ref={sidebarRef}
        created={() => sidebarRef.current?.hide()}
        closeOnDocumentClick={true}
        showBackdrop={true}
        type="over"
      >
        <NavItems />
      </SidebarComponent>
    </div>
  );
};

export default MobileSidebar;
