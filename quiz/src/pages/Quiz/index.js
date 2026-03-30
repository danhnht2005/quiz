import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTopic } from '../../services/topicsService';
import { getListQuestions } from '../../services/questionsService';

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

  console.log(dataTopic);
  console.log(dataQuestions);

  return (
    <>
      <h2>Bài Quiz chủ đề: {dataTopic.name}</h2>
    </>
  );
}

export default Quiz;