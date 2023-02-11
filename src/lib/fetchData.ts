import { useState, useEffect } from 'react';
import { Menu } from './types';

type ErrorType = {
  message: string | null;
};

export function useMenuData() {
  const [menuData, setMenuData] = useState<Menu | null>(null);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState<ErrorType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json'
        );
        if (!response.ok) {
          throw new Error(`Network response was not ok (Status: ${response.status})`);
        }
        const data = await response.json();
        setMenuData(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
        setError({ message: (error as Error).message });
      }
    };

    fetchData();
  }, []);

  return { menuData, loading, error };
}