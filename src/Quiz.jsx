import './Quiz.css';
import { useReducer, useState } from 'react';

const initialState = {
    ANSWER1: false,
    ANSWER2: false,
    ANSWER3: false,
    ANSWER4: false,
    score: 0,
};

function selectReducer(state, action) {
    switch (action.type) {
        case 'ANSWER1':
            return { ...state, ANSWER1: true, ANSWER2: false, ANSWER3: false, ANSWER4: false };
        case 'ANSWER2':
            return { ...state, ANSWER1: false, ANSWER2: true, ANSWER3: false, ANSWER4: false };
        case 'ANSWER3':
            return { ...state, ANSWER1: false, ANSWER2: false, ANSWER3: true, ANSWER4: false };
        case 'ANSWER4':
            return { ...state, ANSWER1: false, ANSWER2: false, ANSWER3: false, ANSWER4: true };

        case 'RESET':
            return { ...initialState };

        case 'NEXT_QUESTION':
            {
            const currentQuestion = action.payload;
            if (!currentQuestion) return state;   

            let points = 0;

            if (state.ANSWER1 && currentQuestion.option1 === currentQuestion.answer) points = 1;
            else if (state.ANSWER2 && currentQuestion.option2 === currentQuestion.answer) points = 1;
            else if (state.ANSWER3 && currentQuestion.option3 === currentQuestion.answer) points = 1;
            else if (state.ANSWER4 && currentQuestion.option4 === currentQuestion.answer) points = 1;

            return {
                ...state,
                score: state.score + points,
                ANSWER1: false,
                ANSWER2: false,
                ANSWER3: false,
                ANSWER4: false,
            }
            };

        default:
            return state;
    }
}

function QuizApp() {
    const [state, dispatch] = useReducer(selectReducer, initialState);
    const [questionNum, setQuestionNum] = useState(1);
    const [isFinished, setIsFinished] = useState(false);

    const QandA = [
        {
            id: 1,
            question: "What is SEO?",
            answer: "Improving a website to rank higher on search engines",
            option1: "Sending emails to customers automatically",
            option2: "Designing logos and graphics for websites",
            option3: "Creating social media posts every day",
            option4: "Improving a website to rank higher on search engines",
        },
        {
            id: 2,
            question: "What is the main goal of traditional SEO optimization?",
            answer: "To position your website as high as possible on Google search",
            option1: "To position your website as high as possible on Google search",
            option2: "To delete all competition from the Internet",
            option3: "To use as many complicated words as possible",
            option4: "To make AI talk about your brand",
        },
        {
            id: 3,
            question: "What is achieved through the GEO strategy?",
            answer: "AI platforms mention and recommend your business",
            option1: "Site loading speed improves on mobile",
            option2: "The site gets more social media followers",
            option3: "AI platforms mention and recommend your business",
            option4: "Your company location changes on maps",
        },
        {
            id: 4,
            question: "What does the 'E' in E-A-T (Experience) mean?",
            answer: "Having real experience and sharing personal knowledge",
            option1: "How old your domain is",
            option2: "Uploading diplomas to the website",
            option3: "Having real experience and sharing personal knowledge",
            option4: "Replying to emails quickly",
        },
        {
            id: 5,
            question: "What is 'Topical Authority'?",
            answer: "Covering a topic deeply across many related pages",
            option1: "Having the most images online",
            option2: "Covering a topic deeply across many related pages",
            option3: "Using popular fonts on your site",
            option4: "Paying ads to rank first",
        },
        {
            id: 6,
            question: "What is the ideal FAQ answer length for AI to pick up?",
            answer: "Between 40 and 60 words",
            option1: "One short sentence",
            option2: "A full 1000-word blog post",
            option3: "FAQ sections are not useful anymore",
            option4: "Between 40 and 60 words",
        },
        {
            id: 7,
            question: "Why is YouTube important in 'Search Everywhere' strategy?",
            answer: "AI reads video transcripts and can cite your content",
            option1: "Because videos are fun to watch",
            option2: "Because YouTube has better design",
            option3: "YouTube is only for entertainment",
            option4: "AI reads video transcripts and can cite your content",
        },
        {
            id: 8,
            question: "What is a Backlink?",
            answer: "A link from another website pointing to your site",
            option1: "A link between pages on your site",
            option2: "A link from another website pointing to your site",
            option3: "A paid Facebook ad",
            option4: "A browser back button",
        },
        {
            id: 9,
            question: "What happens when people search 'Brand name + product'?",
            answer: "It shows your brand owns that product category",
            option1: "It shows your brand owns that product category",
            option2: "It means customers forgot your URL",
            option3: "It has no effect on SEO",
            option4: "It means your site is broken",
        },
        {
            id: 10,
            question: "What is the purpose of Alt text on images?",
            answer: "To describe the image to search engines and AI",
            option1: "To make images look better",
            option2: "To hide images from competitors",
            option3: "To increase image resolution",
            option4: "To describe the image to search engines and AI",
        },
    ];

    const handleNext = () => {
        // Calculate score for current question
        dispatch({
            type: 'NEXT_QUESTION',
            payload: QandA[questionNum - 1],
        });

        if (questionNum < 10) {
            setQuestionNum((prev) => prev + 1);   // ← Fixed with functional update
        } else {
            setIsFinished(true);                  // Finish after scoring Q10
        }
    };

    const restartQuiz = () => {
        dispatch({ type: 'RESET' });
        setQuestionNum(1);
        setIsFinished(false);
    };

    const isSelected = (num) => {
        if (num === 1) return state.ANSWER1;
        if (num === 2) return state.ANSWER2;
        if (num === 3) return state.ANSWER3;
        if (num === 4) return state.ANSWER4;
        return false;
    };

    // ====================== RESULT SCREEN ======================
    if (isFinished) {
        const percentage = Math.round((Number(state.score) / 10) * 100) || 0;   // ← Prevents NaN

        return (
            <main className="quiz_container result_screen">
                <h1 className="heading1">Quiz Completed!</h1>

                <div className="result_card">
                    <h2>Your Score</h2>
                    <div className="score">
                        {state.score} <span>/ 10</span>
                    </div>
                    <p className="percentage">{percentage}%</p>

                    <p className="feedback">
                        {percentage >= 80
                            ? "Excellent! You're a SEO master! 🎉"
                            : percentage >= 60
                            ? "Good job! You know your SEO basics well."
                            : percentage >= 40
                            ? "Not bad! A bit more practice and you'll improve."
                            : "Keep learning! SEO is a big topic."}
                    </p>

                    <button className="next_question restart_btn" onClick={restartQuiz}>
                        Restart Quiz
                    </button>
                </div>
            </main>
        );
    }

    // ====================== QUIZ SCREEN ======================
    return (
        <main className="quiz_container">
            <h1 className="heading1">Question {questionNum}/10</h1>

            <section className="question_container">
                <h2 className="question">{QandA[questionNum - 1].question}</h2>

                <section className="answers_container">
                    <div
                        className={`answer ${isSelected(1) ? 'selected' : ''}`}
                        onClick={() => dispatch({ type: 'ANSWER1' })}
                    >
                        <p>a) {QandA[questionNum - 1].option1}</p>
                    </div>
                    <div
                        className={`answer ${isSelected(2) ? 'selected' : ''}`}
                        onClick={() => dispatch({ type: 'ANSWER2' })}
                    >
                        <p>b) {QandA[questionNum - 1].option2}</p>
                    </div>
                    <div
                        className={`answer ${isSelected(3) ? 'selected' : ''}`}
                        onClick={() => dispatch({ type: 'ANSWER3' })}
                    >
                        <p>c) {QandA[questionNum - 1].option3}</p>
                    </div>
                    <div
                        className={`answer ${isSelected(4) ? 'selected' : ''}`}
                        onClick={() => dispatch({ type: 'ANSWER4' })}
                    >
                        <p>d) {QandA[questionNum - 1].option4}</p>
                    </div>
                </section>

                <button
                    className="next_question"
                    onClick={handleNext}
                    disabled={!state.ANSWER1 && !state.ANSWER2 && !state.ANSWER3 && !state.ANSWER4}
                >
                    {questionNum === 10 ? 'Finish Quiz' : 'Next Question'}
                </button>
            </section>
        </main>
    );
}

export default QuizApp;