const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
           <main>
               <h1>REST-Rant</h1>
               <div>
                   <img className="hero" src='/images/douglas-lopez-liMmuoVgmt0-unsplash.jpg' alt='Plate of delicious food' />
                    <div>
                        Photo by <a href="https://unsplash.com/@dougglaslopez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Douglas Lopez</a> on <a href="https://unsplash.com/s/photos/food-brazil?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href="/places"><button className="btn-primary">Places Page</button></a>
            </main>
        </Def>
    )
}

module.exports = home