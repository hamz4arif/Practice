
import Navbat from '../assignment/navbar'
import Hslidebar from '../assignment/hslidebar'
import Hcards from '../assignment/hcards'
import Hfooter from '../assignment/hfooter'
export default function Main() {
    return (
        <>
            <Navbat />
            <Hslidebar />
            <h1 style={{ textAlign: "center", marginTop: "20px" }}>Products</h1>
            <Hcards />
            <h2 style={{ textAlign: "center", marginTop: "20px" }}>Footer</h2>
            <Hfooter />
        </>
    )
}