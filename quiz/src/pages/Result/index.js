import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAnswers } from "../../services/answersService";
import { getListQuestions } from "../../services/questionsService";
import "./result.scss";
import { getTopic } from "../../services/topicsService";

function Result() {
  const param = useParams();
  const [answers, setAnswers] = useState([]);
  const [topic, setTopic] = useState({});
  const [rightAnswers, setRightAnswers] = useState(0);
  const lengthAnswers = answers.length;

  useEffect(() => {
    const fetchAPI = async () => {
      const dataAnswers = await getAnswers(param.id);
      const dataQuestions = await getListQuestions(dataAnswers.topicId);
      const dataTopic = await getTopic(dataAnswers.topicId);

      setTopic(dataTopic);

      let result = []

      for (let i = 0; i < dataQuestions.length; i++) {
        result.push({
          ...dataQuestions[i],
          // eslint-disable-next-line eqeqeq
          answer: dataAnswers.ansewers.find(item => item.questionId == dataQuestions[i].id)?.ansewer
        })
      }
      const countRight = result.filter(item => item.correctAnswer === item.answer).length;
      setAnswers(result);
      setRightAnswers(countRight);
    }
    fetchAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param.id]);

  return (
    <>
      <h2>Kết quả chủ đề: {topic.name}</h2>
      <p>Đúng: <b>{rightAnswers}</b> | Sai: <b>{lengthAnswers - rightAnswers}</b> | Tổng số câu: <b>{lengthAnswers}</b> | Tỷ lệ Đúng: <b>{((rightAnswers / lengthAnswers) * 100).toFixed(2)}%</b></p>
      <div className="result__list">
        {answers.map((item, index) => (
          <div className='result__item' key={index}>
            <p>
              Câu {index + 1}: {item.question}
              {item.correctAnswer === item.answer ? (
                <span className="result__tag result__tag--true">Đúng</span>
              ) : (
                <span className="result__tag result__tag--false">Sai</span>
              )}
            </p>

            {item.answers.map((itemAns, indexAns) => {
              let className = "";
              let checked = false;

              if (item.answer === indexAns) {
                checked = true;
                className = "result__item--selected";
              }

              if (item.correctAnswer === indexAns) {
                className += " result__item--result"
              }

              return (
                <div className='result__item--answers' key={indexAns}>
                  <input type='radio' checked={checked} disabled />
                  <label className={className}>{itemAns}</label>
                </div>
              )
            })}

          </div>
        ))}
        <Link to={`/quiz/${topic.id}`}>Làm lại</Link>
      </div>

    </>
  );
}

export default Result;