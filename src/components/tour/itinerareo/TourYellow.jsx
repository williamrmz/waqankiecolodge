import React from 'react';
import Day from './Day';

const TourYellow = () => {
	return (
		<div className="w-100 d-flex justify-content-center align-items-center flex-column">
			<h1>Itinerario</h1>
			<ul className="timeline w-65">
				<Day
					day={'DAY 1'}
					paragraph={`  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis exercitationem cupiditate ad, neque
                    esse labore magni libero ut iusto aut minima laudantium? Quae accusantium, aspernatur magnam illo cum qui
                    temporibus facilis adipisci at quas architecto deserunt voluptas neque sapiente ducimus incidunt fuga maiores
                    atque. Nostrum dolore sequi voluptatum vero!`}
				/>
				<Day
					day={'DAY 2'}
					paragraph={`  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis exercitationem cupiditate ad, neque
                    esse labore magni libero ut iusto aut minima laudantium? Quae accusantium, aspernatur magnam illo cum qui
                    temporibus facilis adipisci at quas architecto deserunt voluptas neque sapiente ducimus incidunt fuga maiores
                    atque. Nostrum dolore sequi voluptatum vero!`}
				/>
				<Day
					day={'DAY 3'}
					paragraph={`  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis exercitationem cupiditate ad, neque
                    esse labore magni libero ut iusto aut minima laudantium? Quae accusantium, aspernatur magnam illo cum qui
                    temporibus facilis adipisci at quas architecto deserunt voluptas neque sapiente ducimus incidunt fuga maiores
                    atque. Nostrum dolore sequi voluptatum vero!`}
				/>
			</ul>
		</div>
	);
};

export default TourYellow;
