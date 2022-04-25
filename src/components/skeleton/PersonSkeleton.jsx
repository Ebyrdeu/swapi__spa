import {Skeleton} from "@mui/material";

const PersonSkeleton = () => {
	return (
		<div>
			<Skeleton width={400}/>
			<Skeleton width={200}/>
			<Skeleton width={190}/>
			<Skeleton width={180}/>
			<Skeleton width={170}/>
			<Skeleton width={180}/>
			<Skeleton width={150}/>
			<Skeleton width={190}/>
			<Skeleton width={130}/>
			<Skeleton width={120}/>
		</div>
	);
};

export default PersonSkeleton;