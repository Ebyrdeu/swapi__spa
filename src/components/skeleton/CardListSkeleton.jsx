import {Skeleton} from "@mui/material";

const CardListSkeleton = () => {
	return (
		<div style={{display: "inline"}}>


		<div style={{display: "flex", flexWrap: "wrap"}}>
			<Skeleton style={{margin: 8}} variant="rectangular" width={250} height={170} />
			<Skeleton style={{margin: 8}} variant="rectangular" width={250} height={170} />
			<Skeleton style={{margin: 8}} variant="rectangular" width={250} height={170} />
			<Skeleton style={{margin: 8}} variant="rectangular" width={250} height={170} />
			<Skeleton style={{margin: 8}} variant="rectangular" width={250} height={170} />
			<Skeleton style={{margin: 8}} variant="rectangular" width={250} height={170} />
			<Skeleton style={{margin: 8}} variant="rectangular" width={250} height={170} />
			<Skeleton style={{margin: 8}} variant="rectangular" width={250} height={170} />
			<Skeleton style={{margin: 8}} variant="rectangular" width={250} height={170} />
			<Skeleton style={{margin: 8}} variant="rectangular" width={250} height={170} />
		</div>
		</div>
	);
};

export default CardListSkeleton;