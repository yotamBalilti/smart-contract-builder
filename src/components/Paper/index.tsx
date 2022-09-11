import { Container, Paper } from '@mui/material';

type PaperProps = {};

const index = (props: PaperProps) => {
	return (
		<Container>
			<Paper variant="outlined" square>
				index
			</Paper>
		</Container>
	);
};

export default index;
