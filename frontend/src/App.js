import {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';

const backendPort = 4000
const endpoint = process.env.REACT_APP_ENV === 'production' ? '35.228.222.219' : 'localhost'

const request = async (addon = '') => 
  await fetch(`http://${endpoint}:${backendPort}/${addon}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });


function App() {
  console.log('process.env', process.env)
  const [text, setText] = useState('')
  const [text2, setText2] = useState('')
  const fetchData = async () => {
    const response = await request()
    console.log('response',response)
    const body = await response.text()
    console.log('body',body)
    setText(body);
  }
  const fetchData2 = async () => {
    const response = await request("healthchecks")
    console.log('response2',response)
    const body = await response.text()
    console.log('body2',body)
    setText2(body);
  }

  useEffect(() => {
    fetchData()
    fetchData2()
  },[])

  return (
    <div className="App">
      <h1>
          {text}
        </h1>
        <h1>
          {text2}
        </h1>
    </div>
  );
}

export default App;
