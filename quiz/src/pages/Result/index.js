import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnswers } from "../../services/answersService";
import { getListQuestions } from "../../services/questionsService";
import "./result.css";

function Result() {
  const param = useParams();
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const dataAnswers = await getAnswers(param.id);
      const dataQuestions = await getListQuestions(dataAnswers.topicId);

      let result = []

      for (let i = 0; i < dataQuestions.length; i++) {
        result.push({
          ...dataQuestions[i],
          answer: dataAnswers.ansewers.find(item => item.questionId == dataQuestions[i].id)?.ansewer
        })
      }
      setAnswers(result);
    }
    fetchAPI();
  }, [])

  console.log(answers);

  return (
    <>
      <h2>Kết quả</h2>

      <div className="result__list">
        {answers.map((item, index) => (
          <div className='result__list__item' key={index}>
            <p>
              Câu {index + 1}: {item.question}
              {item.correctAnswer === item.answer ? (
                <span className="result__tag result__tap--true">Đúng</span>
              ) : (
                <span className="result__tag result__tap--false">Sai</span>
              )}
            </p>

            {item.answers.map((itemAns, indexAns) => {
              let className = "";
              let checked  = false;

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
      </div>
    </>
  );
}

export default Result;