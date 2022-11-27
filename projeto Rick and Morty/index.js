class calcController {
    constructor() {


        this.locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();


    }
    initialize() {

        setInterval(() => {
            this.displayDate = this.currentDate.toLocaleDateString(this.locale);
            this.displayTime = this.currentDate.toLocaleTimeString(this.locale);

        }, 1000);
    }
}