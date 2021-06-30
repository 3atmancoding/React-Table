import { useEffect, useState } from 'react';

export const useSearch = ({ searchQuery, fetchRes }) => {
  const [filteredRes, setFilteredRes] = useState([]);
  const [userData, setUser] = useState([]);
  const [searchIndex, setSearchIndex] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const filter = (user, result) => {
      if (!result) result = [];
      for (let key in user) {
        if (typeof user[key] === 'object') filter(user[key], result);
        else result.push(user[key] + ' ');
      }
      return result;
    };
    const fetchData = async () => {
      const { data: users } = await fetchRes();
      console.log('the users', users);
      setUser(users);
      setFilteredRes(users);
      const findIndex = users.map((use) => {
        const res = filter(use);
        return { res: res.toString() };
      });
      console.log('The find index', findIndex);
      setSearchIndex(findIndex);
      if (users) setLoading(false);
    };
    fetchData();
  }, [fetchRes]);
  useEffect(() => {
    if (searchQuery) {
      const req = searchIndex.map((use, i) => {
        if (use.res.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0) {
          return userData[i];
        }
        return null;
      });
      setFilteredRes(
        req.filter((us) => {
          if (us) return true;
          return false;
        })
      );
    } else setFilteredRes(userData);
  }, [searchQuery, userData, searchIndex]);
  return { loading, filteredRes };
};
