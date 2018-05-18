// From the snippet below extract the following components:
// - UserInfo
// - Avatar
// - Comment Body
// - Badges

// You may organize each however you want.
// I have not provided any data. Try and break it down without, and add in some dummy datat when ready to test.
function Avatar(props) {
    return (
        <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
        />
    )
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar author={props.author} />
            <div className="UserInfo-name">
                {props.author.name}
            </div>
        </div>
    )
}

function CommentBody(props) {
    return (
        <div className="Comment-body">
            <h1>{props.commentHeading}</h1>
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">
                {props.date}
            </div>
        </div>
    )
}

function UserBadge(props) {
    return (
        <div className="UserBadges">
            <div className="badge">{props.userBadge[0]}</div>
            <div className="badge">{props.userBadge[1]}</div>
            <div className="badge">{props.userBadge[2]}</div>
        </div>
    )
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo author={props.author} />
            <CommentBody commentHeading={props.commentHeading} 
                text={props.text} 
                date={props.date} 
            />
            <UserBadge userBadge={props.userBadge} />
        </div>
    );
}

const Application = React.createClass({
    getInitialState: function () {
        return {
            data: [
                {
                    author: {
                        avatarUrl: "http://iconpopanswers.com/wp-content/uploads/2013/04/icomania-large-167.jpg",
                        name: "neo"
                    },
                    commentHeading: "I am the One.",
                    text: "Humanity, relax. I will save you.",
                    date: "Today",
                    userBadge: [
                        'Superman',
                        'Herald',
                        'Engineer'
                    ]
                },
                {
                    author: {
                        avatarUrl: "https://maxcdn.icons8.com/Color/PNG/512/Cinema/morpheus-512.png",
                        name: "Morpheus"
                    },
                    commentHeading: "There is no spoon.",
                    text: "Don't htink you are. KNow you are.",
                    date: "Two days ago",
                    userBadge: [
                        'The man',
                        'Bard',
                        'Samurai swordsman'
                    ]
                }
            ]
        }
    },
    render: function () {
        return (
            <div>
                {this.state.data.map((comment, i) => {
                    return (
                        <Comment author={comment.author} 
                            commentHeading={comment.commentHeading} 
                            text={comment.text}
                            userBadge={comment.userBadge}
                            date={comment.date}
                            key={i} />
                    )
                })}
            </div>
        )
    }
});

ReactDOM.render(
    <Application />,
    document.getElementById("root")
);