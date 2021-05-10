import React from 'react'
import "./Banner.css"

function Banner() {

        // n is the number of characters
    function truncate(string, n) {
        return string?.length > n ? string.substring(0, n - 1) + '...' : string;
    }

    return (
        <header className = "banner" style={{
            background: "cover",
            backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
            backgroundPosition: "center center",
        }}>
            <div class="banner_contents">
                <h1 className = "banner_title">Movie name</h1>
                <div className = "banner_buttons">
                    <button className = "banner_button">Play</button>
                    <button className = "banner_button">My List</button>
                </div>
                <h1 className = "banner_description">
                    {truncate (
                        `This is a test description
                        his is a test description
                        This is a test description
                        TThis is a test description 
                        This is a test descriptionThis is a test description
                        his is a test description
                        This is a test description
                        TThis is a test description 
                        This is a test descriptionThis is a test description
                        his is a test description
                        This is a test description
                        TThis is a test description 
                        This is a test descriptionThis is a test description
                        his is a test description
                        This is a test description
                        TThis is a test description 
                        This is a test description`, 
                        200
                    )}
                    
                </h1>
            </div>

            <div className = "banner--fadeBottom"/>
                    
        </header>
    )
}

export default Banner

