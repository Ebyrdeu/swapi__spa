import {Skeleton} from "@mui/material";

const CardListSkeleton = () => {
	return (
		<div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
			<Skeleton style={{margin: 8}} variant="rectangular" width={200} height={170} />
			<Skeleton style={{margin: 8}} variant="rectangular" width={200} height={170} />
			<Skeleton style={{margin: 8}} variant="rectangular" width={200} height={170} />
			<Skeleton style={{margin: 8}} variant="rectangular" width={200} height={170} />
			<Skeleton style={{margin: 8}} variant="rectangular" width={200} height={170} />
			<Skeleton style={{margin: 8}} variant="rectangular" width={200} height={170} />
			<Skeleton style={{margin: 8}} variant="rectangular" width={200} height={170} />
			<Skeleton style={{margin: 8}} variant="rectangular" width={200} height={170} />
			<Skeleton style={{margin: 8}} variant="rectangular" width={200} height={170} />
			<Skeleton style={{margin: 8}} variant="rectangular" width={200} height={170} />
		</div>
	);
};

export default CardListSkeleton;