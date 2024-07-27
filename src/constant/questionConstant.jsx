export const ADDQUESTIONS = {
  title: "Add Question",
  editTitle: "Edit questions",
  buttonText: "Submit",
  fieldDetail0: [
    {
      name: "questionNo",
      label: "Question No",
      type: "text",
      placeholder: "Add question No",
    },
    {
      name: "questionHint",
      label: "Hint",
      type: "text",
      placeholder: "Hint",
    },
  ],

  fieldDetail1: [
    {
      name: "question",
      label: "Question",
      type: "textArea",
      placeholder: "Add your question",
    },
  ],

  fieldDetail2: [
    {
      name: "answerOptions",
      label: "Optional Ans (Separate each option with a '**' sign)",
      type: "text",
      placeholder: "Separate each optional ans with ** symbol",
    },
  ],

  fieldDetail3: [
    {
      name: "answer",
      label: "Answer",
      type: "select",
      options: ["A", "B", "C", "D", "E", "F", "G", "H"],
    },
  ],
}

export const QUESTIONTABLE = ["No", "Page Title", "No Of Questions", "Action"]
