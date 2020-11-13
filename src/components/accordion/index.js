import React, {useState, useContext, createContext} from 'react';
import {Container, Inner, Header, Frame, Title, Item, Body} from './styles/accordion'

const ToggleContext = createContext();
export default function Accordion({children, ...restProps}){
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}
Accordion.Title = function AccordionTitle({container, ...restProps}) {
return <Title {...restProps}>{container}</Title>
}
Accordion.Item = function AccordionItem({container, ...restProps}) {
    const [toggleShow, setToggleShow] = useState(false)
    return  <ToggleContext.Provider value={{toggleShow, setToggleShow }}>
                <Item {...restProps}>{container}</Item>
            </ToggleContext.Provider>
}
Accordion.Header = function AccordionHeader({container, ...restProps}) {
    const { toggleShow, setToggleShow} = useContext(ToggleContext);
    return <Header onClick={() => setToggleShow((toggleShow) => !toggleShow)} {...restProps}>{container}</Header>
}
Accordion.Body = function AccordionBody({container, ...restProps}) {
    const {toggleShow} = useContext(ToggleContext);
    return (
        toggleShow ?
        <Body {...restProps}>{container}</Body> :
        null
    )
}
Accordion.Frame = function AccordionFrame({container, ...restProps}) {
    return <Frame {...restProps}> {children}</Frame>
}