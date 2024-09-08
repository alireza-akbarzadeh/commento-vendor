import { Icon } from 'components';
import { navList } from 'constant';
import { NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="py-2 hidden lg:block pr-6  border-t border-border-lightest">
      <ol className="flex gap-2 md:gap-5">
        {navList.map((nav) => {
          return (
            <li
              className="flex gap-2 md:gap-4 items-center text-nowrap"
              key={nav.path}
            >
              <NavLink
                to={nav.path}
                className={({ isActive }) =>
                  `flex gap-2.5 px-2 md:px-4 py-2 items-center ${
                    isActive ? 'bg-background-lighter rounded-XSS' : ''
                  }`
                }
              >
                {nav.icon && (
                  <Icon name={nav.icon} className="text-textAndIcon-light" />
                )}
                <label className="text-labelXLarge">{nav.title}</label>
              </NavLink>
              {nav !== navList[navList.length - 1] && (
                <div className="h-4 w-[3px] bg-border-light ml-2 md:mx-4" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
