import { Icon } from "components";
import { navList } from "constant";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="hidden border-t border-border-lightest py-2 pr-6 lg:block">
      <ol className="flex gap-2 md:gap-5">
        {navList.map((nav) => {
          return (
            <li
              className="flex items-center gap-2 text-nowrap md:gap-4"
              key={nav.path}
            >
              <NavLink
                to={nav.path}
                className={({ isActive }) =>
                  `flex items-center gap-2.5 px-2 py-2 md:px-4 ${
                    isActive ? "rounded-XS bg-background-lighter" : ""
                  }`
                }
              >
                {nav.icon && (
                  <Icon name={nav.icon} className="text-textAndIcon-light" />
                )}
                <label className="text-labelXLarge">{nav.title}</label>
              </NavLink>
              {nav !== navList[navList.length - 1] && (
                <div className="ml-2 h-4 w-[2px] bg-border-lightest md:mx-4" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
