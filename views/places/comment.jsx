const React = require('react')
const Def = require('../default')

function comment_form(data) {
    return (
        <Def>
            <main>
                <div>
                    <h1>Add a Comment</h1>
                    <form method="POST" action={`/places/${data.index}?_method=PUT`}>
                        <div className="row">
                            <div className="form-group col-sm-6">
                                <label htmlFor="authour">Author</label>
                                <input className="form-control" id="author" name="author" required/>
                            </div>
                            <div className="form-group col-sm-6">
                                <label htmlFor="content">Comment</label>
                                <input className="form-control" id="content" name="content" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-sm-6">
                                <label htmlFor="stars">Star Rating 1 - 5</label>
                                    <strong>Rating</strong>
                                    {/* <input
                                        class="rating"
                                        max="5"
                                        oninput="this.style.setProperty('--value', this.value)"
                                        step="0.5"
                                        type="range"
                                        value="1" >
                                    </label> */}
                            </div>
                            <div className="form-group col-sm-6">
                                <label htmlFor="state">State</label>
                                <input className="form-control" type="checkbox"  id="rant" name="rant" value="rant"/>
                            </div>
                        </div>
                        <input className="btn btn-primary" type="submit" value="Edit Place" />
                        
                    </form>
                </div>
            </main>
        </Def>
    );

module.exports = comment_form;