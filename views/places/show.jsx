const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <p>Not Yet Rated</p>
            <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                Edit
            </a>
            <p>Founded: { data.place.founded }</p>
            <p>{ data.place.city}</p>  
            <p>{ data.place.state }</p>     
            <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form>     
          </main>
        </Def>
    );
}

module.exports = show;

