// import React, { useEffect, useRef, useState } from 'react';
// import Styles from './Quiz.module.css';
// import { data } from '../assets/data';
// import CodeEditor from './CodeEditor';
// import { Link, useLocation } from 'react-router-dom';

// const Quiz = () => {
//     const [index, setIndex] = useState(() => {
//         const storedIndex = localStorage.getItem('quizIndex');
//         return storedIndex ? parseInt(storedIndex) : 0;
//     });
//     const [question, setQuestion] = useState(data[index]);
//     const [lock, setLock] = useState(false);
//     const [score, setScore] = useState(0);
//     const [result, setResult] = useState(false);
//     const Option1 = useRef(null);
//     const Option2 = useRef(null);
//     const Option3 = useRef(null);
//     const Option4 = useRef(null);
//     const option_array = [Option1, Option2, Option3, Option4];
//     const location = useLocation();

//     useEffect(() => {
//         const questionIndex = new URLSearchParams(location.search).get('questionIndex');
//         if (questionIndex) {
//             setIndex(parseInt(questionIndex));
//             setQuestion(data[parseInt(questionIndex)]);
//         }
//     }, [location]);

//     useEffect(() => {
//         localStorage.setItem('quizIndex', index);
//     }, [index]);

//     const checkAns = (e, ans) => {
//         if (lock === false) {
//             if (question.ans === ans) {
//                 e.target.classList.add(Styles.correct);
//                 setLock(true);
//                 setScore(prev => prev + 1);
//             } else {
//                 e.target.classList.add(Styles.wrong);
//                 setLock(true);
//                 option_array[question.ans - 1].current.classList.add(Styles.correct);
//             }
//         }
//     };

//     const next = () => {
//         if (lock === true) {
//             if (index === data.length - 1) {
//                 setResult(true);
//                 return 0;
//             }
//             setIndex(prevIndex => {
//                 const nextIndex = prevIndex + 1;
//                 setQuestion(data[nextIndex]);
//                 return nextIndex;
//             });
//             setLock(false);
//             option_array.forEach(option => {
//                 option.current.classList.remove(Styles.wrong);
//                 option.current.classList.remove(Styles.correct);
//             });
//         }
//     };

//     const reset = () => {
//         setIndex(0);
//         setQuestion(data[0]);
//         setScore(0);
//         setLock(false);
//         setResult(false);
//         localStorage.removeItem('quizIndex');
//     };

//     const openCodeEditorInNewTab = () => {
//         const url = `/editor?snippet=${encodeURIComponent(question.code)}&questionIndex=${index}`;
//         window.open(url, '_blank');
//     };

//     return (
//         <div className={Styles.container}>
//             <h1 className={Styles.title}>Quiz App</h1>
//             <hr className={Styles.hr} />
//             {result ? (
//                 <>
//                     <h2 className={Styles.score}>You Scored {score} out of {data.length}</h2>
//                     <button className={Styles.resetButton} onClick={reset}>Reset</button>
//                 </>
//             ) : (
//                 <>
//                     <h2 className={Styles.question}>{index + 1}.{question.question}</h2>
//                     {question.code && (
//                         <>
//                             <pre className={Styles.code}>{question.code}</pre>
//                             <button onClick={openCodeEditorInNewTab} className={Styles.tryNowButton}>Try Now</button>
//                         </>
//                     )}
//                     <ul className={Styles.options}>
//                         <li ref={Option1} onClick={(e) => { checkAns(e, 1) }} className={Styles.option}>{question.option1}</li>
//                         <li ref={Option2} onClick={(e) => { checkAns(e, 2) }} className={Styles.option}>{question.option2}</li>
//                         <li ref={Option3} onClick={(e) => { checkAns(e, 3) }} className={Styles.option}>{question.option3}</li>
//                         <li ref={Option4} onClick={(e) => { checkAns(e, 4) }} className={Styles.option}>{question.option4}</li>
//                     </ul>
//                     <button className={Styles.nextButton} onClick={next}>Next</button>
//                     <div className={Styles.index}>
//                         {index + 1} of {data.length} question
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default Quiz;


import React, { useEffect, useRef, useState } from 'react';
import Styles from './Quiz.module.css';
import { data } from '../assets/data';
import CodeEditor from './CodeEditor';
import { Link, useLocation } from 'react-router-dom';

const Quiz = () => {
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    const [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);
    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);
    let option_array = [Option1, Option2, Option3, Option4];
    const location=useLocation();


    useEffect(() => {
        const questionIndex = new URLSearchParams(location.search).get('questionIndex');
        if (questionIndex) {
            setIndex(parseInt(questionIndex));
            setQuestion(data[parseInt(questionIndex)]);
        }
    }, [location]);
    


    const checkAns = (e, ans) => {
        if (lock === false) {
            if (question.ans === ans) {
                e.target.classList.add(Styles.correct);
                setLock(true);
                setScore(prev => prev + 1);
            } else {
                e.target.classList.add(Styles.wrong);
                setLock(true);
                option_array[question.ans - 1].current.classList.add(Styles.correct);
            }
        }
    };

    const next = () => {
        if (lock === true) {
            if (index === data.length - 1) {
                setResult(true);
                return 0;
            }
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false);
            option_array.forEach(option => {
                option.current.classList.remove(Styles.wrong);
                option.current.classList.remove(Styles.correct);
            });
        }
    };

    const reset = () => {
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    };
    const openCodeEditorInNewTab = () => {
        const url = `/editor?snippet=${encodeURIComponent(question.code)}&questionIndex=${index}`;
        window.open(url, '_blank');
    };

    return (
        <div className={Styles.container}>
            <h1 className={Styles.title}>Quiz App</h1>
            <hr className={Styles.hr} />
            {result ? (
                <>
                    <h2 className={Styles.score}>You Scored {score} out of {data.length}</h2>
                    <button className={Styles.resetButton} onClick={reset}>Reset</button>
                </>
            ) : (
                <>
                    <h2 className={Styles.question}>{index + 1}.{question.question}</h2>
                    {question.code && (
                        <>
                            <pre className={Styles.code}>{question.code}</pre>
                            <button onClick={openCodeEditorInNewTab} className={Styles.tryNowButton}>Try Now</button>

                         
                        </>
                    )}
                    <ul className={Styles.options}>
                        <li ref={Option1} onClick={(e) => { checkAns(e, 1) }} className={Styles.option}>{question.option1}</li>
                        <li ref={Option2} onClick={(e) => { checkAns(e, 2) }} className={Styles.option}>{question.option2}</li>
                        <li ref={Option3} onClick={(e) => { checkAns(e, 3) }} className={Styles.option}>{question.option3}</li>
                        <li ref={Option4} onClick={(e) => { checkAns(e, 4) }} className={Styles.option}>{question.option4}</li>
                    </ul>
                    <button className={Styles.nextButton} onClick={next}>Next</button>
                    <div className={Styles.index}>
                        {index + 1} of {data.length} question
                    </div>
                </>
            )}
        </div>
    );
};

export default Quiz;













// import React, { useRef, useState } from 'react';
// import Styles from './Quiz.module.css';
// import { data } from '../assets/data';
// import CodeEditor from './CodeEditor';

// const Quiz = () => {
//     let [index, setIndex] = useState(0);
//     let [question, setQuestion] = useState(data[index]);
//     const [lock, setLock] = useState(false);
//     let [score, setScore] = useState(0);
//     let [result, setResult] = useState(false);
//     let Option1 = useRef(null);
//     let Option2 = useRef(null);
//     let Option3 = useRef(null);
//     let Option4 = useRef(null);
//     let option_array = [Option1, Option2, Option3, Option4];
//     const [showCodeEditor, setShowCodeEditor] = useState(false);
//     const [codeSnippet, setCodeSnippet] = useState('');

//     const checkAns = (e, ans) => {
//         if (lock === false) {
//             if (question.ans === ans) {
//                 e.target.classList.add(Styles.correct);
//                 setLock(true);
//                 setScore(prev => prev + 1);
//             } else {
//                 e.target.classList.add(Styles.wrong);
//                 setLock(true);
//                 option_array[question.ans - 1].current.classList.add(Styles.correct);
//             }
//         }
//     };

//     const next = () => {
//         if (lock === true) {
//             if (index === data.length - 1) {
//                 setResult(true);
//                 return 0;
//             }
//             setIndex(++index);
//             setQuestion(data[index]);
//             setLock(false);
//             option_array.forEach(option => {
//                 option.current.classList.remove(Styles.wrong);
//                 option.current.classList.remove(Styles.correct);
//             });
//         }
//     };

//     const reset = () => {
//         setIndex(0);
//         setQuestion(data[0]);
//         setScore(0);
//         setLock(false);
//         setResult(false);
//         setShowCodeEditor(false);
//         setCodeSnippet('');
//     };

//     const tryNow = () => {
//         setShowCodeEditor(true);
//         setCodeSnippet(question.code || '');
//     };

//     return (
//         <div className={Styles.container}>
//             <h1 className={Styles.title}>Quiz App</h1>
//             <hr className={Styles.hr} />
//             {result ? (
//                 <>
//                     <h2 className={Styles.score}>You Scored {score} out of {data.length}</h2>
//                     <button className={Styles.resetButton} onClick={reset}>Reset</button>
//                 </>
//             ) : (
//                 <>
//                     <h2 className={Styles.question}>{index + 1}.{question.question}</h2>
//                     {question.code && <pre className={Styles.code}>{question.code}</pre>}
//                     <ul className={Styles.options}>
//                         <li ref={Option1} onClick={(e) => { checkAns(e, 1) }} className={Styles.option}>{question.option1}</li>
//                         <li ref={Option2} onClick={(e) => { checkAns(e, 2) }} className={Styles.option}>{question.option2}</li>
//                         <li ref={Option3} onClick={(e) => { checkAns(e, 3) }} className={Styles.option}>{question.option3}</li>
//                         <li ref={Option4} onClick={(e) => { checkAns(e, 4) }} className={Styles.option}>{question.option4}</li>
//                     </ul>
//                     {!showCodeEditor && <button className={Styles.tryNowButton} onClick={tryNow}>Try Now</button>}
//                     {showCodeEditor && <CodeEditor codeSnippet={codeSnippet} />}
//                     <button className={Styles.nextButton} onClick={next}>Next</button>
//                     <div className={Styles.index}>
//                         {index + 1} of {data.length} question
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default Quiz;






// import React, { useRef, useState } from 'react';
// import Styles from './Quiz.module.css';
// import { data } from '../assets/data';
// import CodeEditor from './CodeEditor';
// import { Link } from 'react-router-dom';

// const Quiz = () => {
//     let [index, setIndex] = useState(0);
//     let [question, setQuestion] = useState(data[index]);
//     const [lock, setLock] = useState(false);
//     let [score, setScore] = useState(0);
//     let [result, setResult] = useState(false);
//     let Option1 = useRef(null);
//     let Option2 = useRef(null);
//     let Option3 = useRef(null);
//     let Option4 = useRef(null);
//     let option_array = [Option1, Option2, Option3, Option4];

//     const checkAns = (e, ans) => {
//         if (lock === false) {
//             if (question.ans === ans) {
//                 e.target.classList.add(Styles.correct);
//                 setLock(true);
//                 setScore(prev => prev + 1);
//             } else {
//                 e.target.classList.add(Styles.wrong);
//                 setLock(true);
//                 option_array[question.ans - 1].current.classList.add(Styles.correct);
//             }
//         }
//     };

//     const next = () => {
//         if (lock === true) {
//             if (index === data.length - 1) {
//                 setResult(true);
//                 return 0;
//             }
//             setIndex(++index);
//             setQuestion(data[index]);
//             setLock(false);
//             option_array.forEach(option => {
//                 option.current.classList.remove(Styles.wrong);
//                 option.current.classList.remove(Styles.correct);
//             });
//         }
//     };

//     const reset = () => {
//         setIndex(0);
//         setQuestion(data[0]);
//         setScore(0);
//         setLock(false);
//         setResult(false);
//     };

//     return (
//         <div className={Styles.container}>
//             <h1 className={Styles.title}>Quiz App</h1>
//             <hr className={Styles.hr} />
//             {result ? (
//                 <>
//                     <h2 className={Styles.score}>You Scored {score} out of {data.length}</h2>
//                     <button className={Styles.resetButton} onClick={reset}>Reset</button>
//                 </>
//             ) : (
//                 <>
//                     <h2 className={Styles.question}>{index + 1}.{question.question}</h2>
//                     {question.code && <pre className={Styles.code}>{question.code}</pre>}
//                     <ul className={Styles.options}>
//                         <li ref={Option1} onClick={(e) => { checkAns(e, 1) }} className={Styles.option}>{question.option1}</li>
//                         <li ref={Option2} onClick={(e) => { checkAns(e, 2) }} className={Styles.option}>{question.option2}</li>
//                         <li ref={Option3} onClick={(e) => { checkAns(e, 3) }} className={Styles.option}>{question.option3}</li>
//                         <li ref={Option4} onClick={(e) => { checkAns(e, 4) }} className={Styles.option}>{question.option4}</li>
//                     </ul>
//                     <button className={Styles.nextButton} onClick={next}>Next</button>
//                     <div className={Styles.index}>
//                         {index + 1} of {data.length} question
//                     </div>
//                 </>
//             )}
//             <Link to="/editor"><button>Try Now</button></Link>
            
//         </div>
//     );
// };

// export default Quiz;





















// import React, { useRef, useState } from 'react';
// import Styles from './Quiz.module.css';
// import { data } from '../../assets/data';
// const Quiz = () => {
//     let [index, setIndex] = useState(0);
//     let [question, setQuestion] = useState(data[index]);
//     const [lock, setLock] = useState(false);
//     let [score, setScore] = useState(0);
//     let [result, setResult] = useState(false);
//     let Option1 = useRef(null);
//     let Option2 = useRef(null);
//     let Option3 = useRef(null);
//     let Option4 = useRef(null);
//     let option_array = [Option1, Option2, Option3, Option4];

//     const checkAns = (e, ans) => {
//         if (lock === false) {
//             if (question.ans === ans) {
//                 e.target.classList.add(Styles.correct);
//                 setLock(true);
//                 setScore(prev => prev + 1);
//             } else {
//                 e.target.classList.add(Styles.wrong);
//                 setLock(true);
//                 option_array[question.ans - 1].current.classList.add(Styles.correct);
//             }
//         }
//     };

//     const next = () => {
//         if (lock === true) {
//             if (index === data.length - 1) {
//                 setResult(true);
//                 return 0;
//             }
//             setIndex(++index);
//             setQuestion(data[index]);
//             setLock(false);
//             option_array.forEach(option => {
//                 option.current.classList.remove(Styles.wrong);
//                 option.current.classList.remove(Styles.correct);
//             });
//         }
//     };

//     const reset = () => {
//         setIndex(0);
//         setQuestion(data[0]);
//         setScore(0);
//         setLock(false);
//         setResult(false);
//     };

//     return (
//         <div className={Styles.container}>
//             <h1>Quiz App</h1>
//             <hr />
//             {result ? (
//                 <>
//                     <h2>You Scored {score} out of {data.length}</h2>
//                     <button onClick={reset}>Reset</button>
//                 </>
//             ) : (
//                 <>
//                     <h2>{index + 1}.{question.question}</h2>
//                     {question.code && <pre>{question.code}</pre>}
//                     <ul>
//                         <li ref={Option1} onClick={(e) => { checkAns(e, 1) }}>{question.option1}</li>
//                         <li ref={Option2} onClick={(e) => { checkAns(e, 2) }}>{question.option2}</li>
//                         <li ref={Option3} onClick={(e) => { checkAns(e, 3) }}>{question.option3}</li>
//                         <li ref={Option4} onClick={(e) => { checkAns(e, 4) }}>{question.option4}</li>
//                     </ul>
//                     <button onClick={next}>Next</button>
//                     <div className={Styles.index}>
//                         {index + 1} of {data.length} question
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default Quiz;



// import React, { useRef, useState } from 'react'
// import Styles from './Quiz.module.css'
// import { data } from '../../assets/data';
// const Quiz = () => {
//     let [index, setIndex] = useState(0);
//     let [question, setQuestion] = useState(data[index]);
//     const [lock, setLock] = useState(false);
//     let [score, setScore] = useState(0);
//     let[result,setResult]=useState(false);
//     let Option1 = useRef(null);
//     let Option2 = useRef(null);
//     let Option3 = useRef(null);
//     let Option4 = useRef(null);
//     let option_array = [Option1, Option2, Option3, Option4]
//     const checkAns = (e, ans) => {
//         if (lock === false) {
//             if (question.ans === ans) {
//                 e.target.classList.add(Styles.correct);
//                 setLock(true);
//                 setScore(prev => prev + 1);
//             }
//             else {
//                 e.target.classList.add(Styles.wrong)
//                 setLock(true);
//                 option_array[question.ans - 1].current.classList.add(Styles.correct);
//             }
//         }

//     }
//     const next = () => {
//         if (lock === true) {
//             if (index=== data.length-1) {
//                 setResult(true);
//                 return 0;
//             }
//             setIndex(++index);
//             setQuestion(data[index]);
//             setLock(false);
//             option_array.map((option) => {
//                 option.current.classList.remove(Styles.wrong);
//                 option.current.classList.remove(Styles.correct);
//                 return null;
//             })
//         }

//     }
//     const reset =()=>{
//         setIndex(0);
//         setQuestion(data[0]);
//         setScore(0);
//         setLock(false);
//         setResult(false);
//     }
//     return (
//         <div className={Styles.container}>
//             <h1>Quiz App</h1>
//             <hr />
//             {result ? <></>:<>
//             <h2>{index + 1}.{question.question}</h2>
//             <ul>
//                 <li ref={Option1} onClick={(e) => { checkAns(e, 1) }}>{question.option1}</li>
//                 <li ref={Option2} onClick={(e) => { checkAns(e, 2) }}>{question.option2}</li>
//                 <li ref={Option3} onClick={(e) => { checkAns(e, 3) }}>{question.option3}</li>
//                 <li ref={Option4} onClick={(e) => { checkAns(e, 4) }}>{question.option4}</li>
//             </ul>
//             <button onClick={next}>Next</button>
//             <div className={Styles.index}>
//                 {index + 1} of {data.length} question
//             </div>
//             </>}
//             {result?<>
//                 <h2>You Scored {score} out of {data.length}</h2>
//            <button onClick={reset}>Reset</button>
//             </>:<> </>}
           
//         </div>
//     )
// }

// export default Quiz