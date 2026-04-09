import { useEffect, useState } from "react";
import { getListAnswers } from "../../services/answersService";
import { Link } from "react-router-dom";
import { getListTopics } from "../../services/topicsService";

function Answers() {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const answersList = await getListAnswers();
      const topics = await getListTopics();

      let result = [];

      for(let i = 0; i < answersList.length; i++) {
        result.push({
          // eslint-disable-next-line eqeqeq
          name: topics.find(item => item.id == answersList[i].topicId)?.name,
          ...answersList[i],
        });
      }
      setAnswers(result.reverse());
    }
    fetchAPI();
  }, []);

  return (
    <>
      <h2>Danh Sách bài đã luyện tập</h2>
      {answers.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Tên chủ để</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {answers.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  <Link to={`/result/${item.id}`}>Xem chi tiết</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </>
  );
} 

export default Answers;