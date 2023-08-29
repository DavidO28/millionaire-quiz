import { useEffect, useState } from "react";
import Trivia from "./Trivia";
import Timer from "./Timer";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [earned, setEarned] = useState();

  const data = [{
    id: 1,
    question: "რომელი ფირმის ტელეფონს აღმერთებდა მირო ადრე, ახლა კი ეზიზღება იმის გამო რო თავისას აჯობა კამერით?",
    answers: [
      {
        text: "სამსუნგს",
        correct: false,
      },
      {
        text: "პიქსელს",
        correct: true,
      },
      {
        text: "ქსიაომის",
        correct: false,
      },
      {
        text: "ჰუავეის",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "რომელი ჯობია?",
    answers: [
      {
        text: "კრუზი",
        correct: true,
      },
      {
        text: "ჯეტა",
        correct: false,
      },
      {
        text: "ოპელ ელეგანტი",
        correct: false,
      },
      {
        text: "ვირის ტაჩკა",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: "ვინ დაკარგეს 200$-300$ ბოტასსში ან/და ლისტში",
    answers: [
      {
        text: "ზურამ და გიომ",
        correct: false,
      },
      {
        text: "ზურამ და დიტომ",
        correct: false,
      },
      {
        text: "დიტომ და გიომ",
        correct: false,
      },
      {
        text: "მირომ და დემნამ",
        correct: true,
      },
    ],
  },
  {
    id: 4,
    question: "რამდენი აქვს დემნას ხელფასი რეალურად?",
    answers: [
      {
        text: "+ უსასრულობა",
        correct: false,
      },
      {
        text: "1100 მოჭრილი და რასაც მოტეხავს (1500მდე)",
        correct: true,
      },
      {
        text: "შენზე მეტი",
        correct: false,
      },
      {
        text: "შენზე ორჯერ მეტი",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: "როდის ანებებს დიტო სიგარეტს თავს?",
    answers: [
      {
        text: "ეს ბოლო იყო უკვე",
        correct: true,
      },
      {
        text: "ხვალაც მოწევს და ეგააა",
        correct: false,
      },
      {
        text: "მომავალი თვიდან",
        correct: false,
      },
      {
        text: "გუშინ",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question: "ვის ჰქონდა ნერვოზი 2022 წელს?",
    answers: [
      {
        text: "დათოს",
        correct: true,
      },
      {
        text: "მიროს",
        correct: false,
      },
      {
        text: "დიტოს",
        correct: false,
      },
      {
        text: "გიოს",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question: "ვინ არ სცემს პატივს HTML, CSS, JS-ს? და ამავდროულად 'სწავლობდა/იცის' ქოუდინგი",
    answers: [
      {
        text: "დათო",
        correct: false,
      },
      {
        text: "მირო",
        correct: true,
      },
      {
        text: "დიტო",
        correct: false,
      },
      {
        text: "დემნა",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question: "ვინ არის კაკლის საბერტყი ჯოხივით მაღალი?",
    answers: [
      {
        text: "დათო",
        correct: false,
      },
      {
        text: "მირო",
        correct: false,
      },
      {
        text: "გიო",
        correct: true,
      },
      {
        text: "დიტო",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: "რამდენია ორჯერ ორი?",
    answers: [
      {
        text: "დემნას ხელფასი",
        correct: false,
      },
      {
        text: "იმდენი და ცოტა მეტი",
        correct: false,
      },
      {
        text: "ჩვიდმეტი",
        correct: false,
      },
      {
        text: "4",
        correct: true,
      },
    ],
  },
  {
    id: 10,
    question: "რომელ ყუთში დევს მილიონი?",
    answers: [
      {
        text: "პირველში",
        correct: false,
      },
      {
        text: "მეორეში",
        correct: false,
      },
      {
        text: "მესამეში",
        correct: false,
      },
      {
        text: "მეოთხეში",
        correct: false,
      },
    ],
  },
  ];

  const moneyPyramid = [
    { id: 1, amount: "₾ 2.000" },
    { id: 2, amount: "₾ 4.000" },
    { id: 3, amount: "₾ 8.000" },
    { id: 4, amount: "₾ 16.000" },
    { id: 5, amount: "₾ 32.000" },
    { id: 6, amount: "₾ 64.000" },
    { id: 7, amount: "₾ 125.000" },
    { id: 8, amount: "₾ 250.000" },
    { id: 9, amount: "₾ 500.000" },
    { id: 10, amount: "₾ 1.000.000" }
  ].reverse();


  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount);
  }, [questionNumber]);

  return (
    <div className="App">
      <div className="main">
        {timeOut ? (<h1 className="endText">პასუხი მცდარია, შენ წააგე {earned}</h1>) :
          <>
            <div className="top">
              <div className="timer">
                <Timer
                  setTimeOut={setTimeOut}
                  questionNumber={questionNumber}
                />
              </div>
            </div>
            <div className="bottom">
              <Trivia
                data={data}
                setTimeOut={setTimeOut}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
              />
            </div>
          </>
        }

      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map(m => (
            <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"} >
              <span className="moneyListItemNumber">{m.id} შეკითხვა</span>
              <span className="moneyListItemAmount">- {m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
