import { Icon } from 'components';
import { navList } from 'constant';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="py-2 hidden lg:block pr-6">
      <ol className="flex gap-2 md:gap-5">
        {navList.map((nav) => {
          return (
            <li
              className="flex gap-2 md:gap-4 items-center text-nowrap"
              key={nav.path}
            >
              <Link
                to={nav.path}
                className="flex gap-2.5 px-2 md:px-4 py-2  items-center"
              >
                {nav.icon && (
                  <Icon name={nav.icon} className="text-textAndIcon-light" />
                )}
                <label className="text-labelXLarge">{nav.title}</label>
              </Link>
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
