import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnswers } from "../../services/answersService";
import { getListQuestions } from "../../services/questionsService";

function Result() {
  const param = useParams();
  const [answers, setAnswers] = useState();

  useEffect(() => {
    const fetchAPI = async () => {
      const dataAnswers = await getAnswers(param.id);
      const dataQuestions = await getListQuestions(dataAnswers.topicId);
      
      let result = []

      for(let i = 0; i < dataQuestions.length; i++) {
        result.push({
          ...dataQuestions[i],
          answer: dataAnswers.ansewers.find(item => item.questionId == dataQuestions[i].id)?.ansewer
        })
      }
      console.log(result)
    } 
    fetchAPI();
  }, [])

  return (
    <>
      
    </>
  );  
}

export default Result;