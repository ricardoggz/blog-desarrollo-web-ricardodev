import React from 'react';
import {Card} from "../components/Card";

export const Main = () => {
    let cardsNames = {
        title: 'Variables'
    }
    return (
        <main>
            <section className="flex-container main-cards-container">
            <div className="cards-container">
                <Card/>
                <Card/>
            </div>
            </section>
        </main>
    )
}
