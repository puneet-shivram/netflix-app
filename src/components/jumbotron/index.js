import React from 'react';
import {Inner, Container, Panel, Item, Title, SubTitle, Image} from './styles/jumbotron'
export default function Jumbotron({children, direction = 'row', ...restProps}){
    return (
        <Item>
            <Inner direction={direction}>
                {children}
            </Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotronContainer({children, ...restProps}){
    return <Container {...restProps}>
        {children}
    </Container>
}
Jumbotron.Panel = function JumbotronPanel({children, ...restProps}){
    return <Panel {...restProps}>
        {children}
    </Panel>
}
Jumbotron.Title = function JumbotronTitle({children, ...restProps}){
    return <Title {...restProps}>
        {children}
    </Title>
}
Jumbotron.SubTitle = function JumbotronSubTitle({children, ...restProps}){
    return <SubTitle {...restProps}>
        {children}
    </SubTitle>
}
Jumbotron.Image = function JumbotronImage({...restProps}){
    return <Image {...restProps} />
}
