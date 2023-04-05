import React from 'react'
import cards from '../../../../core/models/card_dasboard_model'
import { CardContainer } from '../../components/card_container'
export const MainPage = () => {
    return (
        <div class="row ">
            {
                cards.map((card) => (
                    <div
                        key={card.id}
                        class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12"
                    >
                        {console.log(card)}
                        <CardContainer
                            title={card.title}
                            description={card.description}
                            imageUrl={card.image}
                            color={card.color}
                        />
                    </div>
                ))
            }

        </div>
    )
}
