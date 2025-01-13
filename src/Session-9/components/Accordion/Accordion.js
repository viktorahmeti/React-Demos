import './Accordion.css';
import Card from '../Card/Card'
import { useEffect, useState } from 'react';

function Accordion(){
    const [openIndex, setOpenIndex] = useState(0);

    //we get these from a server with fetch
    const facts = [
        {
            title: 'Albania',
            description: 'Albania is known as the "Land of Eagles" and has a double-headed eagle on its flag.'
        },
        {
            title: 'Japan',
            description: 'Japan is home to the world’s oldest company, Kongō Gumi, which was founded in 578 AD.'
        },
        {
            title: 'Canada',
            description: 'Canada has the longest coastline in the world, spanning over 202,080 kilometers.'
        },
        {
            title: 'Brazil',
            description: 'Brazil is the only country in South America where Portuguese is the official language.'
        },
        {
            title: 'Australia',
            description: 'Australia is home to more than 10,000 beaches – you could visit a new beach every day for over 27 years.'
        }
    ];    

    return <div className='Accordion'>
        {
            facts.map((fact, index) => <Card title={fact.title} description={fact.description} isOpen={index === openIndex} openCard={() => setOpenIndex(index)}></Card>)
        }
    </div>
}

export default Accordion;