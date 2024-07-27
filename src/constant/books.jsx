import storyOne from "../assets/images/storyOne.jpg"
import storyTwo from "../assets/images/storyTwo.jpg"
import storyThree from "../assets/images/storyThree.png"
import storyFour from "../assets/images/storyFour.jpg"
import storyFive from "../assets/images/storyFive.jpg"
import storySix from "../assets/images/storySix.jpg"

export const ADDBOOK = {
  title: "Create Book",
  editTitle: "Edit Book",
  buttonText: "Submit",
  fieldDetail: [
    {
      name: "bookName",
      label: "Book Name",
      type: "text",
      placeholder: "e.g Nature for Primary five (5)",
    },
    {
      name: "bookType",
      label: "Book Type / Subject",
      type: "select",
      options: ["Mathematics", "General Science", "English Grammer"],
    },
    {
      name: "targetClass",
      label: "Target Class",
      type: "select",
      options: ["Primary 1", "Primary 2", "Primary 3"],
    },
    {
      name: "description",
      label: "Description",
      type: "text",
      placeholder: "Working books for math",
    },
  ],
}

export const BOOKTABLE = ["Book Name", "Type", "Class", "Status", "Action"]

export const ADDBOOKTYPE = {
  title: "Create Book Type",
  editTitle: "Edit Book Type",
  buttonText: "Submit",
  fieldDetail: [
    {
      name: "bookType",
      label: "Book Type",
      type: "text",
      placeholder: "e.g General Science",
    },
  ],
}

export const ADDPAGE = {
  title: "Add Page",
  editTitle: "Edit Book",
  buttonText: "Submit",
  fieldDetail: [
    {
      name: "pageName",
      label: "Page Name",
      type: "text",
      placeholder: "Page Name",
    },
    {
      name: "pageNo",
      label: "Page No",
      type: "number",
      placeholder: "Page No",
    },
  ],
}

export const BOOKS = [
  {
    image: storyOne,
    title: "Sample Card Title",
    description:
      "This is a sample description for the card. It can be a few sentences long.",
    author: "writer",
  },
  {
    image: storyTwo,
    title: "Sample Card Title",
    description:
      "This is a sample description for the card. It can be a few sentences long.",
    author: "writer",
  },
  {
    image: storyThree,
    title: "Sample Card Title",
    description:
      "This is a sample description for the card. It can be a few sentences long.",
    author: "writer",
  },
  {
    image: storyFour,
    title: "Sample Card Title",
    description:
      "This is a sample description for the card. It can be a few sentences long.",
    author: "writer",
  },
  {
    image: storyFive,
    title: "Sample Card Title",
    description:
      "This is a sample description for the card. It can be a few sentences long.",
    author: "writer",
  },
  {
    image: storySix,
    title: "Sample Card Title",
    description:
      "This is a sample description for the card. It can be a few sentences long.",
    author: "writer",
  },
]
