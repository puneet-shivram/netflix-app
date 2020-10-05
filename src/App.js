import React from 'react';
import Jumbotron from './components/jumbotron';
import jumboData from './fixtures/jumbo';
export default function App() {
  return (
      <Jumbotron.Container>
        {jumboData.map((item) => (
           <Jumbotron direction={item.direction} key={item.id}>
             <Jumbotron.Panel>
               <Jumbotron.Title>{item.title}</Jumbotron.Title>
               <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
             </Jumbotron.Panel>
             <Jumbotron.Panel>
                <Jumbotron.Image src={item.image} alt={item.alt} />
             </Jumbotron.Panel>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
  );
}
