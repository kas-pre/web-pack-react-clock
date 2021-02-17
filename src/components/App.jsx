import '../styles/index.scss';

import Title from './Title';
import Clock from './Clock';

function App() {
	const name = 'Precious';
	return (
		<div>
			<Title title={`Hello ${name}`} />
			<Clock />
		</div>
	);
}

export default App;

