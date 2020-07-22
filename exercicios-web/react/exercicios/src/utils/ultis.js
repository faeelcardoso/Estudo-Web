import React from 'react'

// Essa função eu clono cada filho
// para todos os filhos aplica um map, que cada vez que executar vai pegar um filho e aplicar um clone, pegando as propriedades do pai e do filho
export function childrenWithProps(props) {
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, {
            ...props, ...child.props
        })
    })
}