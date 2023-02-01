import React from 'react';

const USERS_URL = 'https://example.com/api/users';

export default function Table(){

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://example.com/api/users")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
        //  render elements in tbody
        </tbody>
      </table>
      <section className="pagination">
        <button className="first-page-btn" disabled={isLoaded}>first</button>
        <button className="previous-page-btn" disabled={isLoaded}>previous</button>
        <button className="next-page-btn" disabled={isLoaded}>next</button>
        <button className="last-page-btn" disabled={isLoaded}>last</button>
      </section>
    </div>
  );
};
