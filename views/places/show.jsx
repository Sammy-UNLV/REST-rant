const React = require("react");
const Def = require("../default");

function show(data) {
  console.log(data.id);
  let comments = <h3 className="inactive">No comments yet!</h3>;
  if (data.place.comments.length) {
    comments = data.place.comments.map((c) => {
      return (
          <div className="border col-4">
            <h2 className="rant">{c.rant ? "Rant! 😡" : "Rave! 😻"}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4 id="comment"> Rating: {c.stars}</h4>
          </div>
      );
    });
  }
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <img className="img-thumbnail" src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
            <p>Not Yet Rated</p>
            <h2>Description</h2>
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}</h4>
              <a href={`/places/${data._id}/edit`} className="btn btn-warning">
                Edit
              </a>
              <form method="POST" action={`/places/${data._id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </form>
          </div>
        </div>
        <h2>Comments</h2>
        <div className ="container">
          <div className="row d-flex justify-content-center">
              {comments}
          </div>
        </div>
        <hr></hr>
        <div>
          <h1>Add a Comment</h1>
          <form method="POST" action={`/places/${data.place.id}/comment?`}>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <textarea className="form-control" id="content" name="content" />
            </div>
            <div className="row">
              <div className="form-group col-sm-4">
                <label htmlFor="authour">Author</label>
                <input
                  className="form-control"
                  id="author"
                  name="author"
                  required
                />
              </div>
              <div className="form-group col-sm-4">
              <label htmlFor="stars">Star Rating</label>
                <input
                  className="form-range"
                  min="0"
                  max="5"
                  step="0.5"
                  type="range"
                  name="stars"
                />
              </div>
              <div className="form-group col-sm-4 d-flex align-items-center">
                <label htmlFor="rant">Rant</label>
                <input
                  className="form-control form-check-input"
                  type="checkbox"
                  id="rant"
                  name="rant"
                  value="rant"
                />
              </div>
            </div>
            <input
              className="btn btn-primary"
              type="submit"
              value="Submit Comment"
            />
          </form>
          <br></br>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
