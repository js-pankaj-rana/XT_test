import React from 'react';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Label,
	ResponsiveContainer
} from 'recharts';

//# Context
// import { AppContext } from '../context/AppContext';

const Chart = ({chartData}) => {
	return (
		<div className="chart-container">
			{chartData && (
				<>
					<hr className="border-red" />
					<ResponsiveContainer>
						<LineChart
							height={300}
							data={chartData}
							margin={{ top: 5, right: 30, left: 30, bottom: 30 }}>
							<XAxis dataKey="name">
								<Label value="ID" offset={-20} position="insideBottom" />
							</XAxis>
							<YAxis
								label={{
									value: 'Votes',
									offset: -10,
									angle: -90,
									position: 'insideLeft'
								}}
							/>
							<CartesianGrid strokeDasharray="3 3" />
							<Tooltip />
							<Line
								type="monotone"
								dataKey="vote"
								stroke="#8884d8"
								activeDot={{ r: 8 }}
							/>
						</LineChart>
					</ResponsiveContainer>
				</>
			)}
		</div>
	);
};

export default React.memo(Chart) ;
