import useSwApiService from "../services/SwApiService";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
let i = 1;
const withInfoCard = (InfoCard, index) => () => {
	const {getChar, getMovie, loading, clearError} = useSwApiService();

	const {id} = useParams();

	const [click, setClick] = useState(false);
	const [infoData, setInfoData] = useState([]);

	const onCharRequest = () => {
		clearError();
		index  ? getChar(id).then(onInfoLoaded) : getMovie(id).then(onInfoLoaded);
	}

	const onInfoLoaded = info => setInfoData(info);

	useEffect(() => () => onCharRequest(), []);

	const View = ({info, type}) => <div>{info.map((e, i) => <div key={i}><Link to={`/info/${type}/${e.match(/\d+/)[0]}`}>{e}</Link></div>)}</div>

	return <InfoCard click={click} setClick={setClick} infoData={infoData} loading={loading} View={View}/>
}


export default withInfoCard;