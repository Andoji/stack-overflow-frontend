import React from 'react'
import Questions from './Questions'
const QuestionList = ({questionsList}) => {
  return(
    <div>
        {
        questionsList.map((questions) => (
        <Questions question={questions} key={questions._id}/>
        ))
    }
    </div>
  )
}

export default QuestionList
