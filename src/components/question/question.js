import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function CovidQuestion() {
	const questions = [
		{
			questionText: <h3>What is your age?</h3>,
			answerOptions: [
				{ answerText: '<20', sc: 100 },
				{ answerText: 'Between 20-40', sc: 50 },
				{ answerText: 'Between 40-60', sc: 50 },
				{ answerText: '>60', sc: 100 },
			],
		},
		{
			questionText: <h3>What is your Gender?</h3>,
			answerOptions: [
				{ answerText: 'Male', sc: 0 },
				{ answerText: 'Female', sc: 0 },
				{ answerText: 'Other', sc: 0 },
				{ answerText: 'Do not want to specify', sc: 0 },
			],
		},
		{
			questionText: <h3>What is your current Body temprature in Farenheit?</h3>,
			answerOptions: [
				{ answerText: 'Normal (96°F-98.6°F)', sc: 0 },
				{ answerText: 'Fever (98.6°F-102°F)', sc: 50 },
				{ answerText: 'High Fever (>102°F)', sc: 100 },
				{ answerText: 'Dont know', sc: 0 },
			],
		},
		{
			questionText: <h3>Are you experiencing any of these symptoms ?</h3>,
			answerOptions: [
				{ answerText: 'Dry Cough', sc: 50 },
				{ answerText: 'Loss or diminished sense of smell.', sc: 50 },
				{ answerText: 'Both', sc: 100 },
				{ answerText: 'None', sc: 0 },
			],
		},
		{
			questionText: <h3>Are you experiencing any of these symptoms ?</h3>,
			answerOptions: [
				{ answerText: 'Change in Appetite', sc: 50 },
				{ answerText: 'Moderate to Severe Cough', sc: 50 },
				{ answerText: 'Both', sc: 100 },
				{ answerText: 'None', sc: 0 },
			],
		},
		{
			questionText: <h3>Additionally,Please verify if you are experiencing any of these symptoms ?</h3>,
			answerOptions: [
				{ answerText: 'Feeling Breathless', sc: 50 },
				{ answerText: 'Persistant Pain Pressure in Chest & Weakness', sc: 50 },
				{ answerText: 'Both', sc: 100 },
				{ answerText: 'None', sc: 0 },
			],
		},
		{
			questionText: <h3>Tell us about your Smoking History.</h3>,
			answerOptions: [
				{ answerText: 'Current Smoker', sc: 100 },
				{ answerText: 'Occassional Smoker', sc: 50 },
				{ answerText: 'Quit Smoking more than 6 months before', sc: 50 },
				{ answerText: 'Never Smoke', sc: 0 },
			],
		},
		{
			questionText: <h3>Tell us about your Travel History and possible exposure details.</h3>,
			answerOptions: [
				{ answerText: 'No recent travel history ', sc: 0 },
				{ answerText: 'No contact with anyone with symptoms', sc: 0 },
				{ answerText: 'History of travel or meeting in affected geographical area in last 14 days', sc: 50 },
				{ answerText: 'Close contact with a person with Fever and Cough in last 14 days', sc: 100 },
			],
		},
		{
			questionText: <h3>Do you have a history of any of these conditions?</h3>,
			answerOptions: [
				{ answerText: 'Diabetes', sc: 50 },
				{ answerText: 'High Blood Pressure', sc: 50 },
				{ answerText: 'Both', sc: 100 },
				{ answerText: 'None', sc: 0 },
			],
		},
		{
			questionText: <h3>Do you have a history of any of these conditions?</h3>,
			answerOptions: [
				{ answerText: 'Heart disease', sc: 50 },
				{ answerText: 'Kidney disease', sc: 50 },
				{ answerText: 'Both', sc: 100 },
				{ answerText: 'None', sc: 0 },
			],
		},
		{
			questionText: <h3>Do you have a history of any of these conditions?</h3>,
			answerOptions: [
				{ answerText: 'Lung diseases (Asthma, COPD, TB etc.)', sc: 50 },
				{ answerText: 'Reduced Immunity', sc: 50 },
				{ answerText: 'Both', sc: 100 },
				{ answerText: 'None', sc: 0 },
			],
		},
		{
			questionText: <h3>How have your symptoms progressed over the 48 hours?</h3>,
			answerOptions: [
				{ answerText: 'Improved', sc: 25 },
				{ answerText: 'No Change', sc: 50 },
				{ answerText: 'Worsened', sc: 75 },
				{ answerText: 'Worsened Considerably', sc: 100 },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [per, setPer] = useState(0);
	const [load,setLoading]= useState(false)
	const history = useHistory()
	const handleAnswerOptionClick = (sc) => {
			setScore(score+sc)
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
		getPercent()
	};
	const getPercent=()=>{
		const total = 1100;
		const current = score
		const percent=(current/total)*100
		setPer(percent)
	}
	useEffect(()=>{
	if (showScore){
		setTimeout (() => {
			setLoading(true)
		}, 3300);
}
		// clearTimeout(time)
	})
	return (
<div style={{padding:'10rem'}}>
<div><h1>COVID RISK RESULT</h1>
   <h2 style={{color:'green'}}>&#10084;</h2>
</div>

	<div className='qns'>

			{showScore ? (
				<div className='score-section'>
					{!load ? `Covid Score ${score-23}`: ''} 
					<br/>
					{!load ?<p style={{fontWeight:'600', textShadow:'0 0 5px red'}}><br/>Loading Your Covid Risk Percent. We are Calculating your Level Of Covid Risk Result...</p> :
				    per.toFixed(2)+"% Is the percent of your Covid Risk Please Connect With Doctor"}
				</div>

			) : (
				<>

					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.sc)}>{answerOption.answerText}</button>
						))}
					</div>
					<>
					</>

				</>
			)}
		</div>
		<div style={{marginTop:'4rem', width:"30rem", padding:'0 0 0 5rem',display:'inline-block'}}>
		{showScore && load && (Math.floor(per)>37 ? <div style={{display:"flex",flexDirection:'column', padding:'1.2rem',border:'1px solid cyan' ,boxShadow:'0 0 7px red', borderRadius:'8px'}}><h3>Speak To Doctor For Further Consultation</h3><button onClick={()=>history.push('/drChat')} style={{display:'flex',justifyContent:'center'}}> Connect To Doctor  </button> </div>: <p style={{fontSize:'1.7rem', fontWeight:"700", }}><h3 style={{color:'green',fontWeight:'600'}}>YOU ARE SAFE & YOU DONT HAVE COVID &#128154;</h3>
		<br/> <br/>
		<div className='Prevention'>
		<p>Be aware or Educate yourself with the latest updates on the following website :
			 <a href="https://www.who.int/health-topics/coronavirus" target="">WHO</a> </p>
			 <br/>
			 <h3 style={{textDecoration:'underline'}}>Prevention & Precautions</h3><br/>
		<p>Follow the Below Prevention and Precautions Given <br/><br/>
		1.Wash your hands frequently<br/>
		2.Maintain social distancing<br/>
		3.Avoid touching eyes, nose and mouth<br/>
		4.Practice respiratory hygiene<br/>
		5.If you have fever, cough and difficulty in breathing, seek medical care early<br/>
		6.Use a mask/face-cloth
		</p></div></p>)}
		
		</div>

		</div>
	);
}
