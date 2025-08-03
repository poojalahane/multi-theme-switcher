import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../redux/themeSlice";
import type { RootState } from "../redux/store";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.value);

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-4 bg-white shadow-md z-50 dark:bg-gray-800 transition-colors duration-300">
      <Link
        to="/"
        className="text-xl font-bold text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
      >
        ThemeApp
      </Link>

      <div className="relative">
        <select
          value={theme}
          onChange={(e) => dispatch(setTheme(e.target.value))}
          className="appearance-none bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg py-2 pl-3 pr-8 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 cursor-pointer"
        >
          <option value="theme1">Default Theme</option>
          <option value="theme2">Dark Contrast</option>
          <option value="theme3">Professional</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
