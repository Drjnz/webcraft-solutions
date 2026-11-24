import { useState, useMemo } from 'react';

function normalizeText(value) {
  return String(value ?? '').toLowerCase().trim();
}

function useSearch(items = [], searchFields = []) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Tous');

  const categories = useMemo(() => {
    return [
      'Tous',
      ...new Set(
        items
          .map((item) => item.category)
          .filter(Boolean)
      )
    ];
  }, [items]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const searchValue = normalizeText(search);

      const matchesSearch = searchFields.some((field) => {
        const value = item[field];

        if (Array.isArray(value)) {
          return value.some((element) =>
            normalizeText(element).includes(searchValue)
          );
        }

        return normalizeText(value).includes(searchValue);
      });

      const matchesCategory =
        category === 'Tous' || item.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [items, search, category, searchFields]);

  return {
    search,
    setSearch,
    category,
    setCategory,
    categories,
    filteredItems
  };
}

export default useSearch;