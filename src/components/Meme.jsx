import React from "react";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes,setAllMemes]=React.useState([])
    
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])
    function getmemeimage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))        

    }
    function handlechange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return(
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="top text" 
                    name="topText"
                    value={meme.topText}
                    onChange={handlechange}
                />

                <input type="text" className="form--input" placeholder="bottom text" 
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handlechange}
                />
                
                <button  onClick={getmemeimage} className="form--button" >Get a new meme image 🖼</button>
                <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>

            </div>
        </main>
    )
}