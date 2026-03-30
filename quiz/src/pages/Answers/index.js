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
          name: topics.find(item => item.id === answersList[i].topicId)?.name,
          ...answersList[i],
        });
      }
      setAnswers(result.reverse());
    }
    fetchAPI();
  }, []);

  console.log(answers);

  return (
    <>
      <h2>Danh Sách bài đã luyện tập</h2>
      {answers.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên chủ để</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {answers.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
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