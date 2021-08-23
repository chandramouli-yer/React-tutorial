import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
import faker from 'faker'
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard >
                <CommentDetail 
                author="Chandramouli" 
                timeAgo="Today at 12:00AM"
                 avatar={faker.image.avatar()} comment="It's a great post" />
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail author="Gowthami" timeAgo="Today at 9:00PM" avatar={faker.image.avatar()} comment="I Love Mouli" />
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail author="Naveen" timeAgo="Today at 8:00AM" avatar={faker.image.avatar()} comment="This is cool" />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))