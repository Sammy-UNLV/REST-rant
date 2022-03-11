const React = require('react')
const Def = require('./default')

function error404 () {
    return (
    <Def>
        <main>
            <h1> 404: PAGE NOT FOUND</h1>
            <h2> Oops, sorry we can't find this page!"</h2>
            <div>
                   <img height="800px" width="auto" src='/images/mulyadi-ZnLprInKM7s-unsplash.jpg' alt='MIssing Image' />
                    <div>
                        Photo by <a href="https://unsplash.com/@mullyadii?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mulyadi</a> on <a href="https://unsplash.com/s/photos/not-found?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
            <p>Oops, sorry, we can't find this page!</p>
        </main>
    </Def>
    )
}

module.exports = error404