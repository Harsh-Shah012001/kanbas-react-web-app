import { useState } from "react";
import { FaCalendarAlt, FaChevronDown, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";


export default function Details() {

    const { cid, qid } = useParams();
    const { pathname } = useLocation();
    const { quizzes } = useSelector((state: any) => state.quizReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let quiz = {
        _id: "A101",
        title: "Propulsion Assignment",
        course: "RS101",
        quizType: "",
        assignmentGroup: "",
        settings: {
            shuffleAnswers: true,
            timeLimit: 0,
            multipleAttempts: {
                enabled: true,
                attemptsAllowed: 0,
            },
            showCorrectAnswers: {
                enabled: true,
                timing: "",
            },
            accessCode: "",
            oneQuestionAtATime: true,
            webcamRequired: true,
            lockQuestionsAfterAnswering: true,
        },
        dates: {
            availableDate: "2024-05-06",
            availableTime: "12:00 AM",
            dueDate: "2024-05-13",
            dueTime: "12:00 AM",
            untilDate: "2024-05-06",
            untilTime: "12:00 AM",
        },
        points: "100",
        desc: "The assignment is available online. Submit a link to the landing page of courses.",
        isPublished: true,
        totQuestions: "10 Questions",
        questions: [],
    };

    // Find the quiz with matching qid
    const dbquiz = quizzes.find((quiz: any) => quiz._id === qid);

    if (dbquiz) {
        quiz = dbquiz; // Assign dbquiz if it exists
    } else {
        // Handle case where quiz is not found, maybe fallback to default or handle error
        console.error("Quiz not found for qid:", qid);
    }


    const [title, setTitle] = useState(quiz.title);
    const [course, setCourse] = useState(quiz.course);
    const [quizType, setQuizType] = useState(quiz.quizType);
    const [assignmentGroup, setAssignmentGroup] = useState(quiz.assignmentGroup);
    const [shuffleAnswers, setShuffleAnswers] = useState(quiz.settings.shuffleAnswers);
    const [timeLimit, setTimeLimit] = useState(quiz.settings.timeLimit);
    const [multipleAttemptsEnabled, setMultipleAttemptsEnabled] = useState(quiz.settings.multipleAttempts.enabled);
    const [attemptsAllowed, setAttemptsAllowed] = useState(quiz.settings.multipleAttempts.attemptsAllowed);
    const [showCorrectAnswersEnabled, setShowCorrectAnswersEnabled] = useState(quiz.settings.showCorrectAnswers.enabled);
    const [showCorrectAnswersTiming, setShowCorrectAnswersTiming] = useState(quiz.settings.showCorrectAnswers.timing);
    const [accessCode, setAccessCode] = useState(quiz.settings.accessCode);
    const [oneQuestionAtATime, setOneQuestionAtATime] = useState(quiz.settings.oneQuestionAtATime);
    const [webcamRequired, setWebcamRequired] = useState(quiz.settings.webcamRequired);
    const [lockQuestionsAfterAnswering, setLockQuestionsAfterAnswering] = useState(quiz.settings.lockQuestionsAfterAnswering);
    const [availableDate, setAvailableDate] = useState(quiz.dates.availableDate);
    const [availableTime, setAvailableTime] = useState(quiz.dates.availableTime);
    const [dueDate, setDueDate] = useState(quiz.dates.dueDate);
    const [dueTime, setDueTime] = useState(quiz.dates.dueTime);
    const [untilDate, setUntilDate] = useState(quiz.dates.untilDate);
    const [untilTime, setUntilTime] = useState(quiz.dates.untilTime);
    const [points, setPoints] = useState(quiz.points);
    const [desc, setDesc] = useState(quiz.desc);
    const [isPublished, setIsPublished] = useState(quiz.isPublished);
    const [totQuestions, setTotQuestions] = useState(quiz.totQuestions);
    const [questions, setQuestions] = useState(quiz.questions);
    const [timeLimitEnabled, setTimeLimitEnabled] = useState(true);
    const [availableFrom, setAvailableFrom] = useState("2024-05-06T12:00");
    const [availableUntil, setAvailableUntil] = useState("2024-05-20T23:59");



    const [selectedAssignTo, setSelectedAssignTo] = useState('Everyone');

    return (
        <div id="wd-quiz-details-editor" className="container mt-4">
            {/* Assignment Name */}
            <div className="row mb-2"> {/* Reduced margin */}
                <div className="col">
                    <label htmlFor="wd-name" className="form-label">Quiz Name</label>
                    <input id="wd-name" value={title}
                        onChange={(e) => setTitle(e.target.value)} className="form-control" />
                </div>
            </div>

            {/* Quiz Instructions */}
            <div className="row mb-3">
                <div className="col-md-12">
                    <label htmlFor="wd-instructions" className="form-label">Quiz Instructions</label>
                    <textarea
                        cols={40}
                        rows={5}
                        id="wd-description"
                        className="form-control"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>
            </div>

            <div className="row mb-2">
                {/* Quiz Type */}
                <div className="col-md-3 d-flex align-items-center justify-content-end">
                    <label htmlFor="wd-group" className="form-label">Quiz Type</label>
                </div>
                <div className="col-md-9">
                    <div className="input-group">
                        <select
                            id="wd-group"
                            className="form-control"
                            value={quizType}
                            onChange={(e) => setQuizType(e.target.value)}
                        >
                            <option value="QUIZZES">Graded Quiz</option>
                            <option value="ASSIGNMENTS">Practice Quiz</option>
                            <option value="PROJECT">Graded Survey</option>
                            <option value="EXAM">Ungraded Survey</option>
                        </select>
                        <span className="input-group-text">
                            <FaChevronDown /> {/* React Icon for dropdown arrow */}
                        </span>
                    </div>
                </div>
            </div>

            <div className="row mb-2">
                {/* Assignment Group */}
                <div className="col-md-3 d-flex align-items-center justify-content-end">
                    <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                </div>
                <div className="col-md-9">
                    <div className="input-group">
                        <select
                            id="wd-group"
                            className="form-control"
                            value={assignmentGroup}
                            onChange={(e) => setAssignmentGroup(e.target.value)}
                        >
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="PROJECT">PROJECT</option>
                            <option value="EXAM">EXAM</option>
                        </select>
                        <span className="input-group-text">
                            <FaChevronDown /> {/* React Icon for dropdown arrow */}
                        </span>
                    </div>
                </div>
            </div>


            {/* Options Section */}
            <div className="row mb-3">
                <div className="col-md-3 d-flex align-items-center justify-content-end">
                    <label htmlFor="wd-options" className="form-label">Options</label>
                </div>
                <div className="col-md-9">
                    <div className="border p-3">
                        {/* Shuffle Answers */}
                        <div className="form-check">
                            <input
                                type="checkbox"
                                id="shuffle-answers"
                                className="form-check-input"
                                checked={shuffleAnswers}
                                onChange={(e) => setShuffleAnswers(e.target.checked)}
                            />
                            <label htmlFor="shuffle-answers" className="form-check-label">Shuffle Answers</label>
                        </div>

                        {/* Time Limit */}
                        <div className="form-check d-flex align-items-center">
                            <input
                                type="checkbox"
                                id="time-limit"
                                className="form-check-input me-2"
                                checked={timeLimitEnabled}
                                onChange={(e) => setTimeLimitEnabled(e.target.checked)}
                            />
                            <label htmlFor="time-limit" className="form-check-label me-3">Time Limit</label>
                            {timeLimitEnabled && (
                                <input
                                    type="number"
                                    id="time-limit-minutes"
                                    className="form-control"
                                    placeholder="Enter time in minutes"
                                    style={{ maxWidth: '100px' }}
                                    value={timeLimit}
                                    onChange={(e) => setTimeLimit(Number(e.target.value))}
                                />
                            )}
                        </div>

                        {/* Allow Multiple Attempts */}
                        <div className="form-check d-flex align-items-center mt-3">
                            <input
                                type="checkbox"
                                id="multiple-attempts"
                                className="form-check-input me-2"
                                checked={multipleAttemptsEnabled}
                                onChange={(e) => setMultipleAttemptsEnabled(e.target.checked)}
                            />
                            <label htmlFor="multiple-attempts" className="form-check-label me-3">Allow Multiple Attempts</label>
                            {multipleAttemptsEnabled && (
                                <>
                                    <label htmlFor="number-of-attempts" className="form-check-label me-2">Number of Attempts</label>
                                    <input
                                        type="number"
                                        id="number-of-attempts"
                                        className="form-control"
                                        placeholder="Number of attempts"
                                        style={{ maxWidth: '80px' }}
                                        value={attemptsAllowed}
                                        onChange={(e) => setAttemptsAllowed(Number(e.target.value))}
                                    />
                                </>
                            )}
                        </div>

                        {/* One Question at a Time */}
                        <div className="form-check">
                            <input
                                type="checkbox"
                                id="one-question-at-a-time"
                                className="form-check-input"
                                checked={oneQuestionAtATime}
                                onChange={(e) => setOneQuestionAtATime(e.target.checked)}
                            />
                            <label htmlFor="one-question-at-a-time" className="form-check-label">One Question at a Time</label>
                        </div>

                        {/* Webcam Required */}
                        <div className="form-check">
                            <input
                                type="checkbox"
                                id="webcam-required"
                                className="form-check-input"
                                checked={webcamRequired}
                                onChange={(e) => setWebcamRequired(e.target.checked)}
                            />
                            <label htmlFor="webcam-required" className="form-check-label">Webcam Required</label>
                        </div>

                        {/* Lock Question after Answering */}
                        <div className="form-check">
                            <input
                                type="checkbox"
                                id="lock-question"
                                className="form-check-input"
                                checked={lockQuestionsAfterAnswering}
                                onChange={(e) => setLockQuestionsAfterAnswering(e.target.checked)}
                            />
                            <label htmlFor="lock-question" className="form-check-label">Lock Question after Answering</label>
                        </div>

                        {/* Access Code */}
                        <div className="form-group mt-3">
                            <label htmlFor="access-code" className="form-label">Access Code</label>
                            <input
                                type="text"
                                id="access-code"
                                className="form-control"
                                placeholder="Enter access code"
                                style={{ maxWidth: '300px' }}
                                value={accessCode}
                                onChange={(e) => setAccessCode(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/* Assign To, Due Date, and Availability */}
            <div className="row mb-3">
                <div className="col-md-3 d-flex justify-content-end">
                    <label className="form-label">Assign</label>
                </div>
                <div className="col-md-9">
                    <div className="border p-3">
                        {/* Assign To */}
                        <div className="mb-3">
                            <label htmlFor="wd-assign-to" className="form-label font-weight-bold">Assign to</label>
                            <div className="input-group">
                                <input
                                    id="wd-assign-to"
                                    value={selectedAssignTo}
                                    className="form-control"
                                    onChange={(e) => setSelectedAssignTo(e.target.value)} // Handle change
                                />
                                <span
                                    className="input-group-text"
                                    onClick={() => setSelectedAssignTo("")} // Clear the value on click
                                >
                                    <FaTimes /> {/* Cross icon */}
                                </span>
                            </div>
                        </div>

                        {/* Due Date */}
                        <div className="mb-3">
                            <label htmlFor="wd-due-date" className="form-label font-weight-bold">Due</label>
                            <div className="input-group">
                                <input
                                    id="wd-due-date"
                                    type="datetime-local"
                                    className="form-control"
                                    value={dueDate} // Controlled input
                                    onChange={(e) => setDueDate(e.target.value)} // Handle change
                                />
                                <span className="input-group-text">
                                    <FaCalendarAlt /> {/* Calendar icon */}
                                </span>
                            </div>
                        </div>

                        {/* Available From and Until */}
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="wd-available-from" className="form-label font-weight-bold">Available from</label>
                                <div className="input-group">
                                    <input
                                        id="wd-available-from"
                                        type="datetime-local"
                                        className="form-control"
                                        value={availableFrom} // Controlled input
                                        onChange={(e) => setAvailableFrom(e.target.value)} // Handle change
                                    />
                                    <span className="input-group-text">
                                        <FaCalendarAlt /> {/* Calendar icon */}
                                    </span>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="wd-available-until" className="form-label font-weight-bold">Until</label>
                                <div className="input-group">
                                    <input
                                        id="wd-available-until"
                                        type="datetime-local"
                                        className="form-control"
                                        value={availableUntil} // Controlled input
                                        onChange={(e) => setAvailableUntil(e.target.value)} // Handle change
                                    />
                                    <span className="input-group-text">
                                        <FaCalendarAlt /> {/* Calendar icon */}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}