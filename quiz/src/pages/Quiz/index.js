import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTopic } from '../../services/topicsService';
import { getListQuestions } from '../../services/questionsService';
import { getCookie } from '../../helpers/cookie';

function Quiz() {
  const params = useParams();
  const [dataTopic, setDataTopic] = useState({});
  const [dataQuestions, setDataQuestions] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await getTopic(params.id);
      setDataTopic(response);
    }
    fetchAPI();
  }, [params.id]);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await getListQuestions(params.id);
      setDataQuestions(response);
    }
    fetchAPI();
  }, [params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let seletedAnswer = [];
    for (let i = 0; i < e.target.elements.length; i++) {
      if(e.target.elements[i].checked) {
        const name = e.target.elements[i].name;
        const value = e.target.elements[i].value;
        seletedAnswer.push({
          questionId: parseInt(name),
          ansewer: parseInt(value)
        },);
      }
      
    }
    
    let option = {
      userId: parseInt(getCookie("id")),
      topicId: parseInt(params.id),
      ansewers: seletedAnswer
    }

      console.log(option);
  }



  return (
    <>
      <h2>Bài Quiz chủ đề: {dataTopic.name}</h2>

      <div className='form-quiz'>
        <form onSubmit={handleSubmit}>
          {dataQuestions.map((item, index) => (
            <div className='form-quiz__item' key={index}>
              <p>Câu {index + 1}: {item.question}</p>

              {item.answers.map((itemAns, indexAns) => (
                <div className='form-quiz__item--answers' key={indexAns}>
                  <input type='radio' name={item.id} value={indexAns} id={`quiz-${item.id}-${indexAns}`} />
                  <label htmlFor={`quiz-${item.id}-${indexAns}`}>{itemAns}</label>
                </div>
              ))}

            </div>
          ))}
          <button type="submit">Nộp bài</button>
        </form>
      </div>
    </>
  );
}

export default Quiz;