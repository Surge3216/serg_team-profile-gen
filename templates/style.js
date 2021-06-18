const style = `
html, body {
    max-width: 100% !important;
    overflow-x: hidden !important;
}
body {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.banner-bar {
    background-color: rgb(223,221,218);
    width: 100%;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
}
h1 {
    font-family: Bebas Neue;
    font-size: 8vw;
}
p {
    font-family: 'Roboto Condensed', sans-serif;
    position: relative;
    left: 12px;
}
h2 {
    font-family: 'Roboto Condensed', sans-serif;
    position: relative;
    font-size: 17px;
    left: 12px;
}
.member-card {
    width: 275px;
    height: 54vh;
    margin-bottom: 5vh;
    background-color: rgb(222,221,217);
    box-shadow: 5px 7px 7px black;
    border-top-left-radius: 15px;
}
.card-container {
    position: absolute;
    top: 24vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 60vw;
}
.card-top {
    border: 2px solid rgb(222,221,217);
    background-color: rgb(121,37,199);
    width: 274px;
    border-top-left-radius: 10px;
}
.card-bottom {
    display: flex;
    flex-direction: column;
    align-content: center;
}
`

module.exports = style;