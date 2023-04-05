import React from 'react'


export const MainContent = ({children}) => {
    return (
        <div className="main-content">
            <section className="section">
                
                    {children}
                    {/* {cards.map((card) => (
                        <div
                            key={card.id}
                            className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12"
                        >
                            {console.log(card)}
                            <CardContainer
                                title={card.title}
                                description={card.description}
                                imageUrl={card.image}
                                color={card.color}
                            />
                        </div>
                    ))} */}

            </section>
        </div>
    )
}
