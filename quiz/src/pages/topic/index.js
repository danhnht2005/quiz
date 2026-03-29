import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getListTopics } from "../../services/topicsService";

function Topic() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await getListTopics();
      setTopics(response);
    }
    fetchAPI();
  }, []);

  console.log(topics);

  return (
    <>
      <h2>Danh sách chủ để</h2>
      {topics.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên chủ để</th>
              <th></th>
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