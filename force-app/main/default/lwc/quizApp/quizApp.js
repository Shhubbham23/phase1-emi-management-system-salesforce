import { LightningElement, track } from 'lwc';

export default class QuizApp extends LightningElement {
    questions = [
        {
            question: "What is LWC?",
            options: ["Library With Components", "Lightning Web Components", "Low Weight Code"],
            answer: "Lightning Web Components"
        },
        {
            question: "Which decorator makes a variable reactive?",
            options: ["@reactive", "@track", "@observable"],
            answer: "@track"
        },
        {
            question: "What file holds LWC HTML?",
            options: ["component.html", "template.html", "component.js"],
            answer: "component.html"
        },
        {
            question: "Which file defines component visibility?",
            options: ["meta.xml", "config.json", "manifest.xml"],
            answer: "meta.xml"
        },
        {
            question: "Which folder does an LWC component belong to?",
            options: ["/components", "/aura", "/lwc"],
            answer: "/lwc"
        },
        {
            question: "What method is called when component loads?",
            options: ["init()", "connectedCallback()", "onLoad()"],
            answer: "connectedCallback()"
        },
        {
            question: "Which directive is used for conditionals?",
            options: ["if:", "if:true", "*ngIf"],
            answer: "if:true"
        },
        {
            question: "What is @api used for?",
            options: ["Private properties", "Child to parent", "Public property"],
            answer: "Public property"
        },
        {
            question: "What is used to fetch Apex data?",
            options: ["@track", "@wire", "fetch()"],
            answer: "@wire"
        },
        {
            question: "What tag holds the UI?",
            options: ["quizApp.html", "<template>", "<script>"],
            answer: "<template>"
        }
    ];

    @track currentIndex = 0;
    @track score = 0;
    @track showScore = false;
    @track buttonsDisabled = false;
    @track optionList = [];

    // Timer Properties
    @track formattedTime = '00:00';
    isQuizStarted = false;
    timerInterval;
    totalSeconds = 0;

    get currentQuestion() {
        return this.questions[this.currentIndex];
    }

    connectedCallback() {
        this.startTimer();
        this.isQuizStarted = true;
        this.loadOptions();
    }

    loadOptions() {
        this.optionList = this.currentQuestion.options.map(opt => ({
            label: opt,
            className: 'option-button'
        }));
    }

    handleOptionClick(event) {
        const selected = event.target.dataset.id;
        const correct = this.currentQuestion.answer;
        this.buttonsDisabled = true;

        this.optionList = this.currentQuestion.options.map(opt => {
            if (opt === correct) {
                return { label: opt, className: 'correct option-button' };
            } else if (opt === selected) {
                return { label: opt, className: 'wrong option-button' };
            } else {
                return { label: opt, className: 'option-button' };
            }
        });

        if (selected === correct) {
            this.score += 1;
        }

        setTimeout(() => {
            if (this.currentIndex + 1 < this.questions.length) {
                this.currentIndex += 1;
                this.buttonsDisabled = false;
                this.loadOptions();
            } else {
                this.showScore = true;
                this.isQuizStarted = false;
                this.stopTimer();
            }
        }, 1000);
    }

    restartQuiz() {
        this.currentIndex = 0;
        this.score = 0;
        this.showScore = false;
        this.buttonsDisabled = false;
        this.loadOptions();
        this.totalSeconds = 0;
        this.formattedTime = '00:00';
        this.startTimer();
        this.isQuizStarted = true;
    }

    // Timer Methods
    startTimer() {
        this.stopTimer(); // clear old interval if any
        this.timerInterval = setInterval(() => {
            this.totalSeconds += 1;
            const minutes = Math.floor(this.totalSeconds / 60);
            const seconds = this.totalSeconds % 60;
            this.formattedTime = `${this.pad(minutes)}:${this.pad(seconds)}`;
        }, 1000);
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    pad(num) {
        return num < 10 ? '0' + num : num;
    }
}