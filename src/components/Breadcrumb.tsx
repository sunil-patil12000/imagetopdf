import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  darkMode: boolean;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ darkMode }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Create mapping of paths to human-readable names
  const getPageName = (path: string): string => {
    switch(path) {
      case 'about':
        return 'About';
      case 'blog':
        return 'Blog';
      default:
        // Handle dynamic segments like blog/1 or try to capitalize the path
        if (path.match(/^\d+$/)) {
          return `Post ${path}`;
        }
        return path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
    }
  };

  return (
    <nav className="py-3 px-4" aria-label="Breadcrumb">
      <ol 
        className="flex flex-wrap items-center space-x-1 text-sm" 
        itemScope 
        itemType="https://schema.org/BreadcrumbList"
      >
        <li 
          className="inline-flex items-center" 
          itemProp="itemListElement" 
          itemScope 
          itemType="https://schema.org/ListItem"
        >
          <Link 
            to="/" 
            className={`inline-flex items-center hover:text-blue-600 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
            itemProp="item"
          >
            <Home className="h-4 w-4 mr-1" />
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {pathnames.map((path, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          
          return (
            <li 
              key={path} 
              className="inline-flex items-center"
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
            >
              <ChevronRight className={`h-4 w-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
              {isLast ? (
                <span 
                  className={`ml-1 font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}
                  itemProp="name"
                >
                  {getPageName(path)}
                </span>
              ) : (
                <Link 
                  to={routeTo} 
                  className={`ml-1 hover:text-blue-600 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                  itemProp="item"
                >
                  <span itemProp="name">{getPageName(path)}</span>
                </Link>
              )}
              <meta itemProp="position" content={`${index + 2}`} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
