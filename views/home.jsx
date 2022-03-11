const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <html>
                <head>
                    <link rel="stylesheet" href="../css/style.css"></link> 
                </head>
                <main>
                    <h1>Home</h1>
                    <a href="/places">
                        <button className="btn-primary">Places Page</button>
                    </a>
                </main>
            </html>
        </Def>
    )
}

module.exports = home