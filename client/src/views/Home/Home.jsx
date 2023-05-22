import CountriesContainer from "../../components/CountriesContainer/CountriesContainer";
import SearchBar from "../../components/SearchBar/SearchBar";
import Paginado from "../../components/Paging/Paging";
import "./Home.Module.css";

const Home = () => {

// const dispatch = useDispatch()

// dispatch(getAllCountries())

// useEffect(() => {
//     dispatch(getAllCountries())
// }, [])

return(
    <div className="home">
        <SearchBar/>
        <Paginado/>
        <CountriesContainer />
    </div>
)
}

export default Home;