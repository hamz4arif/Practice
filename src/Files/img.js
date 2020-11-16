
function Img(props) {
    return (
        <div style={{flex:"1" ,flexDirection:"row"}}>
            <div className="card" style={{ width: "200px" }} >
                <img className="card-img-top" src={props.pic} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.disc}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
export default Img