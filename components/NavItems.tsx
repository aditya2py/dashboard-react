import { cn } from "lib/utils";
import React from "react";
import { Link, NavLink } from "react-router";
import { sidebarItems } from "~/constants";

const NavItems = ({ handleClick }: { handleClick?: () => void }) => {
  const user = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    imageUrl: "/assets/images/david.webp",
  };

  return (
    <section className="nav-items">
      <Link to="/" className="link-logo">
        <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
        <h1>Dashboard</h1>
      </Link>

      <div className="container">
        <nav>
          {sidebarItems.map(({ id, href, icon, label }) => (
            <NavLink to={href} key={id}>
              {({ isActive }: { isActive: boolean }) => (
                <div
                  className={cn("group nav-item", {
                    "bg-blue-500 !text-white": isActive,
                  })}
                  onClick={handleClick}
                >
                  <img
                    src={icon}
                    alt={label}
                    className={`group-hover:brightness-0 group-hover:invert size-0 ${
                      isActive ? "brightness-0 invert" : "text-dark-200"
                    }`}
                  />
                  {label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>
        <footer className="nav-footer">
          <img
            src={user?.imageUrl || "/assets/images/david.webp"}
            alt={user?.name || "David"}
          />
          <article>
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
          </article>
          <button
            className="cursor-pointer"
            onClick={() => console.log("Log Out")}
          >
            <img
              src="/assets/icons/logout.svg"
              alt="logout"
              className="size-6"
            />
          </button>
        </footer>
      </div>
    </section>
  );
};

export default NavItems;
