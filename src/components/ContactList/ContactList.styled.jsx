import styled from 'styled-components'

 export const Phonebook = styled.div`
     max-width: 1300px;
     text-align: center;
     margin: 0 auto;
     background-color: #afa8a8;
     padding: 50px;
 `

 export const Box = styled.div`
     margin: auto;
 `

 export const Text = styled.p`
     font-size: 40px;
     color: black;
 `

 export const List = styled.ul`
     list-style-type: none;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     padding: 0%;

 `

 export const Item = styled.li`
 background-color: #fff;
 border: 1px solid grey;
 border-radius: 5px;
 padding: 5px;
 max-width: 350px;
 min-width: 300px;
     
 `
export const Button = styled.button`
border: 1px solid grey;
border-radius: 5px;
padding: 3px 6px;
&:hover, 
&:focus{
    background-color: #cdbbbb;
}
`