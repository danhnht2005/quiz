import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getListTopics } from "../../services/topicsService";
import "./topic.scss"

function Topic() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await getListTopics();
      setTopics(response);
    }
    fetchAPI();
  }, []);

  return (
    <>
      <h2>Danh sách chủ để</h2>
      {topics.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Tên chủ để</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {topics.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <Link to={`/quiz/${item.id}`}>Làm bài</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </>
  );
}

export default Topic;