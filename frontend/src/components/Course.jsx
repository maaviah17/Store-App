import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";

function Courses(){

    return (
        <>
        <div className="max-w-screen-2xl container mx-autp md:px-20 px-4">
            <div className="mt-28 items-center jsutify-center text-center">
               <h1 className="text-2xl "> We're delighted to have you <span className="text-pink-500">Here ! :)</span></h1>
               <p className="mt-12">Lorem ipsum this that bla bla come on lorem ipsum,Lorem ipsum this that bla bla come on lorem ipsum because it is thsum,Lorem ipsum this that bla bla come on lorem ipsum because it is th sum,Lorem ipsum this that bla bla come on lorem ipsum because it is th e main cause of water slide.</p>
               <Link to={"/"}><button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button></Link>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
                {
                    list.map((item)=>(
                        <Cards key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default Courses;
